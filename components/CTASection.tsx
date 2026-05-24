"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import siteData from '@/data/siteData.json';

const CTASection = () => {
    const { company, contact } = siteData;

    return (
        <section className="py-16 px-6" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    className="relative rounded-2xl overflow-hidden px-12 py-20 text-center"
                    style={{
                        background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Ambient overlays */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(800px at 20% 50%, rgba(255,255,255,0.1), transparent 50%), radial-gradient(600px at 80% 50%, rgba(255,255,255,0.05), transparent 50%)',
                        }}
                    />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2
                            className="font-display mb-5"
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                color: '#050505',
                                fontFamily: 'var(--font-display)',
                            }}
                        >
                            Ready to Protect Your Interests?
                        </h2>
                        <p
                            className="mb-10 leading-relaxed"
                            style={{
                                color: 'rgba(5,5,5,0.75)',
                                fontFamily: 'var(--font-body)',
                                fontSize: '1.1rem',
                            }}
                        >
                            Contact our team for a confidential discussion about your legal needs. We provide candid, strategic counsel to clients worldwide.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact">
                                <button
                                    className="flex items-center gap-2 px-10 py-4 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-1 group"
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        color: '#050505',
                                        border: '1px solid rgba(5,5,5,0.2)',
                                        fontFamily: 'var(--font-body)',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                                >
                                    Schedule Consultation
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <a href={`tel:${contact.phone}`}>
                                <button
                                    className="px-10 py-4 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        background: '#050505',
                                        color: 'var(--accent)',
                                        border: '1px solid rgba(5,5,5,0.3)',
                                        fontFamily: 'var(--font-body)',
                                    }}
                                >
                                    Call Us Now
                                </button>
                            </a>
                        </div>

                        {/* Stats row */}
                        <div
                            className="grid grid-cols-3 gap-8 mt-16 pt-10"
                            style={{ borderTop: '1px solid rgba(5,5,5,0.15)' }}
                        >
                            {[
                                { value: company.casesWon, label: 'Cases Won' },
                                { value: `${company.yearsExperience}+`, label: 'Years Experience' },
                                { value: company.successRate, label: 'Client Satisfaction' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div
                                        className="font-display"
                                        style={{
                                            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                                            color: '#050505',
                                            fontFamily: 'var(--font-display)',
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        className="text-xs uppercase tracking-widest mt-1"
                                        style={{ color: 'rgba(5,5,5,0.6)', fontFamily: 'var(--font-body)' }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
