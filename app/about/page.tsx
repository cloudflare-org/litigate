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

            <div className="page-hero">
                <div className="page-hero-inner">
                    <span className="text-label">The Firm</span>
                    <h1>About Us</h1>
                    <p className="hero-sub">{about.heroSubtitle}</p>
                </div>
            </div>

            <section className="page-section">
                <div className="page-section-inner">
                    <div className="about-story-grid">
                        <div>
                            <span className="text-label text-label-block-lg">Our Story</span>
                            <h2 className="about-story-title">{about.storyTitle}</h2>
                            {about.storyParagraphs.map((p, i) => (
                                <p key={i} className="about-story-paragraph">{p}</p>
                            ))}
                            <div className="about-highlights-list">
                                {about.highlights.map((h, i) => (
                                    <div key={i} className="about-highlight-item">
                                        <div className="about-highlight-dot" />
                                        <span className="about-highlight-text">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-visual-sticky about-visual-frame">
                            <div className="about-visual-bg" />
                            <div className="about-visual-glow" />
                            <Image
                                src="/howard.webp"
                                alt="Howard Weitzman — Founding Partner"
                                fill
                                className="object-contain object-bottom z-[2]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            <div className="about-founder-badge">
                                <div className="about-founder-name">Howard Weitzman</div>
                                <div className="about-founder-role">Founding Partner · Est. 2013</div>
                            </div>
                            <div className="about-years-badge">
                                <div className="about-years-num">{company.yearsExperience}+</div>
                                <div className="about-years-label">Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-alt">
                <div className="page-section-inner">
                    <div className="about-discretion-grid">
                        <div>
                            <span className="text-label text-label-block-lg">Our Approach</span>
                            <h2 className="mb-[var(--space-xl)]">Discretion Is Not a Feature. It Is the Foundation.</h2>
                            <p className="prose-copy-lg-gap">We do not publish client lists. We do not issue press releases about our victories. We do not seek recognition from the legal press. Our reputation is built entirely on the trust of those we serve and the results we achieve on their behalf.</p>
                            <p className="prose-copy-lg-gap">Every engagement is governed by protocols that go beyond standard legal professional privilege. We operate on a strict need-to-know basis internally, and we never discuss one client&apos;s matter with another, regardless of the circumstances.</p>
                            <p className="prose-copy">This is not a marketing position. It is how we have operated since {company.foundedYear}, and it is why clients who require the highest level of confidentiality come to us.</p>
                        </div>

                        <div className="about-stats-grid">
                            {[
                                { num: "60+", label: "Countries Served" },
                                { num: "$3.2B+", label: "Assets Recovered" },
                                { num: "100%", label: "Partner-Led Matters" },
                                { num: "0", label: "Public Disclosures" },
                            ].map((s, i) => (
                                <div key={i} className="about-stat-card">
                                    <div className="about-stat-num">{s.num}</div>
                                    <div className="about-stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="page-section-inner">
                    <div className="values-intro">
                        <span className="text-label text-label-block-md">What We Stand For</span>
                        <h2>Our Values</h2>
                    </div>
                    <div className="about-values-grid">
                        {about.values.map((v, i) => (
                            <div key={i} className="value-card">
                                <div className="value-icon-wrap">{(() => {
                                    const Icon = valueIcons[i];
                                    return <Icon size={28} color="var(--color-accent-primary)" />;
                                })()}</div>
                                <h3 className="value-title">{v.title}</h3>
                                <p className="value-desc">{v.desc}</p>
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
