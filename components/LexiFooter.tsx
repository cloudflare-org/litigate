import React from "react";
import Link from "next/link";
import { FOOTER_OFFICES } from "@/data/footerOffices";
import { SITE_DATA } from "@/data/site";

export default function LexiFooter() {
    const { footer, nav } = SITE_DATA;
    return (
        <footer className="lexi-footer">
            <div className="footer-grid">
                {FOOTER_OFFICES.map((office) => (
                    <div className="footer-col" key={office.city}>
                        <h4>{office.city}</h4>
                        <ul>
                            <li><a href={office.phoneHref}>{office.phone}</a></li>
                            <li><a href={`mailto:${office.email}`}>{office.email}</a></li>
                            <li>{office.address}</li>
                        </ul>
                    </div>
                ))}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        {nav.map((link) => (
                            <li key={link.href}><Link href={link.href}>{link.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Subscribe</h4>
                    <p style={{ marginBottom: "var(--space-lg)", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                        Get monthly insights on high-stakes legal developments.
                    </p>
                    <div className="footer-newsletter">
                        <input type="email" placeholder="your@email.com" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>© {new Date().getFullYear()} {footer.copyright}</div>
                <div className="footer-socials">
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
