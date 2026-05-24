"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, Home, Briefcase, FileText, Gavel } from 'lucide-react';
import Link from 'next/link';
import siteData from '@/data/siteData.json';

const iconMap: Record<string, React.ElementType> = {
    criminal: Gavel,
    family: Users,
    property: Home,
    employment: Briefcase,
    litigation: FileText,
    business: Scale,
};

const ServicesSection = () => {
    const { services } = siteData;

    return (
        <section className="py-32 px-6" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="label block mb-4">Our Practice Areas</span>
                    <h2
                        className="font-display mb-6"
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-display)',
                        }}
                    >
                        Areas of Expertise
                    </h2>
                    <p
                        className="mx-auto max-w-xl"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                    >
                        Specialised prowess in the most demanding and complex areas of law, delivered with precision and strategic depth.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.id] ?? Scale;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                            >
                                <Link href={`/services#${service.id}`}>
                                    <div
                                        className="group relative p-8 rounded-xl flex flex-col gap-5 cursor-pointer transition-all duration-500 hover:-translate-y-2"
                                        style={{
                                            background: 'var(--surface-2)',
                                            border: '1px solid var(--border)',
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)';
                                            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(212,165,116,0.12)';
                                            (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-3)';
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                                            (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                            (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-2)';
                                        }}
                                    >
                                        {/* Icon */}
                                        <div
                                            className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                            style={{
                                                background: 'rgba(212,165,116,0.12)',
                                                border: '1px solid rgba(212,165,116,0.3)',
                                            }}
                                        >
                                            <Icon size={26} style={{ color: 'var(--accent)' }} />
                                        </div>

                                        <h3
                                            className="font-display transition-colors duration-300 group-hover:text-[var(--accent)]"
                                            style={{
                                                fontSize: '1.25rem',
                                                color: 'var(--text-primary)',
                                                fontFamily: 'var(--font-display)',
                                            }}
                                        >
                                            {service.title}
                                        </h3>

                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                        >
                                            {service.description}
                                        </p>

                                        <span
                                            className="text-sm font-semibold mt-auto transition-colors duration-300 group-hover:underline"
                                            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                                        >
                                            Learn More →
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="text-center mt-14"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link href="/services">
                        <button
                            className="px-10 py-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: 'var(--accent)',
                                color: '#050505',
                                fontFamily: 'var(--font-body)',
                                boxShadow: '0 10px 25px rgba(212,165,116,0.2)',
                            }}
                        >
                            View All Services
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
