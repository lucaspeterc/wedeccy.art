import mailgun from 'mailgun-js';

// Make sure you import your environment variables
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export async function POST(req) {
  try {
    const { firstName, lastName, email, phoneNumber, message } = await req.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: 'Email and message are required' }),
        { status: 400 }
      );
    }

    const data = {
      from: 'Your Website <no-reply@yourdomain.com>', // This can be the sender email set up in Mailgun
      to: process.env.CONTACT_RECEIVER_EMAIL, // Your email address where you want to receive the contact form messages
      subject: 'New Contact Form Submission',
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
        Message: ${message}
      `,
    };

    const response = await mg.messages().send(data);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully', response }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Error sending email' }),
      { status: 500 }
    );
  }
}
