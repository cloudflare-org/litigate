import type { Metadata } from "next";
import "./globals.css";
import { SITE_DATA } from "@/data/site";

export const metadata: Metadata = {
    title: SITE_DATA.meta.title,
    description: SITE_DATA.meta.description,
    icons: {
        icon: "/lexfirm-logo.png",
        shortcut: "/lexfirm-logo.png",
        apple: "/lexfirm-logo.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
