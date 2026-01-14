"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContest(formData: any) {
  const { firstName, lastName, email, phone, location } = formData;

  try {
    // Add to Resend Audience (Contacts) if AUDIENCE_ID is provided
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      try {
        await resend.contacts.create({
          email: email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
          audienceId: audienceId,
        });
        console.log(`✅ Contest contact added to Resend: ${email}`);
      } catch (contactError) {
        console.error("Error adding contact to Resend:", contactError);
      }
    }

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
          <p style="margin-top: 20px; font-size: 12px; color: #666;">This entry was submitted via the hidden contest landing page.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error };
  }
}
