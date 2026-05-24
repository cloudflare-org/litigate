"use client";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const { blog } = siteData;

export default function BlogPage() {
    return (
        <div className="content">
            <LexiNav />

            <div className="page-hero">
                <div className="page-hero-inner">
                    <span className="text-label">Insights</span>
                    <h1>Analysis and Commentary</h1>
                    <p className="hero-sub">Analysis and commentary from the partners of Lexi Global Firm on the legal issues that matter most to our clients.</p>
                </div>
            </div>

            {/* Disclaimer */}
            <div style={{ background: "var(--color-surface-2)", borderBottom: "1px solid var(--color-border)", padding: "var(--space-xl) var(--space-3xl)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "flex-start", gap: "var(--space-lg)" }}>
                    <span style={{ color: "var(--color-accent-primary)", fontSize: "1rem", flexShrink: 0, marginTop: "2px" }}>&#9432;</span>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: ".875rem", lineHeight: "1.6" }}>Our insights are written by our partners and reflect their personal analysis of legal developments. They do not constitute legal advice and should not be relied upon as such. If you have a specific legal matter, please contact us directly.</p>
                </div>
            </div>

            <section style={{ padding: "var(--space-5xl) var(--space-3xl)", maxWidth: "1400px", margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--space-2xl)" }}>
                    {blog.map((a) => (
                        <Link key={a.slug} href={`/blog/${a.slug}`} style={{ display: "block", textDecoration: "none", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem", overflow: "hidden", transition: "all .4s" }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--color-accent-primary)"; el.style.transform = "translateY(-8px)"; el.style.boxShadow = "0 20px 50px rgba(132,204,22,.15)"; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--color-border)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
                        >
                            <div style={{ height: "240px", background: "var(--color-surface-3)", overflow: "hidden", position: "relative" }}>
                                {a.image
                                    ? <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                    : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,var(--color-surface-3),var(--color-surface-1))" }} />
                                }
                            </div>
                            <div style={{ padding: "var(--space-2xl)" }}>
                                <div style={{ fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".12em", color: "var(--color-accent-primary)", fontWeight: 600, marginBottom: "var(--space-md)" }}>{a.category}</div>
                                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,2vw,1.4rem)", color: "var(--color-text-primary)", lineHeight: "1.3", marginBottom: "var(--space-lg)" }}>{a.title}</h3>
                                <p style={{ color: "var(--color-text-secondary)", fontSize: ".9rem", lineHeight: "1.7", marginBottom: "var(--space-xl)" }}>{a.excerpt}</p>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "var(--space-lg)", borderTop: "1px solid var(--color-border)" }}>
                                    <span style={{ fontSize: ".75rem", color: "var(--color-text-tertiary)" }}>{a.date} &middot; {a.readTime} read</span>
                                    <span style={{ fontSize: ".85rem", color: "var(--color-accent-primary)", fontWeight: 600 }}>Read &#8594;</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <LexiFooter />
        </div>
    );
}
