import { NextResponse } from "next/server";

async function handleCallback(request) {
  const method = request.method;
  const payload =
    method === "GET" ? Object.fromEntries(request.nextUrl.searchParams) : await request.json().catch(() => ({}));

  console.log("[Param] Callback alındı:", {
    method,
    payload,
  });

  return NextResponse.json({ received: true });
}

export async function GET(request) {
  return handleCallback(request);
}

export async function POST(request) {
  return handleCallback(request);
}

