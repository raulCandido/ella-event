import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.city) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    // In production: store in a database (e.g. Vercel Postgres, Supabase, Airtable)
    // or forward to an email service (Resend, SendGrid).
    // For now, log and return success.
    console.log("[ELLA Feedback]", {
      name: body.name,
      email: body.email,
      city: body.city,
      interests: body.interests,
      expectations: body.expectations,
      priceRange: body.priceRange,
      intention: body.intention,
      howFound: body.howFound,
      message: body.message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
}
