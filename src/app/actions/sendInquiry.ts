"use server";

import { Resend } from 'resend';

export async function sendInquiry(formData: any) {
  const { name, email, phone, sessionType, location, message } = formData;
  
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is missing");
    return { success: false, error: "Configuration error" };
  }

  const resend = new Resend(apiKey);

  try {
    // 1. Try to add to Resend Audience
    if (audienceId) {
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      try {
        await resend.contacts.create({
          email: email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
          audienceId: audienceId,
        });
        console.log(`✅ Added ${email} to Resend Audience`);
      } catch (contactError: any) {
        console.error("⚠️ Resend Audience Error:", contactError?.message || contactError);
      }
    }

    // 2. Send the notification email to you
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
