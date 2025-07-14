
import { connectToDatabase } from '@/lib/database';
import ContactMessage from '@/lib/database/models/contactMessage.model';
import { contactSchema } from '@/lib/validation/contact';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(JSON.stringify({
        error: "Validation failed",
        issues: parsed.error.format()
      }), { status: 400 });
    }

    const { fullName, email, message } = parsed.data;

    await connectToDatabase();
    await ContactMessage.create({ fullName, email, message });

    return new Response(JSON.stringify({ message: 'Message saved successfully' }), { status: 201 });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase()

    const messages = await ContactMessage.find().sort({ createdAt: -1 })

    return NextResponse.json(messages, { status: 200 })
  } catch (error) {
    console.error('Failed to get messages:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}