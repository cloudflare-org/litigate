"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import siteData from '@/data/siteData.json';

const iconMap: Record<string, React.ElementType> = {
    'Available 24/7': Clock,
    'Proven Track Record': Award,
    'Client-Focused': Users,
    'Confidential Service': Shield,
};

const WhyChooseUs = () => {
    const { whyChooseUs, contact } = siteData;

    return (
        <section className="py-32 px-6" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* Left — text + benefits */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="label block mb-5">Why Choose Us</span>
                    <h2
                        className="font-display mb-6 leading-tight"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-display)',
                        }}
                    >
                        Your Trusted<br />
                        <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Global Partner</em>
                    </h2>
                    <p
                        className="mb-10 leading-relaxed"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                    >
                        We combine institutional excellence with boutique agility. Our counsel is rooted in meticulous preparation, deep sectoral knowledge, and an uncompromising commitment to client outcomes.
                    </p>

                    <div className="space-y-4">
                        {whyChooseUs.features.map((feature, index) => {
                            const Icon = iconMap[feature.title] ?? Shield;
                            return (
                                <motion.div
                                    key={index}
                                    className="flex gap-5 items-start p-5 rounded-xl transition-all duration-400 cursor-default group"
                                    style={{
                                        background: 'var(--surface-1)',
                                        border: '1px solid var(--border)',
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)';
                                        (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-2)';
                                        (e.currentTarget as HTMLDivElement).style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                                        (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-1)';
                                        (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)';
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{ background: 'var(--accent)' }}
                                    >
                                        <Icon size={18} style={{ color: '#050505' }} />
                                    </div>
                                    <div>
                                        <h4
                                            className="font-semibold mb-1"
                                            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
                                        >
                                            {feature.title}
                                        </h4>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-body)' }}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Right — CTA card */}
                <motion.div
                    className="relative rounded-2xl overflow-hidden p-12 text-center"
                    style={{
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                    }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Orb */}
                    <div
                        className="absolute top-[-10%] right-[-5%] w-72 h-72 rounded-full opacity-25 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(212,165,116,0.4), transparent)',
                            animation: 'floatOrb 15s ease-in-out infinite',
                        }}
                    />
                    <div className="relative z-10">
                        <h3
                            className="font-display mb-4"
                            style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-display)',
                            }}
                        >
                            Need Legal Advice?
                        </h3>
                        <p
                            className="mb-8 leading-relaxed"
                            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                        >
                            Contact us today for a free initial consultation. Our experienced solicitors are ready to help you navigate your legal challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={`tel:${contact.phone}`}>
                                <button
                                    className="px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                                    style={{
                                        background: 'var(--accent)',
                                        color: '#050505',
                                        fontFamily: 'var(--font-body)',
                                        boxShadow: '0 10px 25px rgba(212,165,116,0.2)',
                                    }}
                                >
                                    Call Now
                                </button>
                            </a>
                            <Link href="/contact">
                                <button
                                    className="px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] w-full sm:w-auto"
                                    style={{
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border)',
                                        fontFamily: 'var(--font-body)',
                                    }}
                                >
                                    Book Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
