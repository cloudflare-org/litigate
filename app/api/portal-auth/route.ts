import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { password, ref } = await req.json();

    // Password is set via environment variable PORTAL_PASSWORD
    // Falls back to a default you should change before going live
    const correctPassword = process.env.PORTAL_PASSWORD ?? "LexiPortal2024";

    if (!ref || typeof ref !== "string" || ref.trim().length === 0) {
        return NextResponse.json({ ok: false, message: "Please enter a document reference." }, { status: 400 });
    }

    if (password !== correctPassword) {
        // Small delay to slow brute force
        await new Promise((r) => setTimeout(r, 800));
        return NextResponse.json({ ok: false, message: "Incorrect access code. Please try again." }, { status: 401 });
    }

    const cleanRef = ref.trim();

    // Set a session cookie valid for 2 hours
    const response = NextResponse.json({ ok: true });
    response.cookies.set("portal_session", cleanRef, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 2, // 2 hours
        path: "/",
    });

    return response;
}
