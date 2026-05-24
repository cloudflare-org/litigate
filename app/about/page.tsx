"use client";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const { company, about } = siteData;

export default function AboutPage() {
    return (
        <div className="content">
            <LexiNav />

            <div className="page-hero">
                <div className="page-hero-inner">
                    <span className="text-label">The Firm</span>
                    <h1>About Us</h1>
                    <p className="hero-sub">{about.heroSubtitle}</p>
                </div>
            </div>

            {/* STORY */}
            <section className="section">
                <div className="section-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5xl)", alignItems: "start" }}>
                    <div>
                        <span className="text-label" style={{ display: "block", marginBottom: "var(--space-lg)" }}>Our Story</span>
                        <h2 style={{ marginBottom: "var(--space-2xl)" }}>{about.storyTitle}</h2>
                        {about.storyParagraphs.map((p, i) => (
                            <p key={i} style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-xl)", lineHeight: "1.9" }}>{p}</p>
                        ))}
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", marginTop: "var(--space-2xl)" }}>
                            {about.highlights.map((h, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)", padding: "var(--space-lg) var(--space-xl)", background: "var(--color-surface-1)", border: "1px solid var(--color-border)", borderRadius: ".5rem" }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent-primary)", flexShrink: 0 }} />
                                    <span style={{ color: "var(--color-text-secondary)", fontSize: ".95rem" }}>{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ position: "sticky", top: "120px", height: "480px", background: "linear-gradient(135deg,var(--color-surface-2),var(--color-surface-1))", border: "1px solid var(--color-border)", borderRadius: "1rem", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem,2.5vw,1.8rem)", color: "var(--color-text-secondary)", textAlign: "center", padding: "var(--space-3xl)", fontStyle: "italic", lineHeight: "1.5", position: "relative", zIndex: 1 }}>
                            "Founded in {company.foundedYear}. Built on silence. Proven by results."
                        </p>
                        <div style={{ position: "absolute", bottom: "var(--space-2xl)", right: "var(--space-2xl)", background: "var(--color-accent-primary)", padding: "var(--space-xl)", borderRadius: ".75rem", textAlign: "center" }}>
                            <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "#050505", lineHeight: 1 }}>{company.yearsExperience}+</div>
                            <div style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".15em", color: "rgba(5,5,5,.7)", fontWeight: 600, marginTop: ".25rem" }}>Years</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DISCRETION */}
            <section style={{ padding: "var(--space-5xl) var(--space-3xl)", background: "linear-gradient(180deg,var(--color-bg-tertiary),transparent)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5xl)", alignItems: "center" }}>
                    <div>
                        <span className="text-label" style={{ display: "block", marginBottom: "var(--space-lg)" }}>Our Approach</span>
                        <h2 style={{ marginBottom: "var(--space-xl)" }}>Discretion Is Not a Feature. It Is the Foundation.</h2>
                        <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)", lineHeight: "1.9" }}>We do not publish client lists. We do not issue press releases about our victories. We do not seek recognition from the legal press. Our reputation is built entirely on the trust of those we serve and the results we achieve on their behalf.</p>
                        <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)", lineHeight: "1.9" }}>Every engagement is governed by protocols that go beyond standard legal professional privilege. We operate on a strict need-to-know basis internally, and we never discuss one client's matter with another, regardless of the circumstances.</p>
                        <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9" }}>This is not a marketing position. It is how we have operated since 1998, and it is why clients who require the highest level of confidentiality come to us.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-xl)" }}>
                        {[{ num: "60+", label: "Countries Served" }, { num: "$3.2B+", label: "Assets Recovered" }, { num: "100%", label: "Partner-Led Matters" }, { num: "0", label: "Public Disclosures" }].map((s, i) => (
                            <div key={i} style={{ padding: "var(--space-2xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem", textAlign: "center" }}>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,4vw,3rem)", color: "var(--color-accent-primary)", letterSpacing: "-.02em" }}>{s.num}</div>
                                <div style={{ color: "var(--color-text-secondary)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".1em", marginTop: "var(--space-sm)" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="section">
                <div className="section-inner">
                    <div style={{ textAlign: "center", marginBottom: "var(--space-4xl)" }}>
                        <span className="text-label" style={{ display: "block", marginBottom: "var(--space-md)" }}>What We Stand For</span>
                        <h2>Our Values</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--space-xl)" }}>
                        {about.values.map((v, i) => (
                            <div key={i} style={{ padding: "var(--space-3xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem" }}>
                                <div style={{ fontSize: "1.75rem", marginBottom: "var(--space-lg)" }}>{v.icon}</div>
                                <h3 style={{ marginBottom: "var(--space-md)" }}>{v.title}</h3>
                                <p style={{ color: "var(--color-text-secondary)", fontSize: ".95rem" }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="cta-strip">
                <div className="cta-strip-inner">
                    <div className="cta-strip-content">
                        <h2>Work With the Firm</h2>
                        <p>We accept new clients by referral only. If you have been referred to us, or wish to make a confidential enquiry, we will respond within 24 hours.</p>
                        <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
                    </div>
                </div>
            </div>

            <LexiFooter />
        </div>
    );
}
