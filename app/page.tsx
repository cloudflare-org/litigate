"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import siteData from "@/data/siteData.json";
import { BASE_CSS, NAV_CSS, FOOTER_CSS, BTN_CSS, CTA_STRIP_CSS } from "@/components/LexiStyles";

export default function Home() {
    const { company, contact, footer, nav, services, cases, blog, team } = siteData;
    const [scrolled, setScrolled] = useState(false);
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
            <style>{CTA_STRIP_CSS}</style>
            <style>{`
        /* HERO */
        .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:var(--space-3xl);position:relative;overflow:hidden;}
        .hero::before,.hero::after{content:'';position:absolute;border-radius:50%;opacity:.4;animation:float 20s ease-in-out infinite;pointer-events:none;}
        .hero::before{top:10%;right:-5%;width:600px;height:600px;background:radial-gradient(circle,rgba(132,204,22,.2),transparent);}
        .hero::after{bottom:-10%;left:5%;width:500px;height:500px;background:radial-gradient(circle,rgba(132,204,22,.15),transparent);animation-delay:-10s;}
        .hero-content{max-width:900px;text-align:center;z-index:2;animation:fadeInUp 1.2s ease-out .3s both;}
        .hero h1{background:linear-gradient(135deg,#fafaf9 0%,#a1a09e 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:var(--space-2xl);font-weight:400;letter-spacing:-.03em;line-height:1.1;}
        .hero-sub{color:var(--color-text-secondary);margin-bottom:var(--space-3xl);max-width:620px;margin-left:auto;margin-right:auto;font-size:clamp(1rem,2vw,1.15rem);line-height:1.8;}
        .hero-buttons{display:flex;gap:var(--space-lg);justify-content:center;flex-wrap:wrap;}
        .hero-rule{width:1px;height:80px;background:linear-gradient(to bottom,transparent,var(--color-accent-primary),transparent);margin:var(--space-3xl) auto 0;}
        @media(max-width:768px){.hero{min-height:90vh;padding:var(--space-2xl) var(--space-lg);}.hero-buttons{flex-direction:column;align-items:center;}.hero::before,.hero::after{width:300px;height:300px;}}

        /* STATS BAR */
        .stats-bar{border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border);background:linear-gradient(180deg,var(--color-surface-1),var(--color-surface-2));padding:var(--space-4xl) var(--space-3xl);}
        .stats-bar-inner{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-3xl);}
        .stat{text-align:center;}
        .stat-num{font-family:var(--font-display);font-size:clamp(2rem,5vw,3.5rem);font-weight:500;color:var(--color-accent-primary);letter-spacing:-.02em;line-height:1;}
        .stat-label{color:var(--color-text-secondary);font-size:.8rem;text-transform:uppercase;letter-spacing:.12em;font-weight:500;margin-top:var(--space-sm);}
        @media(max-width:768px){.stats-bar{padding:var(--space-3xl) var(--space-lg);}.stats-bar-inner{grid-template-columns:repeat(2,1fr);gap:var(--space-2xl);}}

        /* TEASER SECTIONS */
        .teaser{padding:var(--space-5xl) var(--space-3xl);}
        .teaser-inner{max-width:1400px;margin:0 auto;}
        .teaser-alt{background:linear-gradient(180deg,var(--color-bg-tertiary),transparent);}
        .teaser-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-5xl);align-items:center;}
        .teaser-grid.reverse .teaser-text{order:2;}
        .teaser-grid.reverse .teaser-visual{order:1;}
        .teaser-text .text-label{display:block;margin-bottom:var(--space-lg);}
        .teaser-text h2{margin-bottom:var(--space-xl);}
        .teaser-text p{color:var(--color-text-secondary);margin-bottom:var(--space-2xl);}
        .teaser-visual{position:relative;height:420px;background:linear-gradient(135deg,var(--color-surface-2),var(--color-surface-1));border:1px solid var(--color-border);border-radius:1rem;overflow:hidden;display:flex;align-items:center;justify-content:center;}
        .teaser-visual::before{content:'';position:absolute;top:-10%;right:-5%;width:350px;height:350px;border-radius:50%;opacity:.25;background:radial-gradient(circle,rgba(132,204,22,.4),transparent);animation:float 15s ease-in-out infinite;}
        .teaser-visual-text{font-family:var(--font-display);font-size:clamp(1.2rem,2.5vw,1.8rem);color:var(--color-text-secondary);text-align:center;padding:var(--space-3xl);position:relative;z-index:1;font-style:italic;line-height:1.4;}
        @media(max-width:1024px){.teaser-grid{grid-template-columns:1fr;gap:var(--space-3xl);}.teaser-grid.reverse .teaser-text,.teaser-grid.reverse .teaser-visual{order:unset;}.teaser-visual{height:300px;}}
        @media(max-width:768px){.teaser{padding:var(--space-3xl) var(--space-lg);}}

        /* SERVICES TEASER */
        .services-teaser-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-xl);}
        .service-teaser-card{padding:var(--space-2xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;transition:all .4s var(--ease-in-out);text-decoration:none;display:block;}
        .service-teaser-card:hover{border-color:var(--color-accent-primary);transform:translateY(-6px);box-shadow:0 16px 40px rgba(132,204,22,.12);}
        .service-teaser-icon{font-size:1.5rem;margin-bottom:var(--space-lg);}
        .service-teaser-title{font-family:var(--font-display);font-size:1.1rem;color:var(--color-text-primary);margin-bottom:var(--space-sm);}
        .service-teaser-desc{color:var(--color-text-secondary);font-size:.875rem;line-height:1.6;}
        @media(max-width:1024px){.services-teaser-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:640px){.services-teaser-grid{grid-template-columns:1fr;}}

        /* CASES TEASER */
        .cases-teaser-list{display:flex;flex-direction:column;gap:var(--space-lg);}
        .case-teaser-item{display:flex;align-items:center;justify-content:space-between;padding:var(--space-xl) var(--space-2xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;text-decoration:none;transition:all .3s;gap:var(--space-xl);}
        .case-teaser-item:hover{border-color:var(--color-accent-primary);background:var(--color-surface-3);}
        .case-teaser-left{flex:1;}
        .case-teaser-year{font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;color:var(--color-accent-primary);font-weight:600;margin-bottom:var(--space-sm);}
        .case-teaser-title{font-family:var(--font-display);font-size:1.1rem;color:var(--color-text-primary);}
        .case-teaser-tags{display:flex;gap:var(--space-sm);flex-wrap:wrap;margin-top:var(--space-sm);}
        .case-tag{font-size:.7rem;background:rgba(132,204,22,.1);color:var(--color-accent-primary);border:1px solid rgba(132,204,22,.2);padding:.2rem .75rem;border-radius:.25rem;text-transform:uppercase;letter-spacing:.08em;font-weight:600;}
        .case-teaser-arrow{color:var(--color-text-tertiary);font-size:1.2rem;flex-shrink:0;transition:transform .3s;}
        .case-teaser-item:hover .case-teaser-arrow{transform:translateX(4px);color:var(--color-accent-primary);}

        /* BLOG TEASER */
        .blog-teaser-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-2xl);}
        .blog-teaser-card{background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;overflow:hidden;transition:all .4s;text-decoration:none;display:block;}
        .blog-teaser-card:hover{border-color:var(--color-accent-primary);transform:translateY(-8px);box-shadow:0 20px 50px rgba(132,204,22,.15);}
        .blog-teaser-img{height:160px;background:linear-gradient(135deg,var(--color-surface-3),var(--color-surface-1));display:flex;align-items:center;justify-content:center;font-size:2.5rem;}
        .blog-teaser-body{padding:var(--space-xl);}
        .blog-teaser-cat{font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:var(--color-accent-primary);font-weight:600;margin-bottom:var(--space-sm);}
        .blog-teaser-title{font-family:var(--font-display);font-size:1rem;color:var(--color-text-primary);line-height:1.4;margin-bottom:var(--space-md);}
        .blog-teaser-meta{font-size:.75rem;color:var(--color-text-tertiary);}
        @media(max-width:1024px){.blog-teaser-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:640px){.blog-teaser-grid{grid-template-columns:1fr;}}

        /* TEAM TEASER */
        .team-teaser-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-2xl);}
        .team-teaser-card{text-align:center;text-decoration:none;display:block;transition:transform .3s;}
        .team-teaser-card:hover{transform:translateY(-6px);}
        .team-teaser-avatar{width:100%;aspect-ratio:1;background:linear-gradient(135deg,var(--color-surface-2),var(--color-surface-1));border:1px solid var(--color-border);border-radius:.75rem;display:flex;align-items:center;justify-content:center;font-size:3rem;margin-bottom:var(--space-lg);transition:border-color .3s;}
        .team-teaser-card:hover .team-teaser-avatar{border-color:var(--color-accent-primary);}
        .team-teaser-name{font-family:var(--font-display);font-size:1rem;color:var(--color-text-primary);margin-bottom:.25rem;}
        .team-teaser-role{font-size:.75rem;color:var(--color-accent-primary);text-transform:uppercase;letter-spacing:.1em;font-weight:600;}
        @media(max-width:1024px){.team-teaser-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:640px){.team-teaser-grid{grid-template-columns:repeat(2,1fr);gap:var(--space-lg);}}
      `}</style>

            <div className="content">
                {/* NAV */}
                <nav className={scrolled ? "active" : ""}>
                    <Link href="/" className="logo">{company.name}</Link>
                    <ul className="nav-menu">
                        {nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}
                        <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
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
                        <div className="section-header" style={{ marginBottom: "var(--space-3xl)" }}>
                            <span className="text-label">Practice Areas</span>
                            <h2>What We Do</h2>
                            <p style={{ color: "var(--color-text-secondary)", marginTop: "var(--space-lg)" }}>We operate across six core practice areas, each led by a partner with decades of specialist experience.</p>
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
                            <div>
                                <span className="text-label">Landmark Outcomes</span>
                                <h2>Selected Cases</h2>
                            </div>
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
                            <div>
                                <span className="text-label">Our People</span>
                                <h2>The Partners</h2>
                            </div>
                            <Link href="/team" className="btn btn-sm">Meet the Team</Link>
                        </div>
                        <div className="team-teaser-grid">
                            {team.slice(0, 4).map((m) => (
                                <Link href={`/team`} className="team-teaser-card" key={m.slug}>
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
                            <div>
                                <span className="text-label">Insights</span>
                                <h2>Latest Analysis</h2>
                            </div>
                            <Link href="/blog" className="btn btn-sm">All Insights</Link>
                        </div>
                        <div className="blog-teaser-grid">
                            {blog.map((a) => (
                                <Link href={`/blog/${a.slug}`} className="blog-teaser-card" key={a.slug}>
                                    <div className="blog-teaser-img">{a.emoji}</div>
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
