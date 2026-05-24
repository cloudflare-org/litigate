"use client";

import React from 'react';
import Link from 'next/link';
import siteData from '@/data/siteData.json';

const AboutSection = () => {
    const { company, about } = siteData;

    return (
        <section style={{ padding: '8rem 3rem', background: 'var(--color-bg-tertiary)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                <div style={{ position: 'relative', height: '480px', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: '1rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,2rem)', color: 'var(--color-text-secondary)', textAlign: 'center', padding: '3rem', fontStyle: 'italic', lineHeight: 1.4 }}>
                        "The most consequential legal work is never discussed in public."
                    </p>
                    <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: 'var(--color-accent-primary)', padding: '1.5rem', borderRadius: '.75rem', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: '#050505', lineHeight: 1 }}>{company.yearsExperience}+</div>
                        <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.15em', color: 'rgba(5,5,5,.7)', fontWeight: 600, marginTop: '.25rem' }}>Years</div>
                    </div>
                </div>
                <div>
                    <span style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.15em', fontWeight: 600, color: 'var(--color-accent-primary)', display: 'block', marginBottom: '1.5rem' }}>
                        About the Firm
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--color-text-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        {about.storyTitle}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        {about.storyParagraphs[0]}
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
                        {about.storyParagraphs[1]}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2.5rem' }}>
                        {about.highlights.map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'var(--color-accent-primary)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>
                                <span style={{ color: 'var(--color-text-secondary)', fontSize: '.95rem' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/about" style={{ display: 'inline-block', padding: '1rem 2rem', background: 'var(--color-accent-primary)', color: '#050505', borderRadius: '.5rem', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none' }}>
                        Learn About the Firm
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
