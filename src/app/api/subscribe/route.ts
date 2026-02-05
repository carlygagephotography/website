import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Insert into Supabase using service_role key (bypasses RLS)
    const supabaseUrl = "https://pefdxsoasqujmcmqcemn.supabase.co";
    const serviceKey = process.env.SUPABASE_SERVICE_KEY;

    if (!serviceKey) {
      console.error("SUPABASE_SERVICE_KEY not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": serviceKey,
        "Authorization": `Bearer ${serviceKey}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      
      // Check for duplicate email (unique constraint violation)
      if (errorText.includes("duplicate") || errorText.includes("unique")) {
        return NextResponse.json(
          { error: "This email is already subscribed!" },
          { status: 409 }
        );
      }
      
      console.error("Supabase error:", errorText);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
