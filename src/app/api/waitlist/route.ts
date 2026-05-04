import { NextResponse } from 'next/server';
import { z } from 'zod';

const WaitlistLeadSchema = z.object({
  fullName: z.string().trim().max(120).optional().default(''),
  email: z.string().trim().email(),
  company: z.string().trim().max(120).optional().default(''),
});

const waitlistEndpoint = process.env.WAITLIST_ENDPOINT_URL;
const waitlistApiKey = process.env.WAITLIST_ENDPOINT_API_KEY;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = WaitlistLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const lead = {
      ...parsed.data,
      source: 'axulo-landing',
      capturedAt: new Date().toISOString(),
    };

    if (!waitlistEndpoint) {
      return NextResponse.json(
        {
          error:
            'Waitlist endpoint is not configured. Set WAITLIST_ENDPOINT_URL in environment variables.',
        },
        { status: 503 },
      );
    }

    const forwardResponse = await fetch(waitlistEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(waitlistApiKey ? { Authorization: `Bearer ${waitlistApiKey}` } : {}),
      },
      body: JSON.stringify(lead),
    });

    if (!forwardResponse.ok) {
      const responseText = await forwardResponse.text();
      return NextResponse.json(
        {
          error: 'Lead endpoint rejected the request.',
          details: responseText.slice(0, 300),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('waitlist submit failed', error);
    return NextResponse.json(
      { error: 'Unexpected error while processing your request.' },
      { status: 500 },
    );
  }
}
