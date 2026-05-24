"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import siteData from "@/data/siteData.json";

export default function Home() {
    const { company, contact, footer, nav, services, cases, blog, team } = siteData;
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <div className="content">
            <nav className={`lexi-nav${scrolled ? " scrolled" : ""}`}>
                <Link href="/" className="lexi-logo">{company.name}</Link>
                <ul className="lexi-nav-menu">
                    {nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}
                    <li><Link href="/contact"><button className="lexi-nav-cta">Enquire</button></Link></li>
                </ul>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-content">
                    <p className="text-label" style={{ marginBottom: "var(--space-xl)" }}>{company.heroSubtitle}</p>
                    <h1>Counsel Without<br />Compromise.</h1>
                    <p className="hero-sub">{company.heroBody}</p>
                    <div className="hero-buttons">
                        <Link href="/contact" className="btn btn-primary">Request a Consultation</Link>
                        <Link href="/about" className="btn">About the Firm</Link>
                    </div>
                    <div className="hero-rule" />
                </div>
            </section>

            {/* STATS */}
            <div className="stats-bar">
                <div className="stats-bar-inner">
                    <div className="stat"><div className="stat-num">$3.2B+</div><div className="stat-label">Assets Recovered</div></div>
                    <div className="stat"><div className="stat-num">{company.casesWon}</div><div className="stat-label">Matters Concluded</div></div>
                    <div className="stat"><div className="stat-num">60+</div><div className="stat-label">Countries Served</div></div>
                    <div className="stat"><div className="stat-num">{company.yearsExperience}+</div><div className="stat-label">Years in Practice</div></div>
                </div>
            </div>

            {/* ABOUT TEASER */}
            <section className="teaser">
                <div className="teaser-inner">
                    <div className="teaser-grid">
                        <div className="teaser-text">
                            <span className="text-label">The Firm</span>
                            <h2>We Do Not Seek Publicity. We Seek Results.</h2>
                            <p>Lexi Global Firm operates at the highest level of legal practice. Our clients are referred to us. Our work is never discussed in public. Our results speak through the outcomes we achieve, not the press releases we issue.</p>
                            <Link href="/about" className="btn">Learn About the Firm</Link>
                        </div>
                        <div className="teaser-visual">
                            <p className="teaser-visual-text">"The most consequential legal work is never discussed in public."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES TEASER */}
            <section className="teaser teaser-alt">
                <div className="teaser-inner">
                    <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
                        <span className="text-label">Practice Areas</span>
                        <h2>What We Do</h2>
                        <p style={{ color: "var(--color-text-secondary)", marginTop: "var(--space-lg)", maxWidth: "560px", margin: "var(--space-lg) auto 0" }}>Six practice areas. Each led by a partner with decades of specialist experience.</p>
                    </div>
                    <div className="services-teaser-grid">
                        {services.map((s) => (
                            <Link href={`/services#${s.id}`} className="service-teaser-card" key={s.id}>
                                <div className="service-teaser-icon">{s.icon}</div>
                                <div className="service-teaser-title">{s.title}</div>
                                <div className="service-teaser-desc">{s.description}</div>
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: "var(--space-3xl)" }}>
                        <Link href="/services" className="btn">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* CASES TEASER */}
            <section className="teaser">
                <div className="teaser-inner">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-3xl)", flexWrap: "wrap", gap: "var(--space-xl)" }}>
                        <div><span className="text-label">Landmark Outcomes</span><h2>Selected Cases</h2></div>
                        <Link href="/cases" className="btn btn-sm">View All Cases</Link>
                    </div>
                    <div className="cases-teaser-list">
                        {cases.slice(0, 3).map((c) => (
                            <Link href={`/cases/${c.slug}`} className="case-teaser-item" key={c.slug}>
                                <div className="case-teaser-left">
                                    <div className="case-teaser-year">{c.year} &middot; {c.category}</div>
                                    <div className="case-teaser-title">{c.title}</div>
                                    <div className="case-teaser-tags">{c.tags.map((t, i) => <span className="case-tag" key={i}>{t}</span>)}</div>
                                </div>
                                <div className="case-teaser-arrow">&#8594;</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM TEASER */}
            <section className="teaser teaser-alt">
                <div className="teaser-inner">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-3xl)", flexWrap: "wrap", gap: "var(--space-xl)" }}>
                        <div><span className="text-label">Our People</span><h2>The Partners</h2></div>
                        <Link href="/team" className="btn btn-sm">Meet the Team</Link>
                    </div>
                    <div className="team-teaser-grid">
                        {team.slice(0, 4).map((m) => (
                            <Link href="/team" className="team-teaser-card" key={m.slug}>
                                <div className="team-teaser-avatar">{m.emoji}</div>
                                <div className="team-teaser-name">{m.name}</div>
                                <div className="team-teaser-role">{m.role}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOG TEASER */}
            <section className="teaser">
                <div className="teaser-inner">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-3xl)", flexWrap: "wrap", gap: "var(--space-xl)" }}>
                        <div><span className="text-label">Insights</span><h2>Latest Analysis</h2></div>
                        <Link href="/blog" className="btn btn-sm">All Insights</Link>
                    </div>
                    <div className="blog-teaser-grid">
                        {blog.map((a) => (
                            <Link href={`/blog/${a.slug}`} className="blog-teaser-card" key={a.slug}>
                                <div className="blog-teaser-img">
                                    {a.image ? <img src={a.image} alt={a.title} /> : <div className="blog-teaser-img-placeholder" />}
                                </div>
                                <div className="blog-teaser-body">
                                    <div className="blog-teaser-cat">{a.category}</div>
                                    <div className="blog-teaser-title">{a.title}</div>
                                    <div className="blog-teaser-meta">{a.date} &middot; {a.readTime} read</div>
                                </div>
                            </Link>
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
                    <div className="footer-col"><h4>Practice Areas</h4><ul>{footer.servicesLinks.map((s, i) => <li key={i}><Link href="/services">{s}</Link></li>)}</ul></div>
                    <div className="footer-col"><h4>The Firm</h4><ul>{nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}</ul></div>
                    <div className="footer-col"><h4>Contact</h4><ul>
                        <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
                        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                        <li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.address.street}, {contact.address.city}</li>
                        <li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem", whiteSpace: "pre-line" }}>{contact.hours.footerDisplay}</li>
                    </ul></div>
                </div>
                <div className="footer-bottom">
                    <div>&#169; {new Date().getFullYear()} {footer.copyright}</div>
                    <div className="footer-socials"><a href="#">LinkedIn</a><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
                </div>
            </footer>
        </div>
    );
}
