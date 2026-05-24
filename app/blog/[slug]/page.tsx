"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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

export default function BlogPostPage() {
    const { company, contact, footer, nav, blog } = siteData;
    const [scrolled, setScrolled] = useState(false);
    const params = useParams();
    const slug = params?.slug as string;

    const post = blog.find((b) => b.slug === slug);
    const morePosts = blog.filter((b) => b.slug !== slug).slice(0, 2);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    if (!post) {
        return (
            <>
                <style>{BASE_CSS}</style>
                <style>{NAV_CSS}</style>
                <style>{BTN_CSS}</style>
                <div className="content">
                    <nav className={scrolled ? "active" : ""}>
                        <Link href="/" className="logo">{company.name}</Link>
                        <ul className="nav-menu">
                            {nav.map((l) => (
                                <li key={l.href}><Link href={l.href}>{l.name}</Link></li>
                            ))}
                            <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
                        </ul>
                    </nav>
                    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-xl)", padding: "var(--space-3xl)" }}>
                        <p className="text-label">404</p>
                        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,6vw,3.5rem)", textAlign: "center" }}>Post Not Found</h1>
                        <p style={{ color: "var(--color-text-secondary)", textAlign: "center", maxWidth: "480px" }}>This insight is not available or has been removed.</p>
                        <Link href="/blog" className="btn">Back to Insights</Link>
                    </div>
                </div>
            </>
        );
    }

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
        .article-wrap {
          max-width: 720px;
          margin: 0 auto;
        }
        .article-meta {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          margin-bottom: var(--space-3xl);
          flex-wrap: wrap;
        }
        .article-cat {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: var(--color-accent-primary);
          font-weight: 600;
          background: rgba(132,204,22,.1);
          border: 1px solid rgba(132,204,22,.2);
          padding: .25rem .875rem;
          border-radius: .25rem;
        }
        .article-date-read {
          font-size: .8rem;
          color: var(--color-text-tertiary);
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }
        .article-body {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          line-height: 2;
          margin-bottom: var(--space-4xl);
        }
        .more-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2xl);
          margin-top: var(--space-3xl);
        }
        .more-card {
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-radius: .75rem;
          overflow: hidden;
          text-decoration: none;
          display: block;
          transition: all .3s;
        }
        .more-card:hover {
          border-color: var(--color-accent-primary);
          transform: translateY(-4px);
        }
        .more-card-img {
          height: 120px;
          background: linear-gradient(135deg, var(--color-surface-3), var(--color-surface-1));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          border-bottom: 1px solid var(--color-border);
        }
        .more-card-body {
          padding: var(--space-xl);
        }
        .more-card-cat {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .1em;
          color: var(--color-accent-primary);
          font-weight: 600;
          margin-bottom: var(--space-sm);
        }
        .more-card-title {
          font-family: var(--font-display);
          font-size: 1rem;
          color: var(--color-text-primary);
          line-height: 1.4;
          margin-bottom: var(--space-sm);
        }
        .more-card-meta {
          font-size: .75rem;
          color: var(--color-text-tertiary);
        }
        @media(max-width: 768px) {
          .more-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <div className="content">
                {/* NAV */}
                <nav className={scrolled ? "active" : ""}>
                    <Link href="/" className="logo">{company.name}</Link>
                    <ul className="nav-menu">
                        {nav.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href}>{l.name}</Link>
                            </li>
                        ))}
                        <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
                    </ul>
                </nav>

                {/* HERO */}
                <div className="page-hero">
                    <div className="page-hero-inner">
                        <span className="text-label">{post.category}</span>
                        <h1>{post.title}</h1>
                    </div>
                </div>

                {/* ARTICLE */}
                <section className="section">
                    <div className="section-inner">
                        <div className="article-wrap">
                            <div className="article-meta">
                                <span className="article-cat">{post.category}</span>
                                <div className="article-date-read">
                                    <span>{post.date}</span>
                                    <span>&middot;</span>
                                    <span>{post.readTime} read</span>
                                </div>
                            </div>
                            <p className="article-body">{post.content}</p>
                            <Link href="/blog" className="btn">&#8592; Back to Insights</Link>
                        </div>
                    </div>
                </section>

                {/* MORE INSIGHTS */}
                <section className="section" style={{ borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-4xl)" }}>
                    <div className="section-inner">
                        <div className="section-header">
                            <span className="text-label">Keep Reading</span>
                            <h2>More Insights</h2>
                            <div className="divider" />
                        </div>
                        <div className="more-grid">
                            {morePosts.map((mp) => (
                                <Link href={`/blog/${mp.slug}`} className="more-card" key={mp.slug}>
                                    <div className="more-card-img">{mp.emoji}</div>
                                    <div className="more-card-body">
                                        <div className="more-card-cat">{mp.category}</div>
                                        <div className="more-card-title">{mp.title}</div>
                                        <div className="more-card-meta">{mp.date} &middot; {mp.readTime} read</div>
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
