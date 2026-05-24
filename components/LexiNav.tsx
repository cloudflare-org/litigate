"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";

export default function LexiNav() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { company, nav } = siteData;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={scrolled ? "active" : ""}>
            <Link href="/" className="logo">{company.name}</Link>
            <ul className="nav-menu">
                {nav.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className={pathname === link.href ? "active-link" : ""}>
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href="/contact"><button className="nav-cta">Get Started</button></Link>
                </li>
            </ul>
        </nav>
    );
}
