import type { Metadata } from "next";
import "./globals.css";
import siteData from "@/data/siteData.json";

export const metadata: Metadata = {
    title: siteData.meta.title,
    description: siteData.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
