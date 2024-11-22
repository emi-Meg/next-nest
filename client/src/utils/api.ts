import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  return NextResponse.json({ message: `Logged in as ${email}` });
}
