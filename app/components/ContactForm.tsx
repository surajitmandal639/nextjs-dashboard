'use client';
import { useRef, useState } from 'react';
import { createContact, sendEmailAction } from '@/app/lib/actions';
import toast from 'react-hot-toast';
import FormInput from './FromInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const formRef = useRef<HTMLFormElement>(null);

    // async function handleAction(formData: FormData) {
    //     const name = formData.get('name') as string;
    //     const email = formData.get('email') as string;
    //     const message = formData.get('message') as string;
    //     const newErrors: { [key: string]: string } = {};

    //     // Fast Validation Logic
    //     if (name.length < 3) newErrors.name = "Name is too short";
    //     if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email format";
    //     if (message.length < 10) newErrors.message = "Message must be 10+ chars";

    //     if (Object.keys(newErrors).length > 0) {
    //         setErrors(newErrors);
    //         return; 
    //     }

    //     setErrors({}); 
    //     const loadingToast = toast.loading('Sending...');
        
    //     try {
    //         const result = await createContact(formData);
    //         if (result.message === 'Success') {
    //             toast.success('Message sent!', { id: loadingToast });
    //             formRef.current?.reset(); // Use Ref instead of getElementById
    //         } else {
    //             toast.error(result.message, { id: loadingToast });
    //         }
    //     } catch (err) {
    //         toast.error('Network error!', { id: loadingToast });
    //     }
    // }

    async function handleAction(formData: FormData) {
        const loading = toast.loading('Sending...');
        const result = await sendEmailAction(formData);
        if (result.message === 'Success') {
            toast.success('Email sent to Surajit!', { id: loading });
            formRef.current?.reset();
        } else {
            toast.error('Failed to send email!', { id: loading });
        }
    }

    return (
        <form ref={formRef} action={handleAction} className="space-y-5">
            <FormInput 
                label="Your Name" 
                name="name" // Important: must match formData.get('name')
                placeholder="Surajit" 
                error={errors.name}
            />
            
            <FormInput 
                label="Email Address" 
                name="email" 
                type="email" 
                placeholder="name@email.com" 
                error={errors.email}
            />

            <div>
                <label className="block text-sm font-medium mb-2 opacity-70">Message</label>
                <textarea 
                    name="message"
                    rows={4} 
                    className={`w-full p-4 rounded-2xl border bg-white dark:bg-slate-800 focus:ring-2 ring-blue-500 outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-slate-700'
                    }`}
                    placeholder="How can I help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-2 font-medium">{errors.message}</p>}
            </div>

            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
}
