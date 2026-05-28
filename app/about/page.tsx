import Link from "next/link";
import Image from "next/image";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import { Lock, Award, Globe, Target } from "lucide-react";
import siteData from "@/data/siteData.json";

const { company, about } = siteData;

const valueIcons = [Lock, Award, Globe, Target];

export default function AboutPage() {
    return (
        <div className="content">
            <LexiNav />

            {/* ── PAGE HERO ── */}
            <div className="page-hero">
                <div className="page-hero-inner">
                    <span className="text-label">The Firm</span>
                    <h1>About Us</h1>
                    <p className="hero-sub">{about.heroSubtitle}</p>
                </div>
            </div>

            {/* ── STORY ── */}
            <section className="page-section">
                <div className="page-section-inner">
                    <div className="about-story-grid">

                        {/* Text column */}
                        <div>
                            <span className="text-label" style={{ display: "block", marginBottom: "var(--space-lg)" }}>Our Story</span>
                            <h2 style={{ marginBottom: "var(--space-2xl)" }}>{about.storyTitle}</h2>
                            {about.storyParagraphs.map((p, i) => (
                                <p key={i} style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-xl)", lineHeight: "1.9" }}>{p}</p>
                            ))}
                            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", marginTop: "var(--space-2xl)" }}>
                                {about.highlights.map((h, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)", padding: "var(--space-lg) var(--space-xl)", background: "var(--color-surface-1)", border: "1px solid var(--color-border)", borderRadius: ".5rem" }}>
                                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-accent-primary)", flexShrink: 0 }} />
                                        <span style={{ color: "var(--color-text-secondary)", fontSize: ".95rem" }}>{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual column */}
                        <div className="about-visual-sticky" style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--color-border)", position: "relative", minHeight: "480px" }}>
                            {/* Dark bg so cutout looks clean */}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #141b27 0%, #1a2235 100%)", zIndex: 0 }} />
                            {/* Gold glow behind figure */}
                            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(182,157,116,.1) 0%, transparent 65%)", zIndex: 1 }} />
                            <Image
                                src="/howard.webp"
                                alt="Howard Weitzman — Founding Partner"
                                fill
                                style={{ objectFit: "contain", objectPosition: "center bottom", zIndex: 2 }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            {/* Name badge */}
                            <div style={{ position: "absolute", bottom: "var(--space-xl)", left: "var(--space-xl)", zIndex: 3, background: "rgba(20,27,39,.88)", backdropFilter: "blur(12px)", border: "1px solid rgba(182,157,116,.25)", borderRadius: ".5rem", padding: "var(--space-md) var(--space-lg)" }}>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-text-primary)", fontWeight: 600 }}>Howard Weitzman</div>
                                <div style={{ fontSize: ".72rem", color: "var(--color-accent-primary)", textTransform: "uppercase", letterSpacing: ".1em", marginTop: ".2rem" }}>Founding Partner · Est. 2013</div>
                            </div>
                            {/* Years badge */}
                            <div style={{ position: "absolute", bottom: "var(--space-xl)", right: "var(--space-xl)", background: "var(--color-accent-primary)", padding: "var(--space-lg)", borderRadius: ".75rem", textAlign: "center", zIndex: 3 }}>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#141b27", lineHeight: 1, fontWeight: 700 }}>{company.yearsExperience}+</div>
                                <div style={{ fontSize: ".6rem", textTransform: "uppercase", letterSpacing: ".12em", color: "rgba(20,27,39,.75)", fontWeight: 600, marginTop: ".2rem" }}>Years</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── DISCRETION ── */}
            <section className="page-section-alt">
                <div className="page-section-inner">
                    <div className="about-discretion-grid">
                        <div>
                            <span className="text-label" style={{ display: "block", marginBottom: "var(--space-lg)" }}>Our Approach</span>
                            <h2 style={{ marginBottom: "var(--space-xl)" }}>Discretion Is Not a Feature. It Is the Foundation.</h2>
                            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)", lineHeight: "1.9" }}>We do not publish client lists. We do not issue press releases about our victories. We do not seek recognition from the legal press. Our reputation is built entirely on the trust of those we serve and the results we achieve on their behalf.</p>
                            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)", lineHeight: "1.9" }}>Every engagement is governed by protocols that go beyond standard legal professional privilege. We operate on a strict need-to-know basis internally, and we never discuss one client&apos;s matter with another, regardless of the circumstances.</p>
                            <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9" }}>This is not a marketing position. It is how we have operated since {company.foundedYear}, and it is why clients who require the highest level of confidentiality come to us.</p>
                        </div>

                        <div className="about-stats-grid">
                            {[
                                { num: "60+", label: "Countries Served" },
                                { num: "$3.2B+", label: "Assets Recovered" },
                                { num: "100%", label: "Partner-Led Matters" },
                                { num: "0", label: "Public Disclosures" },
                            ].map((s, i) => (
                                <div key={i} style={{ padding: "var(--space-2xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem", textAlign: "center" }}>
                                    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--color-accent-primary)", letterSpacing: "-.02em", fontWeight: 600 }}>{s.num}</div>
                                    <div style={{ color: "var(--color-text-secondary)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".1em", marginTop: "var(--space-sm)" }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="page-section">
                <div className="page-section-inner">
                    <div style={{ textAlign: "center", marginBottom: "var(--space-4xl)" }}>
                        <span className="text-label" style={{ display: "block", marginBottom: "var(--space-md)" }}>What We Stand For</span>
                        <h2>Our Values</h2>
                    </div>
                    <div className="about-values-grid">
                        {about.values.map((v, i) => (
                            <div key={i} className="value-card">
                                <div style={{ marginBottom: "var(--space-lg)" }}>{(() => {
                                    const Icon = valueIcons[i];
                                    return <Icon size={28} color="var(--color-accent-primary)" />;
                                })()}</div>
                                <h3 style={{ marginBottom: "var(--space-md)" }}>{v.title}</h3>
                                <p style={{ color: "var(--color-text-secondary)", fontSize: ".95rem" }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
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
