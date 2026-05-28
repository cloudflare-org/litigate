export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { password, ref } = await req.json();

    const correctPassword = process.env.PORTAL_PASSWORD ?? "GonzalesLG204";

    if (!ref || typeof ref !== "string" || ref.trim().length === 0) {
        return NextResponse.json({ ok: false, message: "Please enter a document reference." }, { status: 400 });
    }

    if (password !== correctPassword) {
        await new Promise((r) => setTimeout(r, 800));
        return NextResponse.json({ ok: false, message: "Incorrect access code. Please try again." }, { status: 401 });
    }

    const cleanRef = ref.trim();

    const response = NextResponse.json({ ok: true });
    response.cookies.set("portal_session", cleanRef, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 2,
        path: "/",
    });

    return response;
}
