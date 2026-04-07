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

    return { message: 'Success' };
  } catch (error) {
    console.error('Email Error:', error);
    return { message: 'Error' };
  }
}
