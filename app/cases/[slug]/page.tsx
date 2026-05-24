"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import siteData from "@/data/siteData.json";
import { BASE_CSS, NAV_CSS, FOOTER_CSS, BTN_CSS, PAGE_HERO_CSS, CTA_STRIP_CSS } from "@/components/LexiStyles";

export default function CaseSinglePage() {
    const { company, cases, contact, footer, nav } = siteData;
    const [scrolled, setScrolled] = useState(false);
    const params = useParams();
    const slug = params?.slug as string;
    const caseItem = cases.find((c) => c.slug === slug);
    const related = cases.filter((c) => c.slug !== slug).slice(0, 2);
    useEffect(() => { const fn = () => setScrolled(window.scrollY > 80); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

    return (
        <>
            <style>{BASE_CSS}</style><style>{NAV_CSS}</style><style>{FOOTER_CSS}</style><style>{BTN_CSS}</style><style>{PAGE_HERO_CSS}</style><style>{CTA_STRIP_CSS}</style>
            <style>{`
        .case-body{padding:var(--space-5xl) var(--space-3xl);max-width:1400px;margin:0 auto;display:grid;grid-template-columns:1fr 320px;gap:var(--space-4xl);align-items:start;}
        .case-article{max-width:760px;}
        .case-article-meta{display:flex;align-items:center;gap:var(--space-lg);margin-bottom:var(--space-3xl);flex-wrap:wrap;}
        .case-article-year{font-size:.8rem;font-weight:600;color:var(--color-accent-primary);text-transform:uppercase;letter-spacing:.12em;}
        .case-article-cat{font-size:.8rem;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.1em;}
        .case-article h1{font-size:clamp(1.8rem,4vw,3rem);margin-bottom:var(--space-2xl);line-height:1.15;}
        .case-summary-block{padding:var(--space-2xl);background:rgba(132,204,22,.06);border:1px solid rgba(132,204,22,.15);border-radius:.75rem;margin-bottom:var(--space-3xl);}
        .case-summary-block p{color:var(--color-text-secondary);font-size:1rem;line-height:1.8;font-style:italic;}
        .case-detail-text{color:var(--color-text-secondary);line-height:2;font-size:1.05rem;}
        .case-tags-row{display:flex;gap:var(--space-sm);flex-wrap:wrap;margin-top:var(--space-3xl);padding-top:var(--space-2xl);border-top:1px solid var(--color-border);}
        .case-tag{font-size:.7rem;background:rgba(132,204,22,.1);color:var(--color-accent-primary);border:1px solid rgba(132,204,22,.2);padding:.2rem .75rem;border-radius:.25rem;text-transform:uppercase;letter-spacing:.08em;font-weight:600;}

        .case-sidebar{position:sticky;top:120px;display:flex;flex-direction:column;gap:var(--space-xl);}
        .sidebar-card{padding:var(--space-2xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;}
        .sidebar-card h4{font-family:var(--font-body);font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;font-weight:600;color:var(--color-accent-primary);margin-bottom:var(--space-xl);}
        .sidebar-stat{margin-bottom:var(--space-lg);}
        .sidebar-stat-label{font-size:.75rem;color:var(--color-text-tertiary);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.25rem;}
        .sidebar-stat-value{font-family:var(--font-display);font-size:1.1rem;color:var(--color-text-primary);}

        .related-section{padding:var(--space-5xl) var(--space-3xl);background:linear-gradient(180deg,var(--color-bg-tertiary),transparent);}
        .related-inner{max-width:1400px;margin:0 auto;}
        .related-label{font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;font-weight:600;color:var(--color-accent-primary);display:block;margin-bottom:var(--space-lg);}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-2xl);margin-top:var(--space-2xl);}
        .related-card{display:block;text-decoration:none;padding:var(--space-2xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;transition:all .3s;}
        .related-card:hover{border-color:var(--color-accent-primary);transform:translateY(-4px);}
        .related-card-year{font-size:.75rem;color:var(--color-accent-primary);font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:var(--space-sm);}
        .related-card h3{font-size:1rem;color:var(--color-text-primary);line-height:1.4;margin-bottom:var(--space-md);}
        .related-card p{color:var(--color-text-secondary);font-size:.85rem;line-height:1.6;}
        @media(max-width:1024px){.case-body{grid-template-columns:1fr;}.case-sidebar{position:relative;top:0;}.related-grid{grid-template-columns:1fr;}}
        @media(max-width:768px){.case-body{padding:var(--space-3xl) var(--space-lg);}.related-section{padding:var(--space-3xl) var(--space-lg);}}
      `}</style>

            <div className="content">
                <nav className={scrolled ? "active" : ""}>
                    <Link href="/" className="logo">{company.name}</Link>
                    <ul className="nav-menu">
                        {nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}
                        <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
                    </ul>
                </nav>

                {!caseItem ? (
                    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "var(--space-xl)", paddingTop: "120px" }}>
                        <h2 style={{ color: "var(--color-text-secondary)" }}>Matter not found</h2>
                        <Link href="/cases" className="btn">Back to Cases</Link>
                    </div>
                ) : (
                    <>
                        <div className="page-hero">
                            <div className="page-hero-inner">
                                <span className="text-label">{caseItem.category}</span>
                                <h1>{caseItem.title}</h1>
                            </div>
                        </div>

                        <div className="case-body">
                            <article className="case-article">
                                <div className="case-article-meta">
                                    <span className="case-article-year">{caseItem.year}</span>
                                    <span style={{ color: "var(--color-text-tertiary)" }}>&#183;</span>
                                    <span className="case-article-cat">{caseItem.category}</span>
                                </div>
                                <div className="case-summary-block">
                                    <p>{caseItem.summary}</p>
                                </div>
                                <p className="case-detail-text">{caseItem.detail}</p>
                                <div className="case-tags-row">
                                    {caseItem.tags.map((t, i) => <span className="case-tag" key={i}>{t}</span>)}
                                </div>
                            </article>

                            <aside className="case-sidebar">
                                <div className="sidebar-card">
                                    <h4>Matter Details</h4>
                                    <div className="sidebar-stat"><div className="sidebar-stat-label">Year</div><div className="sidebar-stat-value">{caseItem.year}</div></div>
                                    <div className="sidebar-stat"><div className="sidebar-stat-label">Practice Area</div><div className="sidebar-stat-value">{caseItem.category}</div></div>
                                    <div className="sidebar-stat"><div className="sidebar-stat-label">Classification</div><div className="sidebar-stat-value">Disclosed with consent</div></div>
                                </div>
                                <div className="sidebar-card">
                                    <h4>Confidentiality Notice</h4>
                                    <p style={{ color: "var(--color-text-secondary)", fontSize: ".85rem", lineHeight: "1.7" }}>This matter has been published with the explicit consent of the client. All identifying details have been reviewed and approved prior to publication.</p>
                                </div>
                                <Link href="/contact" className="btn btn-primary" style={{ textAlign: "center", width: "100%" }}>Discuss a Similar Matter</Link>
                            </aside>
                        </div>

                        <section className="related-section">
                            <div className="related-inner">
                                <span className="related-label">Related Matters</span>
                                <h2 style={{ marginBottom: "0" }}>Further Reading</h2>
                                <div className="related-grid">
                                    {related.map((r) => (
                                        <Link href={`/cases/${r.slug}`} className="related-card" key={r.slug}>
                                            <div className="related-card-year">{r.year} &middot; {r.category}</div>
                                            <h3>{r.title}</h3>
                                            <p>{r.summary.slice(0, 120)}...</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                )}

                <div className="cta-strip">
                    <div className="cta-strip-inner">
                        <div className="cta-strip-content">
                            <h2>Facing a Similar Situation?</h2>
                            <p>Our team has the experience and the reach to handle matters of this complexity. Contact us in confidence.</p>
                            <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
                        </div>
                    </div>
                </div>

                <footer className="lexi-footer">
                    <div className="footer-grid">
                        <div className="footer-brand footer-col"><h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "none", letterSpacing: "-.02em", color: "var(--color-text-primary)" }}>{company.name}</h4><p>{company.description}</p></div>
                        <div className="footer-col"><h4>Practice Areas</h4><ul>{footer.servicesLinks.map((s, i) => <li key={i}><Link href="/services">{s}</Link></li>)}</ul></div>
                        <div className="footer-col"><h4>The Firm</h4><ul>{nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}</ul></div>
                        <div className="footer-col"><h4>Contact</h4><ul><li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li><li><a href={`mailto:${contact.email}`}>{contact.email}</a></li></ul></div>
                    </div>
                    <div className="footer-bottom"><div>&#169; {new Date().getFullYear()} {footer.copyright}</div><div className="footer-socials"><a href="#">LinkedIn</a><a href="#">Privacy Policy</a></div></div>
                </footer>
            </div>
        </>
    );
}
