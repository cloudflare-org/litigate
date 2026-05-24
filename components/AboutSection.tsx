"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import siteData from '@/data/siteData.json';

const AboutSection = () => {
    const { company, about } = siteData;

    return (
        <section className="py-32 px-6" style={{ background: 'var(--bg-tertiary)' }}>
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* Left — visual block */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="relative rounded-2xl overflow-hidden"
                        style={{
                            background: 'var(--surface-2)',
                            border: '1px solid var(--border)',
                            height: '480px',
                        }}
                    >
                        {/* Decorative orb inside */}
                        <div
                            className="absolute top-[-10%] right-[-5%] w-80 h-80 rounded-full opacity-30 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(212,165,116,0.35), transparent)',
                                animation: 'floatOrb 15s ease-in-out infinite',
                            }}
                        />
                        <div
                            className="absolute bottom-[-5%] left-[-10%] w-64 h-64 rounded-full opacity-20 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(212,165,116,0.25), transparent)',
                                animation: 'floatOrb 15s ease-in-out infinite',
                                animationDelay: '-8s',
                            }}
                        />

                        {/* Years badge */}
                        <div
                            className="absolute bottom-8 right-8 p-8 rounded-xl z-10"
                            style={{ background: 'var(--accent)' }}
                        >
                            <div
                                className="font-display leading-none"
                                style={{ fontSize: '3.5rem', color: '#050505', fontFamily: 'var(--font-display)' }}
                            >
                                {company.yearsExperience}+
                            </div>
                            <div
                                className="text-xs uppercase tracking-widest mt-1 font-semibold"
                                style={{ color: 'rgba(5,5,5,0.7)', fontFamily: 'var(--font-body)' }}
                            >
                                Years Experience
                            </div>
                        </div>

                        {/* Centre text */}
                        <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
                            <p
                                className="font-display text-center leading-snug"
                                style={{
                                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                                    color: 'var(--text-secondary)',
                                    fontFamily: 'var(--font-display)',
                                    fontStyle: 'italic',
                                }}
                            >
                                "Elite legal counsel with a global reach."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right — text */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="label block mb-5">{about.aboutSectionLabel}</span>

                    <h2
                        className="font-display mb-6 leading-tight"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-display)',
                        }}
                    >
                        {about.aboutSectionTitle}
                    </h2>

                    {about.aboutSectionParagraphs.map((para, i) => (
                        <p
                            key={i}
                            className="mb-5 leading-relaxed"
                            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                        >
                            {para}
                        </p>
                    ))}

                    <div className="mt-8 space-y-3 mb-10">
                        {about.highlights.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                                <span
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                >
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Link href="/about">
                        <button
                            className="px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: 'var(--accent)',
                                color: '#050505',
                                fontFamily: 'var(--font-body)',
                                boxShadow: '0 10px 25px rgba(212,165,116,0.2)',
                            }}
                        >
                            Learn More About Us
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
