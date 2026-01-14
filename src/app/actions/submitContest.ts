"use server";

import { Resend } from 'resend';

export async function submitContest(formData: any) {
  const { firstName, lastName, email, phone, location } = formData;
  
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is missing in Vercel environment variables");
    return { success: false, error: "Configuration error" };
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Try to add to Resend Audience (Contacts)
    if (audienceId) {
      try {
        console.log(`📡 Attempting to add contact to audience ${audienceId}: ${email}`);
        await resend.contacts.create({
          email: email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
          audienceId: audienceId,
        });
        console.log(`✅ Successfully added ${email} to Resend Audience`);
      } catch (contactError: any) {
        // If the contact already exists, Resend might return an error. 
        // We log it but continue so the email still sends.
        console.error("⚠️ Resend Audience Error:", contactError?.message || contactError);
      }
    } else {
      console.warn("⚠️ RESEND_AUDIENCE_ID is missing. Contact will not be saved to your list.");
    }

    // 2. Send the notification email to you
    const { data, error } = await resend.emails.send({
      from: 'Carly Gage Photography <hello@carlygage.com>',
      to: ['carlygagephotography@gmail.com'],
      subject: `New Contest Entry: ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Spring 2026 Contest Entry</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">This entry was submitted via the contest landing page.</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend Email Error:", error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error: any) {
    console.error("❌ Server Action Error:", error?.message || error);
    return { success: false, error };
  }
}
