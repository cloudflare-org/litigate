"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";
import { BASE_CSS, NAV_CSS, FOOTER_CSS, BTN_CSS, PAGE_HERO_CSS, SECTION_CSS, CTA_STRIP_CSS } from "@/components/LexiStyles";

export default function AboutPage() {
    const { company, about, contact, footer, nav } = siteData;
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    useEffect(() => { const fn = () => setScrolled(window.scrollY > 80); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

    return (
        <>
            <style>{BASE_CSS}</style><style>{NAV_CSS}</style><style>{FOOTER_CSS}</style><style>{BTN_CSS}</style><style>{PAGE_HERO_CSS}</style><style>{SECTION_CSS}</style><style>{CTA_STRIP_CSS}</style>
            <style>{`
        .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-5xl);align-items:start;}
        .story-text p{color:var(--color-text-secondary);margin-bottom:var(--space-xl);}
        .story-visual{position:sticky;top:120px;height:480px;background:linear-gradient(135deg,var(--color-surface-2),var(--color-surface-1));border:1px solid var(--color-border);border-radius:1rem;overflow:hidden;display:flex;align-items:center;justify-content:center;}
        .story-visual::before{content:'';position:absolute;top:-10%;right:-5%;width:350px;height:350px;border-radius:50%;opacity:.25;background:radial-gradient(circle,rgba(132,204,22,.4),transparent);animation:float 15s ease-in-out infinite;}
        .story-visual-text{font-family:var(--font-display);font-size:clamp(1.2rem,2.5vw,1.8rem);color:var(--color-text-secondary);text-align:center;padding:var(--space-3xl);position:relative;z-index:1;font-style:italic;line-height:1.5;}
        .story-badge{position:absolute;bottom:var(--space-2xl);right:var(--space-2xl);background:var(--color-accent-primary);padding:var(--space-xl);border-radius:.75rem;text-align:center;}
        .story-badge-num{font-family:var(--font-display);font-size:2.5rem;color:var(--color-bg-primary);line-height:1;}
        .story-badge-label{font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(5,5,5,.7);font-weight:600;margin-top:.25rem;}
        @media(max-width:1024px){.story-grid{grid-template-columns:1fr;}.story-visual{position:relative;top:0;height:320px;}}

        .values-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-xl);}
        .value-card{padding:var(--space-3xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;transition:all .4s;}
        .value-card:hover{border-color:var(--color-accent-primary);transform:translateY(-4px);}
        .value-icon{font-size:1.75rem;margin-bottom:var(--space-lg);}
        .value-card h3{margin-bottom:var(--space-md);}
        .value-card p{color:var(--color-text-secondary);font-size:.95rem;}
        @media(max-width:768px){.values-grid{grid-template-columns:1fr;}}

        .highlights-list{display:flex;flex-direction:column;gap:var(--space-md);}
        .highlight-item{display:flex;align-items:center;gap:var(--space-lg);padding:var(--space-lg) var(--space-xl);background:var(--color-surface-1);border:1px solid var(--color-border);border-radius:.5rem;}
        .highlight-dot{width:8px;height:8px;border-radius:50%;background:var(--color-accent-primary);flex-shrink:0;}
        .highlight-item span{color:var(--color-text-secondary);font-size:.95rem;}

        .discretion-section{padding:var(--space-5xl) var(--space-3xl);background:linear-gradient(180deg,var(--color-bg-tertiary),transparent);}
        .discretion-inner{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:var(--space-5xl);align-items:center;}
        .discretion-text .text-label{display:block;margin-bottom:var(--space-lg);}
        .discretion-text h2{margin-bottom:var(--space-xl);}
        .discretion-text p{color:var(--color-text-secondary);margin-bottom:var(--space-lg);}
        .discretion-stats{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);}
        .d-stat{padding:var(--space-2xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;text-align:center;}
        .d-stat-num{font-family:var(--font-display);font-size:clamp(1.8rem,4vw,3rem);color:var(--color-accent-primary);letter-spacing:-.02em;}
        .d-stat-label{color:var(--color-text-secondary);font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;margin-top:var(--space-sm);}
        @media(max-width:1024px){.discretion-inner{grid-template-columns:1fr;gap:var(--space-3xl);}}
        @media(max-width:768px){.discretion-section{padding:var(--space-3xl) var(--space-lg);}.discretion-stats{grid-template-columns:1fr 1fr;}}
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
                        <span className="text-label">The Firm</span>
                        <h1>About Us</h1>
                        <p className="hero-sub">{about.heroSubtitle}</p>
                    </div>
                </div>

                {/* STORY */}
                <section className="section">
                    <div className="section-inner">
                        <div className="story-grid">
                            <div className="story-text">
                                <span className="text-label">Our Story</span>
                                <h2 style={{ marginBottom: "var(--space-2xl)" }}>{about.storyTitle}</h2>
                                {about.storyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                                <div style={{ marginTop: "var(--space-2xl)" }}>
                                    <div className="highlights-list">
                                        {about.highlights.map((h, i) => (
                                            <div className="highlight-item" key={i}>
                                                <div className="highlight-dot" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="story-visual">
                                <p className="story-visual-text">"Founded in {company.foundedYear}. Built on silence. Proven by results."</p>
                                <div className="story-badge">
                                    <div className="story-badge-num">{company.yearsExperience}+</div>
                                    <div className="story-badge-label">Years</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DISCRETION */}
                <section className="discretion-section">
                    <div className="discretion-inner">
                        <div className="discretion-text">
                            <span className="text-label">Our Approach</span>
                            <h2>Discretion Is Not a Feature. It Is the Foundation.</h2>
                            <p>We do not publish client lists. We do not issue press releases about our victories. We do not seek recognition from the legal press. Our reputation is built entirely on the trust of those we serve and the results we achieve on their behalf.</p>
                            <p>Every engagement is governed by protocols that go beyond standard legal professional privilege. We operate on a strict need-to-know basis internally, and we never discuss one client's matter with another, regardless of the circumstances.</p>
                            <p>This is not a marketing position. It is how we have operated since 1998, and it is why clients who require the highest level of confidentiality come to us.</p>
                        </div>
                        <div className="discretion-stats">
                            {[
                                { num: "60+", label: "Countries Served" },
                                { num: "$3.2B+", label: "Assets Recovered" },
                                { num: "100%", label: "Partner-Led Matters" },
                                { num: "0", label: "Public Disclosures" },
                            ].map((s, i) => (
                                <div className="d-stat" key={i}>
                                    <div className="d-stat-num">{s.num}</div>
                                    <div className="d-stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* VALUES */}
                <section className="section">
                    <div className="section-inner">
                        <div className="section-header centered">
                            <span className="text-label">What We Stand For</span>
                            <h2>Our Values</h2>
                        </div>
                        <div className="values-grid">
                            {about.values.map((v, i) => (
                                <div className="value-card" key={i}>
                                    <div className="value-icon">{v.icon}</div>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="cta-strip">
                    <div className="cta-strip-inner">
                        <div className="cta-strip-content">
                            <h2>Work With the Firm</h2>
                            <p>We accept new clients by referral only. If you have been referred to us, or wish to make a confidential enquiry, we will respond within 24 hours.</p>
                            <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
                        </div>
                    </div>
                </div>

                <footer className="lexi-footer">
                    <div className="footer-grid">
                        <div className="footer-brand footer-col">
                            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "none", letterSpacing: "-.02em", color: "var(--color-text-primary)" }}>{company.name}</h4>
                            <p>{company.description}</p>
                        </div>
                        <div className="footer-col"><h4>Practice Areas</h4><ul>{footer.servicesLinks.map((s, i) => <li key={i}><Link href="/services">{s}</Link></li>)}</ul></div>
                        <div className="footer-col"><h4>The Firm</h4><ul>{nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}</ul></div>
                        <div className="footer-col"><h4>Contact</h4><ul><li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li><li><a href={`mailto:${contact.email}`}>{contact.email}</a></li><li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.address.street}, {contact.address.city}</li></ul></div>
                    </div>
                    <div className="footer-bottom">
                        <div>&#169; {new Date().getFullYear()} {footer.copyright}</div>
                        <div className="footer-socials"><a href="#">LinkedIn</a><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
                    </div>
                </footer>
            </div>
        </>
    );
}
