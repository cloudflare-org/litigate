"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import siteData from '@/data/siteData.json';

const Hero = () => {
    const { company, contact } = siteData;

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'var(--bg-primary)' }}
        >
            {/* Ambient orbs */}
            <div
                className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(circle, rgba(212,165,116,0.2), transparent)',
                    animation: 'floatOrb 20s ease-in-out infinite',
                }}
            />
            <div
                className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
                style={{
                    background: 'radial-gradient(circle, rgba(212,165,116,0.15), transparent)',
                    animation: 'floatOrb 20s ease-in-out infinite',
                    animationDelay: '-10s',
                }}
            />

            {/* Thin horizontal rule accent */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center pt-32 pb-24">
                <motion.span
                    className="label inline-block mb-8 tracking-[0.2em]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {company.heroSubtitle}
                </motion.span>

                <motion.h1
                    className="text-gradient font-display mb-8 leading-[1.1]"
                    style={{
                        fontSize: 'clamp(2.8rem, 8vw, 6rem)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        letterSpacing: '-0.03em',
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                >
                    Justice Without
                    <br />
                    <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Borders.</em>
                </motion.h1>

                <motion.p
                    className="mx-auto mb-12 leading-relaxed"
                    style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '640px',
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                >
                    {company.heroBody}
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <Link href="/contact">
                        <button
                            className="px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: 'var(--accent)',
                                color: '#050505',
                                fontFamily: 'var(--font-body)',
                                boxShadow: '0 12px 30px rgba(212,165,116,0.25)',
                            }}
                        >
                            Schedule Consultation
                        </button>
                    </Link>
                    <Link href="/services">
                        <button
                            className="px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            style={{
                                background: 'transparent',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border)',
                                fontFamily: 'var(--font-body)',
                            }}
                        >
                            Explore Expertise
                        </button>
                    </Link>
                </motion.div>

                {/* Stats strip */}
                <motion.div
                    className="mt-24 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8"
                    style={{ borderTop: '1px solid var(--border)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    {[
                        { value: company.casesWon, label: 'Cases Won' },
                        { value: `${company.yearsExperience}+`, label: 'Years Experience' },
                        { value: company.successRate, label: 'Success Rate' },
                        { value: '85+', label: 'Jurisdictions' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div
                                className="font-display mb-1"
                                style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                                    color: 'var(--accent)',
                                    fontFamily: 'var(--font-display)',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-xs uppercase tracking-widest"
                                style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-body)' }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-primary))' }}
            />
        </section>
    );
};

export default Hero;
