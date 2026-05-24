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
} from "@/components/LexiStyles";

export default function BlogPage() {
    const { company, contact, footer, nav, blog } = siteData;
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
            <style>{`
        .blog-disclaimer {
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-radius: .75rem;
          padding: var(--space-xl) var(--space-2xl);
          margin-bottom: var(--space-4xl);
          display: flex;
          gap: var(--space-lg);
          align-items: flex-start;
        }
        .blog-disclaimer p {
          color: var(--color-text-tertiary);
          font-size: .875rem;
          line-height: 1.7;
          margin: 0;
          font-style: italic;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2xl);
        }
        .blog-card {
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          overflow: hidden;
          text-decoration: none;
          display: block;
          transition: all .4s;
        }
        .blog-card:hover {
          border-color: var(--color-accent-primary);
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(132,204,22,.12);
        }
        .blog-card-img {
          height: 200px;
          background: linear-gradient(135deg, var(--color-surface-3), var(--color-surface-1));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          border-bottom: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
        }
        .blog-card-img::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(132,204,22,.08), transparent 60%);
        }
        .blog-card-body {
          padding: var(--space-2xl);
        }
        .blog-card-cat {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: var(--color-accent-primary);
          font-weight: 600;
          margin-bottom: var(--space-md);
        }
        .blog-card-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--color-text-primary);
          line-height: 1.3;
          margin-bottom: var(--space-lg);
        }
        .blog-card-excerpt {
          color: var(--color-text-secondary);
          font-size: .9rem;
          line-height: 1.7;
          margin-bottom: var(--space-xl);
        }
        .blog-card-meta {
          font-size: .75rem;
          color: var(--color-text-tertiary);
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }
        @media(max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr; }
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
                        <span className="text-label">Analysis and Commentary</span>
                        <h1>Insights</h1>
                        <p className="hero-sub">Analysis and commentary from the partners of Lexi Global Firm on the legal issues that matter most to our clients.</p>
                    </div>
                </div>

                {/* BLOG LISTING */}
                <section className="section">
                    <div className="section-inner">
                        <div className="blog-disclaimer">
                            <p>&#9432;&nbsp;&nbsp;Our insights are written by our partners and reflect their personal analysis. They do not constitute legal advice.</p>
                        </div>

                        <div className="blog-grid">
                            {blog.map((post) => (
                                <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                                    <div className="blog-card-img">{post.emoji}</div>
                                    <div className="blog-card-body">
                                        <div className="blog-card-cat">{post.category}</div>
                                        <div className="blog-card-title">{post.title}</div>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <div className="blog-card-meta">
                                            <span>{post.date}</span>
                                            <span>&middot;</span>
                                            <span>{post.readTime} read</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

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
