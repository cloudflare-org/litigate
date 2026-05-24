"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";
import {
    BASE_CSS,
    NAV_CSS,
    FOOTER_CSS,
    BTN_CSS,
    PAGE_HERO_CSS,
    SECTION_CSS,
    CTA_STRIP_CSS,
} from "@/components/LexiStyles";

export default function TeamPage() {
    const { company, contact, footer, nav, team } = siteData;
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <>
            <style>{BASE_CSS}</style>
            <style>{NAV_CSS}</style>
            <style>{FOOTER_CSS}</style>
            <style>{BTN_CSS}</style>
            <style>{PAGE_HERO_CSS}</style>
            <style>{SECTION_CSS}</style>
            <style>{CTA_STRIP_CSS}</style>
            <style>{`
        .team-intro {
          max-width: 800px;
          margin-bottom: var(--space-5xl);
          padding: var(--space-3xl);
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-left: 3px solid var(--color-accent-primary);
          border-radius: 0 .75rem .75rem 0;
        }
        .team-intro p {
          color: var(--color-text-secondary);
          font-size: 1.05rem;
          line-height: 1.9;
          font-style: italic;
        }
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2xl);
        }
        .team-card {
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          padding: var(--space-3xl);
          transition: all .4s;
          border-left: 3px solid transparent;
        }
        .team-card:hover {
          border-left-color: var(--color-accent-primary);
          box-shadow: 0 16px 48px rgba(132,204,22,.08);
          transform: translateY(-4px);
        }
        .team-card-top {
          display: flex;
          gap: var(--space-xl);
          align-items: flex-start;
          margin-bottom: var(--space-2xl);
        }
        .team-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--color-surface-3), var(--color-surface-1));
          border: 1px solid var(--color-border);
          border-radius: .75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.25rem;
          flex-shrink: 0;
          transition: border-color .3s;
        }
        .team-card:hover .team-avatar {
          border-color: var(--color-accent-primary);
        }
        .team-card-name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--color-text-primary);
          margin-bottom: .25rem;
        }
        .team-card-role {
          font-size: .75rem;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: var(--space-sm);
        }
        .team-card-specialty {
          font-size: .875rem;
          color: var(--color-text-secondary);
        }
        .team-card-bio {
          color: var(--color-text-secondary);
          font-size: .9rem;
          line-height: 1.8;
          margin-bottom: var(--space-2xl);
        }
        .team-credentials-title {
          font-family: var(--font-body);
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .15em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: var(--space-md);
        }
        .team-credentials-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        .team-credentials-list li {
          color: var(--color-text-secondary);
          font-size: .85rem;
          display: flex;
          align-items: flex-start;
          gap: var(--space-sm);
          line-height: 1.5;
        }
        .team-credentials-list li::before {
          content: '';
          width: 5px;
          height: 5px;
          background: var(--color-accent-primary);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: .45rem;
        }
        @media(max-width: 1024px) {
          .team-grid { grid-template-columns: 1fr; }
        }
        @media(max-width: 768px) {
          .team-card { padding: var(--space-2xl); }
          .team-card-top { flex-direction: column; }
        }
      `}</style>

            <div className="content">
                {/* NAV */}
                <nav className={scrolled ? "active" : ""}>
                    <Link href="/" className="logo">{company.name}</Link>
                    <ul className="nav-menu">
                        {nav.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className={pathname === l.href ? "active-link" : ""}>{l.name}</Link>
                            </li>
                        ))}
                        <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
                    </ul>
                </nav>

                {/* HERO */}
                <div className="page-hero">
                    <div className="page-hero-inner">
                        <span className="text-label">Our People</span>
                        <h1>The Partners</h1>
                        <p className="hero-sub">Every matter at Lexi Global Firm is led by a partner. There are no exceptions.</p>
                    </div>
                </div>

                {/* TEAM CONTENT */}
                <section className="section">
                    <div className="section-inner">
                        <div className="team-intro">
                            <p>We are a small firm by design. We believe that exceptional legal work requires exceptional people, and that exceptional people cannot be scaled indefinitely. Every partner at Lexi Global Firm has been selected for their technical mastery, their judgment under pressure, and their absolute commitment to client confidentiality.</p>
                        </div>

                        <div className="team-grid">
                            {team.map((member) => (
                                <div className="team-card" key={member.slug}>
                                    <div className="team-card-top">
                                        <div className="team-avatar">{member.emoji}</div>
                                        <div>
                                            <div className="team-card-name">{member.name}</div>
                                            <div className="team-card-role">{member.role}</div>
                                            <div className="team-card-specialty">{member.specialty}</div>
                                        </div>
                                    </div>
                                    <p className="team-card-bio">{member.bio}</p>
                                    <div className="team-credentials-title">Credentials</div>
                                    <ul className="team-credentials-list">
                                        {member.credentials.map((cred, i) => (
                                            <li key={i}>{cred}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="cta-strip">
                    <div className="cta-strip-inner">
                        <div className="cta-strip-content">
                            <h2>Ready to Discuss Your Matter?</h2>
                            <p>All enquiries are treated with absolute confidentiality. We respond to retained clients within the hour and to new enquiries within 24 hours.</p>
                            <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
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
                                <li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.hours.footerDisplay}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div>&#169; {new Date().getFullYear()} {footer.copyright}</div>
                        <div className="footer-socials">
                            <a href="#">LinkedIn</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
