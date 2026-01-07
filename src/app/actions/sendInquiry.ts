"use server";

import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendInquiry(formData: any) {
  const { name, email, phone, sessionType, location, message } = formData;

  if (!resend) {
    console.error("Resend API key is not configured");
    return { 
      success: false, 
      error: "Email service is not configured. Please contact carlygagephotography@gmail.com directly." 
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Carly Gage Photography <hello@carlygage.com>', // Verified domain
      to: ['carlygagephotography@gmail.com'],
      subject: `New Family Session Inquiry: ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f0e6; color: #0f172a;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f0e6; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #f5f0e6; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">New Session Inquiry</h1>
                      <p style="margin: 8px 0 0 0; color: #e6ddcf; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Carly Gage Photography</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e6ddcf;">
                            <strong style="color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Name</strong>
                            <span style="color: #475569; font-size: 16px;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e6ddcf;">
                            <strong style="color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Email</strong>
                            <a href="mailto:${email}" style="color: #7a8f7a; font-size: 16px; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e6ddcf;">
                            <strong style="color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Phone</strong>
                            <a href="tel:${phone}" style="color: #7a8f7a; font-size: 16px; text-decoration: none;">${phone}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e6ddcf;">
                            <strong style="color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Session Type</strong>
                            <span style="color: #475569; font-size: 16px; text-transform: capitalize;">${sessionType}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e6ddcf;">
                            <strong style="color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Location</strong>
                            <span style="color: #475569; font-size: 16px;">${location}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px 0 0 0;">
                            <strong style="color: #0f172a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Message</strong>
                            <div style="background-color: #f5f0e6; padding: 20px; border-radius: 6px; border-left: 3px solid #7a8f7a; color: #475569; font-size: 15px; line-height: 1.6;">${message}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f5f0e6; padding: 30px; text-align: center; border-top: 1px solid #e6ddcf;">
                      <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.5;">
                        This inquiry was submitted through carlygage.com<br>
                        Please respond within 24 hours
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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

