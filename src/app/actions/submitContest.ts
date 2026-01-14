"use server";

import { Resend } from 'resend';

export async function submitContest(formData: any) {
  const { firstName, lastName, email, phone, location } = formData;
  
  // Try to get the keys from environment variables
  const apiKey = process.env.RESEND_API_KEY;
  // We check both standard and common Vercel prefixes just in case
  const audienceId = process.env.RESEND_AUDIENCE_ID || process.env.NEXT_PUBLIC_RESEND_AUDIENCE_ID;

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is missing in environment variables");
    return { success: false, error: "Configuration error" };
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Try to add to Resend Audience (Contacts)
    if (audienceId && audienceId.trim() !== "") {
      try {
        console.log(`📡 Adding contact to audience: ${audienceId}`);
        await resend.contacts.create({
          email: email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
          audienceId: audienceId.trim(),
        });
        console.log(`✅ Successfully added ${email} to Resend Audience`);
      } catch (contactError: any) {
        // If they are already in the list, Resend might return a 422 or error message
        console.warn("ℹ️ Resend Audience Notice:", contactError?.message || "Contact might already exist or ID is invalid");
      }
    } else {
      // This is the warning you are seeing
      console.warn("⚠️ RESEND_AUDIENCE_ID is not detected in this environment.");
    }

    // 2. Send the notification email
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
