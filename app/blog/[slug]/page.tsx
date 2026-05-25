"use client";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import { useParams } from "next/navigation";
import siteData from "@/data/siteData.json";

export const runtime = "edge";
const { blog } = siteData;

export default function BlogSinglePage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = blog.find((b) => b.slug === slug);
    const others = blog.filter((b) => b.slug !== slug);

    return (
        <div className="content">
            <LexiNav />

            {!post ? (
                <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "var(--space-xl)", padding: "120px var(--space-lg) var(--space-3xl)" }}>
                    <h2 style={{ color: "var(--color-text-secondary)" }}>Article not found</h2>
                    <Link href="/blog" className="btn">Back to Insights</Link>
                </div>
            ) : (
                <>
                    <div className="page-hero">
                        <div className="page-hero-inner">
                            <span className="text-label">{post.category}</span>
                            <h1>{post.title}</h1>
                            <p className="hero-sub">{post.date} &middot; {post.readTime} read</p>
                        </div>
                    </div>

                    {/* Hero image */}
                    {post.image && (
                        <div className="blog-hero-image" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 var(--space-3xl)" }}>
                            <div style={{ height: "480px", borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--color-border)" }}>
                                <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                            </div>
                        </div>
                    )}

                    {/* Article body */}
                    <section className="page-section">
                        <div className="page-section-inner">
                            <div className="article-layout">
                                <article>
                                    <div style={{ padding: "var(--space-2xl)", background: "rgba(132,204,22,.06)", border: "1px solid rgba(132,204,22,.15)", borderRadius: ".75rem", marginBottom: "var(--space-3xl)" }}>
                                        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.05rem", lineHeight: "1.8", fontStyle: "italic" }}>{post.excerpt}</p>
                                    </div>
                                    <div style={{ color: "var(--color-text-secondary)", lineHeight: "2", fontSize: "1.05rem" }}>
                                        {post.content.split("\n\n").map((para, i) => (
                                            <p key={i} style={{ marginBottom: "var(--space-xl)" }}>{para}</p>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: "var(--space-3xl)", paddingTop: "var(--space-2xl)", borderTop: "1px solid var(--color-border)" }}>
                                        <p style={{ color: "var(--color-text-tertiary)", fontSize: ".8rem", lineHeight: "1.6" }}>This article represents the personal analysis of the author and does not constitute legal advice. It should not be relied upon as a substitute for specific legal counsel on your particular circumstances. If you have a legal matter you wish to discuss, please contact us directly.</p>
                                    </div>
                                </article>

                                {/* Sidebar */}
                                <aside style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
                                    <div style={{ padding: "var(--space-2xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem" }}>
                                        <h4 style={{ fontFamily: "var(--font-body)", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".15em", fontWeight: 600, color: "var(--color-accent-primary)", marginBottom: "var(--space-xl)" }}>Article Details</h4>
                                        {[{ label: "Category", value: post.category }, { label: "Published", value: post.date }, { label: "Reading Time", value: post.readTime }].map((d, i) => (
                                            <div key={i} style={{ marginBottom: "var(--space-lg)" }}>
                                                <div style={{ fontSize: ".75rem", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: ".25rem" }}>{d.label}</div>
                                                <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-text-primary)" }}>{d.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contact" className="btn btn-primary" style={{ textAlign: "center", width: "100%" }}>Discuss This Topic</Link>
                                    <Link href="/blog" className="btn" style={{ textAlign: "center", width: "100%" }}>All Insights</Link>
                                </aside>
                            </div>
                        </div>
                    </section>

                    {/* More insights */}
                    <section className="page-section-alt">
                        <div className="page-section-inner">
                            <span className="text-label" style={{ display: "block", marginBottom: "var(--space-lg)" }}>More Insights</span>
                            <h2 style={{ marginBottom: "var(--space-2xl)" }}>Further Reading</h2>
                            <div className="related-grid">
                                {others.map((a) => (
                                    <Link key={a.slug} href={`/blog/${a.slug}`} className="related-card" style={{ textDecoration: "none", overflow: "hidden", padding: 0 }}>
                                        <div style={{ height: "160px", background: "var(--color-surface-3)", overflow: "hidden" }}>
                                            {a.image ? <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,var(--color-surface-3),var(--color-surface-1))" }} />}
                                        </div>
                                        <div style={{ padding: "var(--space-xl)" }}>
                                            <div style={{ fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".12em", color: "var(--color-accent-primary)", fontWeight: 600, marginBottom: "var(--space-sm)" }}>{a.category}</div>
                                            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-text-primary)", lineHeight: "1.4", marginBottom: "var(--space-sm)" }}>{a.title}</h3>
                                            <div style={{ fontSize: ".75rem", color: "var(--color-text-tertiary)" }}>{a.date} &middot; {a.readTime} read</div>
                                        </div>
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
                        <h2>Have a Question About This Topic?</h2>
                        <p>Our partners are available to discuss how these legal developments may affect your specific situation. All conversations are strictly confidential.</p>
                        <Link href="/contact" className="btn">Speak to a Partner</Link>
                    </div>
                </div>
            </div>
            <LexiFooter />
        </div>
    );
}
