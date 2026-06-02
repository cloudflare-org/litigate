import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import { SITE_BRAND, SITE_DATA } from "@/data/site";

const { blog } = SITE_DATA;

export default function BlogPage() {
    return (
        <div className="content">
            <LexiNav />
            <div className="page-hero">
                <div className="page-hero-inner">
                    <span className="text-label">Insights</span>
                    <h1>Analysis and Commentary</h1>
                    <p className="hero-sub">Analysis and commentary from the partners of {SITE_BRAND.appName} on the legal issues that matter most to our clients.</p>
                </div>
            </div>

            <div className="disclaimer-bar">
                <div className="disclaimer-bar-inner">
                    <span className="page-disclaimer-icon">&#9432;</span>
                    <p className="page-disclaimer-copy">Our insights are written by our partners and reflect their personal analysis of legal developments. They do not constitute legal advice and should not be relied upon as such. If you have a specific legal matter, please contact us directly.</p>
                </div>
            </div>

            <section className="page-section">
                <div className="page-section-inner">
                    <div className="blog-listing-grid">
                        {blog.map((a) => (
                            <Link key={a.slug} href={`/blog/${a.slug}`} className="blog-list-card">
                                <div className="blog-card-media">
                                    {a.image
                                        ? <img src={a.image} alt={a.title} />
                                        : <div className="blog-card-media-placeholder" />
                                    }
                                </div>
                                <div className="blog-card-body">
                                    <div className="blog-card-category">{a.category}</div>
                                    <h3 className="blog-card-title">{a.title}</h3>
                                    <p className="blog-card-excerpt">{a.excerpt}</p>
                                    <div className="blog-card-footer">
                                        <span className="blog-card-meta">{a.date} &middot; {a.readTime} read</span>
                                        <span className="blog-card-readmore">Read &#8594;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <LexiFooter />
        </div>
    );
}
