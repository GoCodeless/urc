// app/api/send-email/route.js

import { NextResponse } from 'next/server';
import mailgun from 'mailgun-js';

export async function POST(req) {
  const { email, subject, message } = await req.json();
  const DOMAIN = "tryouterbase.com";
  const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});
  const data = {
    from: "Mailgun Sandbox <postmaster@tryouterbase.com>",
    to: email,
    subject: subject,
    text: message
  };

  return new Promise((resolve, reject) => {
    mg.messages().send(data, function (error, body) {
      if (error) {
        return resolve(NextResponse.json({ error: error.message }, { status: 500 }));
      }
      resolve(NextResponse.json({ message: "Email sent successfully!", body }, { status: 200 }));
    });
  });
}
