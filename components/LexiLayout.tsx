"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";

export const runtime = 'edge';

const { company, contact, footer, nav } = siteData;

export function LexiNav() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);
    return (
        <nav className={`lexi-nav${scrolled ? " scrolled" : ""}`}>
            <Link href="/" className="lexi-logo">{company.name}</Link>
            <ul className="lexi-nav-menu">
                {nav.map((l) => (
                    <li key={l.href}>
                        <Link href={l.href} className={pathname === l.href ? "active-link" : ""}>{l.name}</Link>
                    </li>
                ))}
                <li><Link href="/contact"><button className="lexi-nav-cta">Enquire</button></Link></li>
            </ul>
        </nav>
    );
}

export function LexiFooter() {
    return (
        <footer className="lexi-footer">
            <div className="footer-grid">
                <div className="footer-brand footer-col">
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "none", letterSpacing: "-.02em", color: "var(--color-text-primary)" }}>{company.name}</h4>
                    <p>{company.description}</p>
                </div>
                <div className="footer-col">
                    <h4>Practice Areas</h4>
                    <ul>{footer.servicesLinks.map((s, i) => <li key={i}><Link href="/services">{s}</Link></li>)}</ul>
                </div>
                <div className="footer-col">
                    <h4>The Firm</h4>
                    <ul>{nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}</ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
                        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                        <li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.address.street}, {contact.address.city}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div>&#169; {new Date().getFullYear()} {footer.copyright}</div>
                <div className="footer-socials"><a href="#">LinkedIn</a><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
            </div>
        </footer>
    );
}
