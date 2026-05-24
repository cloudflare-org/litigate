"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import siteData from '@/data/siteData.json';

const TeamSection = () => {
    const { team } = siteData;

    return (
        <section className="py-32 px-6" style={{ background: 'var(--bg-tertiary)' }}>
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="label block mb-4">Our Team</span>
                    <h2
                        className="font-display mb-6"
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-display)',
                        }}
                    >
                        Leadership Team
                    </h2>
                    <p
                        className="mx-auto max-w-xl"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                    >
                        Partner-level counsel with distinguished careers at the world's premier legal institutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="group rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                            style={{
                                background: 'var(--surface-2)',
                                border: '1px solid var(--border)',
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(212,165,116,0.12)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                            }}
                        >
                            {/* Avatar area */}
                            <div
                                className="relative h-64 flex items-center justify-center overflow-hidden"
                                style={{ background: 'var(--surface-3)' }}
                            >
                                {/* Ambient orb */}
                                <div
                                    className="absolute top-[-20%] right-[-10%] w-48 h-48 rounded-full opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(212,165,116,0.5), transparent)',
                                    }}
                                />
                                {/* Initials */}
                                <div
                                    className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center text-2xl font-semibold transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        background: 'rgba(212,165,116,0.15)',
                                        border: '1px solid rgba(212,165,116,0.4)',
                                        color: 'var(--accent)',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>

                                {/* Hover overlay with contact links */}
                                <div
                                    className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9), transparent)' }}
                                >
                                    <div className="flex gap-4">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                                            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                        >
                                            <Mail size={15} />
                                            Email
                                        </a>
                                        <a
                                            href={`tel:${member.phone}`}
                                            className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                                            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                        >
                                            <Phone size={15} />
                                            Call
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3
                                    className="font-display mb-1"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-xs uppercase tracking-widest font-semibold mb-2"
                                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                                >
                                    {member.role}
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-body)' }}
                                >
                                    {member.specialty}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
