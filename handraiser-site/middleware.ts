import { NextRequest, NextResponse } from "next/server";

let requests = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  // Get IP address from headers (works with proxies/Vercel)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 30; // allow 30 req/min per IP

  const timestamps = requests.get(ip) || [];
  const filtered = timestamps.filter((t) => now - t < windowMs);

  if (filtered.length >= maxRequests) {
    return new NextResponse("Rate limit exceeded", { status: 429 });
  }

  filtered.push(now);
  requests.set(ip, filtered);

  return NextResponse.next();
}

// Apply middleware to API routes and download page
export const config = {
  matcher: ["/api/:path*", "/download/:path*"],
};

