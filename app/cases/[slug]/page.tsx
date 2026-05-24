"use client";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import { useParams } from "next/navigation";
import siteData from "@/data/siteData.json";

const { cases } = siteData;

export default function CaseSinglePage() {
    const params = useParams();
    const slug = params?.slug as string;
    const item = cases.find((c) => c.slug === slug);
    const related = cases.filter((c) => c.slug !== slug).slice(0, 2);

    return (
        <div className="content">
            <LexiNav />

            {!item ? (
                <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "var(--space-xl)", paddingTop: "120px" }}>
                    <h2 style={{ color: "var(--color-text-secondary)" }}>Matter not found</h2>
                    <Link href="/cases" className="btn">Back to Cases</Link>
                </div>
            ) : (
                <>
                    <div className="page-hero">
                        <div className="page-hero-inner">
                            <span className="text-label">{item.category}</span>
                            <h1>{item.title}</h1>
                        </div>
                    </div>

                    <div style={{ padding: "var(--space-5xl) var(--space-3xl)", maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: "var(--space-4xl)", alignItems: "start" }}>
                        {/* Article */}
                        <article>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)", marginBottom: "var(--space-3xl)", flexWrap: "wrap" }}>
                                <span style={{ fontSize: ".8rem", fontWeight: 600, color: "var(--color-accent-primary)", textTransform: "uppercase", letterSpacing: ".12em" }}>{item.year}</span>
                                <span style={{ color: "var(--color-text-tertiary)" }}>&#183;</span>
                                <span style={{ fontSize: ".8rem", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".1em" }}>{item.category}</span>
                            </div>

                            {/* Summary callout */}
                            <div style={{ padding: "var(--space-2xl)", background: "rgba(132,204,22,.06)", border: "1px solid rgba(132,204,22,.15)", borderRadius: ".75rem", marginBottom: "var(--space-3xl)" }}>
                                <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", lineHeight: "1.8", fontStyle: "italic" }}>{item.summary}</p>
                            </div>

                            <p style={{ color: "var(--color-text-secondary)", lineHeight: "2", fontSize: "1.05rem" }}>{item.detail}</p>

                            <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap", marginTop: "var(--space-3xl)", paddingTop: "var(--space-2xl)", borderTop: "1px solid var(--color-border)" }}>
                                {item.tags.map((t, i) => <span key={i} className="case-tag">{t}</span>)}
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
                            <div style={{ padding: "var(--space-2xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem" }}>
                                <h4 style={{ fontFamily: "var(--font-body)", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".15em", fontWeight: 600, color: "var(--color-accent-primary)", marginBottom: "var(--space-xl)" }}>Matter Details</h4>
                                {[{ label: "Year", value: item.year }, { label: "Practice Area", value: item.category }, { label: "Classification", value: "Disclosed with consent" }].map((d, i) => (
                                    <div key={i} style={{ marginBottom: "var(--space-lg)" }}>
                                        <div style={{ fontSize: ".75rem", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".25rem" }}>{d.label}</div>
                                        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-text-primary)" }}>{d.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ padding: "var(--space-2xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem" }}>
                                <h4 style={{ fontFamily: "var(--font-body)", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".15em", fontWeight: 600, color: "var(--color-accent-primary)", marginBottom: "var(--space-xl)" }}>Confidentiality Notice</h4>
                                <p style={{ color: "var(--color-text-secondary)", fontSize: ".85rem", lineHeight: "1.7" }}>This matter has been published with the explicit consent of the client. All identifying details have been reviewed and approved prior to publication.</p>
                            </div>
                            <Link href="/contact" className="btn btn-primary" style={{ textAlign: "center", width: "100%" }}>Discuss a Similar Matter</Link>
                        </aside>
                    </div>

                    {/* Related */}
                    <section style={{ padding: "var(--space-5xl) var(--space-3xl)", background: "linear-gradient(180deg,var(--color-bg-tertiary),transparent)" }}>
                        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                            <span className="text-label" style={{ display: "block", marginBottom: "var(--space-lg)" }}>Related Matters</span>
                            <h2 style={{ marginBottom: "var(--space-2xl)" }}>Further Reading</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-2xl)" }}>
                                {related.map((r) => (
                                    <Link key={r.slug} href={`/cases/${r.slug}`} style={{ display: "block", textDecoration: "none", padding: "var(--space-2xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem", transition: "all .3s" }}
                                        onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--color-accent-primary)"; el.style.transform = "translateY(-4px)"; }}
                                        onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--color-border)"; el.style.transform = "translateY(0)"; }}
                                    >
                                        <div style={{ fontSize: ".75rem", color: "var(--color-accent-primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "var(--space-sm)" }}>{r.year} &middot; {r.category}</div>
                                        <h3 style={{ fontSize: "1rem", color: "var(--color-text-primary)", lineHeight: "1.4", marginBottom: "var(--space-md)" }}>{r.title}</h3>
                                        <p style={{ color: "var(--color-text-secondary)", fontSize: ".85rem", lineHeight: "1.6" }}>{r.summary.slice(0, 120)}...</p>
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

            <LexiFooter />
        </div>
    );
}
