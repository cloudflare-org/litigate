"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';
import siteData from '@/data/siteData.json';

const Footer = () => {
    const pathname = usePathname();
    if (pathname === '/') return null;
    const { company, contact, footer, nav } = siteData;

    return (
        <footer
            className="pt-20 pb-8 px-6"
            style={{
                background: 'var(--bg-tertiary)',
                borderTop: '1px solid var(--border)',
            }}
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand col */}
                    <div>
                        <div className="mb-6">
                            <div
                                className="font-display text-2xl tracking-tight"
                                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}
                            >
                                {company.nameShort}
                            </div>
                            <div
                                className="text-[0.6rem] tracking-[0.3em] uppercase mt-0.5"
                                style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                            >
                                {company.nameSub}
                            </div>
                        </div>
                        <p
                            className="text-sm leading-relaxed mb-6"
                            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                        >
                            {company.description}
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Linkedin, href: '#' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Facebook, href: '#' },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    style={{
                                        background: 'var(--surface-2)',
                                        border: '1px solid var(--border)',
                                        color: 'var(--text-secondary)',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)';
                                        (e.currentTarget as HTMLAnchorElement).style.color = '#050505';
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.background = 'var(--surface-2)';
                                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                                    }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4
                            className="text-sm font-semibold uppercase tracking-widest mb-6"
                            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {nav.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4
                            className="text-sm font-semibold uppercase tracking-widest mb-6"
                            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                        >
                            Practice Areas
                        </h4>
                        <ul className="space-y-3">
                            {footer.servicesLinks.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="text-sm font-semibold uppercase tracking-widest mb-6"
                            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                        >
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                                <span
                                    className="text-sm leading-relaxed"
                                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                >
                                    {contact.address.street}<br />
                                    {contact.address.city}, {contact.address.country}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                >
                                    {contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                >
                                    {contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                                <span
                                    className="text-sm leading-relaxed whitespace-pre-line"
                                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
                                >
                                    {contact.hours.footerDisplay}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderTop: '1px solid var(--border)' }}
                >
                    <p
                        className="text-sm"
                        style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-body)' }}
                    >
                        © {new Date().getFullYear()} {footer.copyright}
                    </p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                                style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-body)' }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
