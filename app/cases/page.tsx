import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import { SITE_DATA } from "@/data/site";

const { cases } = SITE_DATA;

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

            <div className="disclaimer-bar">
                <div className="disclaimer-bar-inner">
                    <span className="page-disclaimer-icon">&#9432;</span>
                    <p className="page-disclaimer-copy">All case descriptions have been anonymised or published with explicit client consent. Many of our most significant matters cannot be disclosed under any circumstances. The cases shown here represent a fraction of our work and are selected solely to illustrate the breadth and complexity of our practice.</p>
                </div>
            </div>

            <section className="page-section">
                <div className="page-section-inner">
                    <div className="list-stack-2xl">
                        {cases.map((c) => (
                            <Link key={c.slug} href={`/cases/${c.slug}`} className="case-list-card">
                                <div className="case-list-header">
                                    <span className="case-list-year">{c.year}</span>
                                    <span className="case-list-dot">&#183;</span>
                                    <span className="case-list-category">{c.category}</span>
                                </div>
                                <h2 className="case-list-title">{c.title}</h2>
                                <p className="case-list-summary">{c.summary}</p>
                                <div className="case-list-footer">
                                    <div className="case-list-tags">
                                        {c.tags.map((t, i) => <span key={i} className="case-tag">{t}</span>)}
                                    </div>
                                    <span className="case-list-readmore">Read full case &#8594;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
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
