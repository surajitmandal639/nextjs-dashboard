'use server';

import postgres from 'postgres';
import { revalidatePath } from 'next/cache';

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
