"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";
import { BASE_CSS, NAV_CSS, FOOTER_CSS, BTN_CSS, PAGE_HERO_CSS, SECTION_CSS, CTA_STRIP_CSS } from "@/components/LexiStyles";

export default function CasesPage() {
    const { company, cases, contact, footer, nav } = siteData;
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    useEffect(() => { const fn = () => setScrolled(window.scrollY > 80); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

    return (
        <>
            <style>{BASE_CSS}</style><style>{NAV_CSS}</style><style>{FOOTER_CSS}</style><style>{BTN_CSS}</style><style>{PAGE_HERO_CSS}</style><style>{SECTION_CSS}</style><style>{CTA_STRIP_CSS}</style>
            <style>{`
        .disclaimer-bar{background:var(--color-surface-2);border-bottom:1px solid var(--color-border);padding:var(--space-xl) var(--space-3xl);}
        .disclaimer-bar-inner{max-width:1400px;margin:0 auto;display:flex;align-items:flex-start;gap:var(--space-lg);}
        .disclaimer-icon{color:var(--color-accent-primary);font-size:1rem;flex-shrink:0;margin-top:2px;}
        .disclaimer-bar p{color:var(--color-text-secondary);font-size:.875rem;line-height:1.6;}
        @media(max-width:768px){.disclaimer-bar{padding:var(--space-lg);}}

        .cases-section{padding:var(--space-5xl) var(--space-3xl);max-width:1400px;margin:0 auto;}
        .cases-list{display:flex;flex-direction:column;gap:var(--space-2xl);}
        .case-card{display:block;text-decoration:none;padding:var(--space-3xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:1rem;transition:all .4s var(--ease-in-out);position:relative;overflow:hidden;}
        .case-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--color-accent-primary);transform:scaleY(0);transform-origin:bottom;transition:transform .4s;}
        .case-card:hover{border-color:rgba(132,204,22,.3);background:var(--color-surface-3);transform:translateX(4px);}
        .case-card:hover::before{transform:scaleY(1);}
        .case-card-meta{display:flex;align-items:center;gap:var(--space-lg);margin-bottom:var(--space-lg);flex-wrap:wrap;}
        .case-year-badge{font-size:.75rem;font-weight:600;color:var(--color-accent-primary);text-transform:uppercase;letter-spacing:.12em;}
        .case-category-badge{font-size:.75rem;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.1em;}
        .case-card h2{font-size:clamp(1.3rem,3vw,1.8rem);color:var(--color-text-primary);margin-bottom:var(--space-lg);}
        .case-card-summary{color:var(--color-text-secondary);font-size:.95rem;line-height:1.8;margin-bottom:var(--space-xl);}
        .case-card-footer{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-lg);}
        .case-tags{display:flex;gap:var(--space-sm);flex-wrap:wrap;}
        .case-tag{font-size:.7rem;background:rgba(132,204,22,.1);color:var(--color-accent-primary);border:1px solid rgba(132,204,22,.2);padding:.2rem .75rem;border-radius:.25rem;text-transform:uppercase;letter-spacing:.08em;font-weight:600;}
        .case-read-more{font-size:.85rem;color:var(--color-accent-primary);font-weight:600;display:flex;align-items:center;gap:var(--space-sm);transition:gap .3s;}
        .case-card:hover .case-read-more{gap:var(--space-md);}
        @media(max-width:768px){.cases-section{padding:var(--space-3xl) var(--space-lg);}.case-card{padding:var(--space-2xl);}}
      `}</style>

            <div className="content">
                <nav className={scrolled ? "active" : ""}>
                    <Link href="/" className="logo">{company.name}</Link>
                    <ul className="nav-menu">
                        {nav.map((l) => <li key={l.href}><Link href={l.href} className={pathname === l.href ? "active-link" : ""}>{l.name}</Link></li>)}
                        <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
                    </ul>
                </nav>

                <div className="page-hero">
                    <div className="page-hero-inner">
                        <span className="text-label">Track Record</span>
                        <h1>Selected Cases</h1>
                        <p className="hero-sub">We do not publish all of our work. What follows is a small selection of matters we are able to discuss, presented to illustrate the nature and scale of our practice.</p>
                    </div>
                </div>

                <div className="disclaimer-bar">
                    <div className="disclaimer-bar-inner">
                        <span className="disclaimer-icon">&#9432;</span>
                        <p>All case descriptions have been anonymised or published with explicit client consent. Many of our most significant matters cannot be disclosed under any circumstances. The cases shown here represent a fraction of our work and are selected solely to illustrate the breadth and complexity of our practice.</p>
                    </div>
                </div>

                <section className="cases-section">
                    <div className="cases-list">
                        {cases.map((c) => (
                            <Link href={`/cases/${c.slug}`} className="case-card" key={c.slug}>
                                <div className="case-card-meta">
                                    <span className="case-year-badge">{c.year}</span>
                                    <span style={{ color: "var(--color-text-tertiary)" }}>&#183;</span>
                                    <span className="case-category-badge">{c.category}</span>
                                </div>
                                <h2>{c.title}</h2>
                                <p className="case-card-summary">{c.summary}</p>
                                <div className="case-card-footer">
                                    <div className="case-tags">{c.tags.map((t, i) => <span className="case-tag" key={i}>{t}</span>)}</div>
                                    <span className="case-read-more">Read full case &#8594;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="cta-strip">
                    <div className="cta-strip-inner">
                        <div className="cta-strip-content">
                            <h2>Facing a Complex Matter?</h2>
                            <p>Our team has handled some of the most complex legal situations in the world. If your matter requires that level of capability, we would welcome a confidential conversation.</p>
                            <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
                        </div>
                    </div>
                </div>

                <footer className="lexi-footer">
                    <div className="footer-grid">
                        <div className="footer-brand footer-col"><h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "none", letterSpacing: "-.02em", color: "var(--color-text-primary)" }}>{company.name}</h4><p>{company.description}</p></div>
                        <div className="footer-col"><h4>Practice Areas</h4><ul>{footer.servicesLinks.map((s, i) => <li key={i}><Link href="/services">{s}</Link></li>)}</ul></div>
                        <div className="footer-col"><h4>The Firm</h4><ul>{nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}</ul></div>
                        <div className="footer-col"><h4>Contact</h4><ul><li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li><li><a href={`mailto:${contact.email}`}>{contact.email}</a></li><li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.address.street}, {contact.address.city}</li></ul></div>
                    </div>
                    <div className="footer-bottom"><div>&#169; {new Date().getFullYear()} {footer.copyright}</div><div className="footer-socials"><a href="#">LinkedIn</a><a href="#">Privacy Policy</a><a href="#">Terms</a></div></div>
                </footer>
            </div>
        </>
    );
}
