import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, phone, email, service, date, time, message } = body;

    if (!name || !phone || !date) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, phone, and date are required.' })
      };
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error: Missing Resend API key.' })
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'AWD Diagnostic <onboarding@resend.dev>',
      to: ['www.lovekush2018@gmail.com'],
      subject: `New Appointment Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #ccfbf1; padding-bottom: 10px;">New Diagnostic Appointment</h2>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>Test / Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Preferred Time:</strong> ${time || 'Not specified'}</p>
          ${message ? '<div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #14b8a6; margin-top: 20px;"><strong>Message:</strong><br/>' + message + '</div>' : ''}
          <br/>
          <p style="font-size: 12px; color: #64748b; margin-top: 30px; text-align: center;">This is an automated message from your AWD Diagnostic website via Resend.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send email via Resend.' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Booking received and email sent successfully.', id: data?.id })
    };
  } catch (error) {
    console.error('Error handling request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An unexpected error occurred while processing the request.' })
    };
  }
};
