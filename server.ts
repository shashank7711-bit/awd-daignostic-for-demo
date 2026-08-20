import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email sending endpoint
  app.post('/api/book', async (req, res) => {
    const { name, phone, email, service, date, time, message } = req.body;

    try {
      // Validate input minimally
      if (!name || !phone || !date) {
        return res.status(400).json({ error: 'Name, phone, and date are required.' });
      }

      if (!process.env.RESEND_API_KEY) {
        console.error("Missing RESEND_API_KEY");
        return res.status(500).json({ error: 'Server configuration error: Missing Resend API key.' });
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: 'AWD Diagnostic <onboarding@resend.dev>', // Resend testing domain
        to: ['www.lovekush2018@gmail.com'], // The email registered with your Resend account
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
            ${message ? `<div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #14b8a6; margin-top: 20px;"><strong>Message:</strong><br/>${message}</div>` : ''}
            <br/>
            <p style="font-size: 12px; color: #64748b; margin-top: 30px; text-align: center;">This is an automated message from your AWD Diagnostic website via Resend.</p>
          </div>
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return res.status(500).json({ error: 'Failed to send email via Resend.' });
      }

      res.status(200).json({ success: true, message: 'Booking received and email sent successfully.', id: data?.id });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An unexpected error occurred while sending email.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.redirect(301, '/');
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
