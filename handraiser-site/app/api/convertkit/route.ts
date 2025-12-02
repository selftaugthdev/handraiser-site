import { NextRequest, NextResponse } from "next/server";

const CONVERTKIT_FORM_ID =
  process.env.CONVERTKIT_FORM_ID || "6c2e3d212e";
const CONVERTKIT_API_SECRET = process.env.CONVERTKIT_API_SECRET;
const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!CONVERTKIT_API_SECRET && !CONVERTKIT_API_KEY) {
      console.error(
        "CONVERTKIT_API_SECRET or CONVERTKIT_API_KEY must be set"
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!CONVERTKIT_FORM_ID) {
      console.error("CONVERTKIT_FORM_ID is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Submit to ConvertKit API
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // ConvertKit recommends api_key for forms.subscribe. api_secret kept for backward compatibility.
          ...(CONVERTKIT_API_KEY
            ? { api_key: CONVERTKIT_API_KEY }
            : { api_secret: CONVERTKIT_API_SECRET }),
          email,
          first_name: firstName || "",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      const friendlyMessage =
        response.status === 404
          ? "ConvertKit form not found. Check CONVERTKIT_FORM_ID."
          : "Failed to subscribe via ConvertKit.";
      console.error(
        "ConvertKit API error:",
        response.status,
        errorData
      );
      return NextResponse.json(
        {
          error: friendlyMessage,
          details: errorData || `status ${response.status}`,
          convertkitStatus: response.status,
        },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("ConvertKit submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
