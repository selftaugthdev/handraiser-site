import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json();

    if (!priceId) {
      console.error("Price ID is missing");
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("Stripe secret key is not configured");
      return NextResponse.json(
        { error: "Stripe secret key is not configured" },
        { status: 500 }
      );
    }

    // Get the base URL for success/cancel URLs
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    
    if (!baseUrl) {
      // Construct from request using nextUrl (more reliable in Next.js App Router)
      const protocol = request.headers.get("x-forwarded-proto") || "http";
      const host = request.headers.get("host") || 
        request.headers.get("x-forwarded-host") || 
        "localhost:3000";
      baseUrl = `${protocol}://${host}`;
    }

    // Clean up baseUrl: remove comments, whitespace, and invalid characters
    // Remove anything in parentheses (like "(for development)")
    baseUrl = baseUrl.replace(/\s*\([^)]*\)/g, "").trim();
    // Remove trailing slash
    baseUrl = baseUrl.replace(/\/$/, "");
    // Remove any whitespace
    baseUrl = baseUrl.trim();

    // Create absolute URLs for Stripe (must be absolute URLs)
    // Redirect to secure download page after successful payment
    const successUrl = `${baseUrl}/download/x7k9m2p4q8r3n6w1t5z/download`;
    const cancelUrl = `${baseUrl}/offers/handraiser-post-swipe-file?canceled=true`;
    
    console.log("Creating checkout session with:", { priceId, successUrl, cancelUrl });
    
    // Validate URLs are absolute
    if (!successUrl.startsWith("http://") && !successUrl.startsWith("https://")) {
      console.error(`Invalid success URL: ${successUrl}`);
      throw new Error(`Invalid success URL: ${successUrl}`);
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        product: "handraiser-post-swipe-file",
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

