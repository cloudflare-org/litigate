import React from "react";
import Link from "next/link";
import siteData from "@/data/siteData.json";

export default function LexiFooter() {
    const { company, contact, footer, nav } = siteData;
    return (
        <footer className="lexi-footer">
            <div className="footer-grid">
                <div className="footer-col">
                    <h4>New York</h4>
                    <ul>
                        <li><a href="tel:+12125551000">+1 (212) 555-1000</a></li>
                        <li><a href="mailto:ny@lexfirmglobal.com">ny@lexfirmglobal.com</a></li>
                        <li>Madison Avenue, New York, NY 10065</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Chicago</h4>
                    <ul>
                        <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
                        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                        <li>{contact.address.street}, {contact.address.city}</li>
                    </ul>
                </div>
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
