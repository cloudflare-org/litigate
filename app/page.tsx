import Link from "next/link";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import HeroSlider from "@/components/HeroSlider";
import CardCarousel from "@/components/CardCarousel";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SITE_BRAND, SITE_DATA } from "@/data/site";

const { services, cases, blog } = SITE_DATA;

export default function Home() {
    return (
        <div className="content">
            <LexiNav />

            {/* ── HERO — lawyer bg + scrolling cases/insights ticker ── */}
            <HeroSlider />

            {/* ── FIRM TEASER ── */}
            <section className="teaser">
                <div className="teaser-inner">
                    <div className="teaser-grid">
                        <div className="teaser-text">
                            <span className="text-label">The Firm</span>
                            <h2>We Do Not Seek Publicity. We Seek Results.</h2>
                            <p>{SITE_BRAND.appName} operates at the highest level of legal practice. Our clients are referred to us. Our work is never discussed in public. Our results speak through the outcomes we achieve, not the press releases we issue.</p>
                            <Link href="/about" className="btn">Learn About the Firm</Link>
                        </div>
                        <div className="teaser-visual">
                            <p className="teaser-visual-text">
                                &ldquo;The most consequential legal work is never discussed in public.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="teaser teaser-alt">
                <div className="teaser-inner">
                    <div className="section-heading-center">
                        <span className="text-label">Services</span>
                        <h2>What We Do</h2>
                        <p className="section-heading-copy">
                            Seven services. Each handled with the discretion and precision complex matters require.
                        </p>
                    </div>
                    <div className="services-teaser-grid">
                        {services.map((s) => (
                            <Link href={`/services#${s.id}`} className="service-teaser-card" key={s.id}>
                                <div className="service-teaser-icon"><ServiceIcon id={s.id} size={24} /></div>
                                <div className="service-teaser-title">{s.title}</div>
                                <div className="service-teaser-desc">{s.description}</div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-[var(--space-3xl)]">
                        <Link href="/services" className="btn">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* ── CASES CAROUSEL ── */}
            <section className="teaser">
                <div className="teaser-inner">
                    <div className="section-heading-row">
                        <div>
                            <span className="text-label">Landmark Outcomes</span>
                            <h2>Selected Cases</h2>
                        </div>
                        <Link href="/cases" className="btn btn-sm">View All Cases</Link>
                    </div>
                    <CardCarousel perView={3}>
                        {cases.map((c) => (
                            <Link href={`/cases/${c.slug}`} className="case-list-card case-card-compact" key={c.slug}>
                                <div className="case-card-compact-meta">
                                    {c.year} · {c.category}
                                </div>
                                <div className="case-card-compact-title">
                                    {c.title}
                                </div>
                                <div className="case-card-compact-tags">
                                    {c.tags.map((t, i) => <span className="case-tag" key={i}>{t}</span>)}
                                </div>
                                <span className="case-card-compact-action">View case <span aria-hidden="true">→</span></span>
                            </Link>
                        ))}
                    </CardCarousel>
                </div>
            </section>

            {/* ── BLOG CAROUSEL ── */}
            <section className="teaser teaser-alt">
                <div className="teaser-inner">
                    <div className="section-heading-row">
                        <div>
                            <span className="text-label">Insights</span>
                            <h2>Latest Analysis</h2>
                        </div>
                        <Link href="/blog" className="btn btn-sm">All Insights</Link>
                    </div>
                    <CardCarousel perView={3}>
                        {blog.map((a) => (
                            <Link href={`/blog/${a.slug}`} className="blog-teaser-card" key={a.slug}>
                                <div className="blog-teaser-img">
                                    {a.image
                                        ? <img src={a.image} alt={a.title} />
                                        : <div className="blog-teaser-img-placeholder" />
                                    }
                                </div>
                                <div className="blog-teaser-body">
                                    <div className="blog-teaser-cat">{a.category}</div>
                                    <div className="blog-teaser-title">{a.title}</div>
                                    <div className="blog-teaser-meta">{a.date} · {a.readTime} read</div>
                                </div>
                            </Link>
                        ))}
                    </CardCarousel>
                </div>
            </section>

            {/* ── CTA ── */}
            <div className="cta-strip">
                <div className="cta-strip-inner">
                    <div className="cta-strip-content">
                        <h2>Ready to Discuss Your Matter?</h2>
                        <p>All enquiries are treated with absolute confidentiality. We respond to retained clients within the hour and to new enquiries within 24 hours.</p>
                        <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
                    </div>
                </div>
            </div>

            <LexiFooter />
        </div>
    );
}
