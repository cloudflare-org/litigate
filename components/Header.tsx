"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import siteData from '@/data/siteData.json';

const Header = () => {
    const pathname = usePathname();
    if (pathname === '/') return null;
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { company, nav } = siteData;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                background: scrolled ? 'rgba(5,5,5,0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                padding: scrolled ? '0.75rem 3rem' : '1.5rem 3rem',
            }}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col leading-none group">
                    <span
                        className="font-display text-2xl tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]"
                        style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                    >
                        {company.nameShort}
                    </span>
                    <span
                        className="text-[0.6rem] tracking-[0.3em] uppercase mt-0.5"
                        style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                    >
                        {company.nameSub}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {nav.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-sm font-medium transition-colors duration-300 group"
                                style={{
                                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                                    fontFamily: 'var(--font-body)',
                                }}
                            >
                                {link.name}
                                <span
                                    className="absolute -bottom-1.5 left-0 h-px transition-all duration-400"
                                    style={{
                                        width: isActive ? '100%' : '0%',
                                        background: 'var(--accent)',
                                    }}
                                />
                            </Link>
                        );
                    })}
                    <Link href="/contact">
                        <button
                            className="px-5 py-2.5 rounded text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                background: 'var(--accent)',
                                color: '#050505',
                                fontFamily: 'var(--font-body)',
                                boxShadow: '0 8px 20px rgba(212,165,116,0.2)',
                            }}
                        >
                            Free Consultation
                        </button>
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-px transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--text-primary)' }} />
                    <span className={`block w-6 h-px transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
                    <span className={`block w-6 h-px transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--text-primary)' }} />
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div
                    className="lg:hidden mt-4 pb-6 border-t"
                    style={{ borderColor: 'var(--border)', background: 'rgba(5,5,5,0.95)' }}
                >
                    <div className="max-w-[1400px] mx-auto px-6 pt-4 flex flex-col gap-4">
                        {nav.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium py-2 transition-colors duration-300"
                                style={{
                                    color: pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)',
                                    fontFamily: 'var(--font-body)',
                                }}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setMobileOpen(false)}>
                            <button
                                className="w-full py-3 rounded text-sm font-semibold mt-2"
                                style={{ background: 'var(--accent)', color: '#050505', fontFamily: 'var(--font-body)' }}
                            >
                                Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
