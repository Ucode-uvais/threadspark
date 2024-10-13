import { NextResponse } from "next/server";
import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_API_TOKEN!;

const client = new MailtrapClient({ token: TOKEN });

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    const sender = {
      name: "ThreadSpark AI",
      email: "threadspark@demomailtrap.com",
    };
    const recipients = [{ email }];

    await client.send({
      from: sender,
      to: recipients,
      subject: "Welcome to ThreadSpark AI!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: #4A90E2;">Welcome to ThreadSpark AI, ${name}!</h1>
          <p>We are thrilled to have you as a part of our growing community. At <strong>ThreadSpark AI</strong>, we believe in the power of creative storytelling, and we're excited to help you craft threads that truly resonate with your audience.</p>
          
          <p>Here are a few things you can do to get started:</p>
          <ul>
            <li><strong>Explore AI-Powered Threads:</strong> Dive into our platform and experiment with AI-generated Twitter threads that capture attention.</li>
            <li><strong>Customize Your Content:</strong> Tailor your threads to match your unique voice and style, ensuring they stand out.</li>
            <li><strong>Join the Conversation:</strong> Engage with other creators and learn new tips on how to maximize your impact.</li>
          </ul>
          
          <p>If you ever need assistance, our support team is here to help. You can reach out to us at any time via <a href="mailto:support@threadspark.com" style="color: #4A90E2;">support@threadspark.com</a>.</p>
          
          <p style="margin-top: 20px;">Thank you for choosing <strong>ThreadSpark AI</strong>! We can't wait to see what you'll create.</p>
          
          <p>With appreciation,<br/><strong>The ThreadSpark AI Team</strong></p>
          
          <footer style="margin-top: 40px; font-size: 12px; color: #999;">
            <p>You're receiving this email because you signed up for ThreadSpark AI. If you no longer wish to receive emails from us, you can <a href="#" style="color: #999;">unsubscribe here</a>.</p>
            <p>ThreadSpark AI, 123 Creative Lane, Innovation City, IN 12345</p>
          </footer>
        </div>
      `,
      category: "Welcome Email",
    });

    return NextResponse.json({ message: "Welcome email sent successfully" });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json(
      { error: "Failed to send welcome email" },
      { status: 500 }
    );
  }
}
