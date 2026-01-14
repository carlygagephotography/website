"use server";

import { Resend } from 'resend';

export async function submitContest(formData: any) {
  const { firstName, lastName, email, phone, location } = formData;
  
  const apiKey = process.env.RESEND_API_KEY;
  // We use the Vercel variable if it exists, otherwise we use your specific ID as a hard fallback
  const audienceId = process.env.RESEND_AUDIENCE_ID || "0850988a-a3b1-484b-8a71-0d1aae3f53b9";

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is missing");
    return { success: false, error: "Configuration error" };
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Add to Resend Audience (Saves them as a CONTACT with custom properties)
    try {
      console.log(`📡 Adding ${email} to Resend Audience...`);
      await resend.contacts.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        unsubscribed: false,
        audienceId: audienceId.trim(),
        // Adding custom properties for Phone and Location
        properties: {
          phone: phone,
          location: location,
          source: "contest_page"
        }
      });
      console.log(`✅ Successfully added to Resend Audience with custom properties`);
    } catch (contactError: any) {
      console.warn("ℹ️ Resend Audience Notice:", contactError?.message || "Contact likely already exists");
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

    if (error) return { success: false, error };
    return { success: true };
  } catch (error: any) {
    console.error("❌ Server Error:", error?.message || error);
    return { success: false, error };
  }
}
