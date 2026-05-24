"use client";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import siteData from "@/data/siteData.json";

export const runtime = 'edge';

const { cases } = siteData;

export default function CasesPage() {
    return (
        <div className="content">
            <LexiNav />

            <div className="page-hero">
                <div className="page-hero-inner">
                    <span className="text-label">Track Record</span>
                    <h1>Selected Cases</h1>
                    <p className="hero-sub">We do not publish all of our work. What follows is a small selection of matters we are able to discuss, presented to illustrate the nature and scale of our practice.</p>
                </div>
            </div>

            {/* Disclaimer */}
            <div style={{ background: "var(--color-surface-2)", borderBottom: "1px solid var(--color-border)", padding: "var(--space-xl) var(--space-3xl)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "flex-start", gap: "var(--space-lg)" }}>
                    <span style={{ color: "var(--color-accent-primary)", fontSize: "1rem", flexShrink: 0, marginTop: "2px" }}>&#9432;</span>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: ".875rem", lineHeight: "1.6" }}>All case descriptions have been anonymised or published with explicit client consent. Many of our most significant matters cannot be disclosed under any circumstances. The cases shown here represent a fraction of our work and are selected solely to illustrate the breadth and complexity of our practice.</p>
                </div>
            </div>

            <section style={{ padding: "var(--space-5xl) var(--space-3xl)", maxWidth: "1400px", margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2xl)" }}>
                    {cases.map((c) => (
                        <Link key={c.slug} href={`/cases/${c.slug}`} style={{ display: "block", textDecoration: "none", padding: "var(--space-3xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", transition: "all .4s", position: "relative", overflow: "hidden" }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(132,204,22,.3)"; el.style.background = "var(--color-surface-3)"; el.style.transform = "translateX(4px)"; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--color-border)"; el.style.background = "var(--color-surface-2)"; el.style.transform = "translateX(0)"; }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)", marginBottom: "var(--space-lg)", flexWrap: "wrap" }}>
                                <span style={{ fontSize: ".75rem", fontWeight: 600, color: "var(--color-accent-primary)", textTransform: "uppercase", letterSpacing: ".12em" }}>{c.year}</span>
                                <span style={{ color: "var(--color-text-tertiary)" }}>&#183;</span>
                                <span style={{ fontSize: ".75rem", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".1em" }}>{c.category}</span>
                            </div>
                            <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", color: "var(--color-text-primary)", marginBottom: "var(--space-lg)" }}>{c.title}</h2>
                            <p style={{ color: "var(--color-text-secondary)", fontSize: ".95rem", lineHeight: "1.8", marginBottom: "var(--space-xl)" }}>{c.summary}</p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-lg)" }}>
                                <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
                                    {c.tags.map((t, i) => <span key={i} className="case-tag">{t}</span>)}
                                </div>
                                <span style={{ fontSize: ".85rem", color: "var(--color-accent-primary)", fontWeight: 600 }}>Read full case &#8594;</span>
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

            <LexiFooter />
        </div>
    );
}
