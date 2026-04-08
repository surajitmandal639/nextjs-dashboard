'use server';

import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import nodemailer from 'nodemailer';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function createContact(formData: FormData) {
  // Simple validation (Like Laravel's $request->validate)
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await sql`
      INSERT INTO contacts (full_name, email, message)
      VALUES (${name as string}, ${email as string}, ${message as string})
    `;
    
    // Purge the cache for the home/contact page so new data shows up
    revalidatePath('/'); 
    return { message: 'Success' };
  } catch (error) {
    return { message: 'Database Error: Failed to create contact.' };
  }
}

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // ১. ট্রান্সপোর্টার সেটআপ (SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // ২. ইমেইল পাঠানো
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // যিনি মেসেজ পাঠাচ্ছেন
      to: "surajitmandal639@gmail.com", // আপনার জিমেইল
      subject: `New Portfolio Message from ${name}`,
      text: message as string,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ৩. ইউজারকে একটি ওয়েলকাম রিপ্লাই পাঠানো
    await transporter.sendMail({
      from: `"Surajit Mandal" <${process.env.EMAIL_USER}>`, // আপনার নাম ও ইমেইল
      to: email as string, // ইউজারের ইমেইল (যিনি কন্টাক্ট করেছেন)
      subject: "Thanks for reaching out!",
      text: `Hi ${name}, thank you for contacting me. I have received your message and will get back to you soon!`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Hello ${name}! 👋</h2>
          <p>Thank you for reaching out to me through my portfolio. I've received your message and I'm excited to connect with you!</p>
          <p>I usually respond within 24 hours. In the meantime, feel free to check out my latest projects.</p>
          <br />
          <p>Best Regards,<br /><strong>Surajit Mandal</strong></p>
        </div>
      `,
    });
    
    return { message: 'Success' };
  } catch (error) {
    console.error('Email Error:', error);
    return { message: 'Error' };
  }
}
