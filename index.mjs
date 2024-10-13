import { MailtrapClient } from "mailtrap";

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "70bbdf53b2da9145556c077440dce432";
const SENDER_EMAIL = "threadspark@demomailtrap.com";
const RECIPIENT_EMAIL = "seyyeduvais@gmail.com";

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to Mailtrap Sending!",
  })
  .then(console.log)
  .catch(console.error);
