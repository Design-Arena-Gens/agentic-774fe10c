import { NextResponse } from 'next/server';

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }
    // In production, integrate with email service (e.g., Resend, Sendgrid).
    console.log('Contact message:', body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
}
