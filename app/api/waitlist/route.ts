import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, trade, business_name, phone } = body;

    if (!name || !email || !trade || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert to Supabase
    const { error: supabaseError } = await supabase.from('waitlist').insert({
      name,
      email,
      trade,
      business_name: business_name || null,
      phone,
    });

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save your details. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email
    const mailOptions = {
      from: `"TradieVoice" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'You\'re on the list! 🎉',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">You're in, ${name}!</h2>
          <p>Thanks for joining the TradieVoice waitlist.</p>
          <p>We'll be in touch soon with early access to the AI receptionist that's built specifically for Australian tradies.</p>
          <p>In the meantime, if you want to know more — reply to this email.</p>
          <p style="margin-top: 24px; color: #666; font-size: 14px;">
            — The TradieVoice Team<br/>
            Never lose a job to voicemail again.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
