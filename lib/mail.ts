import nodemailer from "nodemailer";

export async function sendRegistrationEmail({ toEmail, name }: { toEmail: string; name: string }) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const subject = `Welcome to zyncUI, ${name}!`;

  const html = `<div style="font-family: Arial, sans-serif; padding: 20px; color: #000;">
            <div style="max-width: 600px; margin: 0 auto;">
                <h2 style="font-size: 22px; margin-bottom: 20px;">Welcome to zyncUI</h2>

                <p style="font-size: 16px;">Hi <strong>${name}</strong>,</p>

                <p style="font-size: 16px;">
                    Thanks for signing up to <strong>zyncUI</strong> — a library of pre-built, production-ready React + Tailwind UI components.
                </p>

                <p style="font-size: 16px;">
                From full pages, to reusable sections like hero banners, pricing tables, and testimonials — zyncUI helps you build faster without starting from scratch.
                </p>

                <p style="text-align: center; margin: 30px 0;">
                    <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="padding: 10px 20px; text-decoration: none; background-color: #000; color: #fff; border-radius: 4px; font-size: 16px; display: inline-block;">
                        Explore Ready-made UIs
                    </a>
                </p>


                <p style="font-size: 14px;">
                Questions? Visit our <a href="${process.env.NEXT_PUBLIC_APP_URL}/support">support page</a>.
                </p>

                <p style="font-size: 16px; margin-top: 10px;">
                - zyncUI Team
                </p>
            </div>
        </div>`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: toEmail,
    subject,
    html,
  });
}
