"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { ContactFormData, contactSchema } from '@/lib/validation/contact';
import { toast } from "sonner"

interface Props {
  title: string;
  subtitle: string;
}

const Contact = ({ title, subtitle }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Submission failed");
      }

      reset();
      router.refresh();
      toast.success("Thank you for reaching out!")
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div className="py-5">
      <div className="flex flex-col gap-y-3 pb-5">
        <h6 className="text-h6-bold">{title}</h6>
        <p className="opacity-70">{subtitle}</p>
      </div>
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-between flex gap-3">
          <div className="w-[49%] h-12">
            <Input type="text" placeholder="Full Name" {...register('fullName')} />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>
          <div className="w-[49%] h-12">
            <Input type="email" placeholder="Email Address" {...register('email')} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <Textarea placeholder="Write your message" {...register('message')} className="min-h-32 max-h-44" />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <Button type="submit" size="lg">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;
