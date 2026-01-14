"use server";

import { Resend } from 'resend';

export async function sendInquiry(formData: any) {
  const { name, email, phone, sessionType, location, message } = formData;
  
  const apiKey = process.env.RESEND_API_KEY;
  // Use the env var, but fallback to your specific ID if it's missing
  const audienceId = process.env.RESEND_AUDIENCE_ID || "0850988a-a3b1-484b-8a71-0d1aae3f53b9";

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is missing");
    return { success: false, error: "Configuration error" };
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Add to Resend Audience
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    try {
      await resend.contacts.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        unsubscribed: false,
        audienceId: audienceId.trim(),
      });
      console.log(`✅ Added ${email} to Resend Audience`);
    } catch (contactError: any) {
      console.warn("ℹ️ Resend Audience Notice:", contactError?.message || "Contact likely already exists");
    }

    // 2. Send the notification email
    const { data, error } = await resend.emails.send({
      from: 'Carly Gage Photography <hello@carlygage.com>',
      to: ['carlygagephotography@gmail.com'],
      subject: `New Family Session Inquiry: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Session Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Session Type:</strong> ${sessionType}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Vision:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
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
