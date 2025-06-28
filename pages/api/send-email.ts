import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message,phone,company,service } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: name,  email:"khandekarpranav52@gmail.com" }, // or your verified sender email
        to: [{ email: 'pranavkhandekar152@gmail.com', name: 'Receiver' }],
        subject: 'New Contact Form Message',
        htmlContent: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong> ${message}</p>
        <p><strong>phone:</strong> ${phone}</p><p><strong>company:</strong> ${company}</p><p><strong>Service:</strong> ${service}</p>`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(500).json({ error: 'Failed to send email', detail: errorData });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
