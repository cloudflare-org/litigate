"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";

const { company, contact, footer, nav } = siteData;

/* ─── NAV ─────────────────────────────────────────────────── */
export function LexiNav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <style>{`
                /* ── NAV SHELL ── */
                .lexi-nav {
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 1000;
                    padding: 0 clamp(1.5rem, 4vw, 4rem);
                    height: 72px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: background .35s ease, box-shadow .35s ease, height .35s ease;
                }
                .lexi-nav.scrolled {
                    height: 64px;
                    background: rgba(20, 27, 39, .95);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    box-shadow: 0 1px 0 rgba(182, 157, 116, .12);
                }

                /* ── LOGO ── */
                .lexi-logo {
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    text-decoration: none;
                    flex-shrink: 0;
                }
                .lexi-logo-img {
                    height: 70px;
                    width: auto;
                    display: block;
                    transition: opacity .3s;
                    object-fit: contain;
                }
                .lexi-logo:hover .lexi-logo-img { opacity: .85; }

                /* ── DESKTOP MENU ── */
                .lexi-nav-links {
                    display: flex;
                    align-items: center;
                    gap: .25rem;
                    list-style: none;
                }
                .lexi-nav-links a {
                    display: block;
                    padding: .5rem .75rem;
                    color: var(--color-text-secondary);
                    text-decoration: none;
                    font-size: .82rem;
                    font-weight: 500;
                    letter-spacing: .02em;
                    border-radius: .375rem;
                    transition: color .25s, background .25s;
                    position: relative;
                    white-space: nowrap;
                }
                .lexi-nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: 4px;
                    left: .75rem;
                    right: .75rem;
                    height: 1.5px;
                    background: var(--color-accent-primary);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform .3s ease;
                    border-radius: 1px;
                }
                .lexi-nav-links a:hover,
                .lexi-nav-links a.active-link {
                    color: var(--color-text-primary);
                    background: rgba(182, 157, 116, .07);
                }
                .lexi-nav-links a:hover::after,
                .lexi-nav-links a.active-link::after { transform: scaleX(1); }

                /* ── CTA BUTTON ── */
                .lexi-nav-cta {
                    margin-left: .75rem;
                    padding: .5rem 1.25rem;
                    background: var(--color-accent-primary);
                    color: #ffffff;
                    border: 2px solid var(--color-accent-primary);
                    border-radius: .375rem;
                    font-family: var(--font-body);
                    font-size: .78rem;
                    font-weight: 700;
                    letter-spacing: .06em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: background .25s, transform .2s, box-shadow .25s, color .25s;
                    white-space: nowrap;
                    text-decoration: none;
                    display: inline-block;
                }
                .lexi-nav-cta:hover {
                    background: transparent;
                    border-color: var(--color-accent-primary);
                    color: var(--color-accent-primary);
                    transform: translateY(-1px);
                }

                /* ── HAMBURGER ── */
                .lexi-hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                    width: 40px;
                    height: 40px;
                    background: transparent;
                    border: 1px solid rgba(182, 157, 116, .3);
                    border-radius: .375rem;
                    cursor: pointer;
                    padding: 0;
                    flex-shrink: 0;
                    transition: border-color .25s;
                }
                .lexi-hamburger:hover { border-color: var(--color-accent-primary); }
                .lexi-hamburger span {
                    display: block;
                    width: 18px;
                    height: 1.5px;
                    background: var(--color-accent-primary);
                    border-radius: 2px;
                    transition: all .3s ease;
                    transform-origin: center;
                }
                .lexi-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
                .lexi-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .lexi-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

                /* ── MOBILE DRAWER ── */
                .lexi-drawer-overlay {
                    display: none;
                    position: fixed;
                    inset: 0;
                    z-index: 998;
                    background: rgba(10, 14, 22, .6);
                    backdrop-filter: blur(4px);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity .3s ease;
                }
                .lexi-drawer-overlay.open { opacity: 1; pointer-events: auto; }

                .lexi-drawer {
                    display: none;
                    position: fixed;
                    top: 0; right: 0; bottom: 0;
                    z-index: 999;
                    width: min(320px, 85vw);
                    background: #1a2235;
                    border-left: 1px solid rgba(182, 157, 116, .12);
                    transform: translateX(100%);
                    transition: transform .35s cubic-bezier(.4, 0, .2, 1);
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    pointer-events: none;
                }
                .lexi-drawer.open { transform: translateX(0); pointer-events: auto; }

                .lexi-drawer-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.25rem 1.5rem;
                    border-bottom: 1px solid rgba(182, 157, 116, .1);
                    height: 72px;
                    flex-shrink: 0;
                }
                .lexi-drawer-close {
                    width: 36px;
                    height: 36px;
                    background: rgba(182, 157, 116, .08);
                    border: 1px solid rgba(182, 157, 116, .2);
                    border-radius: .375rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-accent-primary);
                    font-size: 1.1rem;
                    transition: background .2s;
                    line-height: 1;
                }
                .lexi-drawer-close:hover { background: rgba(182, 157, 116, .15); }

                .lexi-drawer-nav {
                    flex: 1;
                    padding: 1rem 0;
                }
                .lexi-drawer-nav ul { list-style: none; }
                .lexi-drawer-nav ul li a {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: .875rem 1.5rem;
                    color: var(--color-text-secondary);
                    text-decoration: none;
                    font-size: .95rem;
                    font-weight: 500;
                    border-bottom: 1px solid rgba(255, 255, 255, .04);
                    transition: color .2s, background .2s, padding-left .2s;
                }
                .lexi-drawer-nav ul li a:hover,
                .lexi-drawer-nav ul li a.active-link {
                    color: var(--color-accent-primary);
                    background: rgba(182, 157, 116, .05);
                    padding-left: 1.875rem;
                }
                .lexi-drawer-nav ul li a .drawer-arrow {
                    font-size: .7rem;
                    opacity: .4;
                    transition: opacity .2s, transform .2s;
                }
                .lexi-drawer-nav ul li a:hover .drawer-arrow,
                .lexi-drawer-nav ul li a.active-link .drawer-arrow {
                    opacity: 1;
                    transform: translateX(3px);
                    color: var(--color-accent-primary);
                }

                .lexi-drawer-footer {
                    padding: 1.5rem;
                    border-top: 1px solid rgba(182, 157, 116, .1);
                    flex-shrink: 0;
                }
                .lexi-drawer-footer a {
                    display: block;
                    text-align: center;
                    padding: .875rem 1.5rem;
                    background: var(--color-accent-primary);
                    color: #141b27;
                    border-radius: .5rem;
                    font-weight: 700;
                    font-size: .85rem;
                    text-decoration: none;
                    letter-spacing: .05em;
                    text-transform: uppercase;
                    transition: background .2s;
                }
                .lexi-drawer-footer a:hover { background: var(--color-accent-secondary); }

                @media (max-width: 900px) {
                    .lexi-nav-links { display: none; }
                    .lexi-hamburger { display: flex; }
                    .lexi-drawer-overlay { display: block; }
                    .lexi-drawer { display: flex; }
                }
            `}</style>

            {/* NAV BAR */}
            <nav className={`lexi-nav${scrolled ? " scrolled" : ""}`}>
                <Link href="/" className="lexi-logo">
                    <Image src="/lexfirm-logo.png" alt={company.name} className="lexi-logo-img" width={256} height={70} style={{ height: "70px", width: "auto" }} priority />
                </Link>

                <ul className="lexi-nav-links">
                    {nav.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className={pathname === l.href ? "active-link" : ""}>{l.name}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/contact" className="lexi-nav-cta">Enquire</Link>
                    </li>
                </ul>

                <button
                    className={`lexi-hamburger${menuOpen ? " open" : ""}`}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span /><span /><span />
                </button>
            </nav>

            {/* OVERLAY */}
            <div
                className={`lexi-drawer-overlay${menuOpen ? " open" : ""}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />

            {/* DRAWER */}
            <aside className={`lexi-drawer${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
                <div className="lexi-drawer-header">
                    <Link href="/" className="lexi-logo" onClick={() => setMenuOpen(false)}>
                        <Image src="/lexfirm-logo.png" alt={company.name} className="lexi-logo-img" width={208} height={58} style={{ height: "58px", width: "auto" }} />
                    </Link>
                    <button className="lexi-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
                </div>

                <nav className="lexi-drawer-nav">
                    <ul>
                        {nav.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className={pathname === l.href ? "active-link" : ""}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {l.name}
                                    <span className="drawer-arrow">›</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="lexi-drawer-footer">
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>Make an Enquiry</Link>
                </div>
            </aside>
        </>
    );
}

/* ─── FOOTER ──────────────────────────────────────────────── */
export function LexiFooter() {
    return (
        <footer className="lexi-footer">
            <div className="footer-grid">
                <div className="footer-brand footer-col">
                    <div style={{ marginBottom: "var(--space-lg)" }}>
                        <Image src="/lexfirm-logo.png" alt={company.name} width={224} height={61} style={{ height: "61px", width: "auto", opacity: .85 }} />
                    </div>
                    <p>{company.description}</p>
                </div>
                <div className="footer-col">
                    <h4>Practice Areas</h4>
                    <ul>{footer.servicesLinks.map((s, i) => <li key={i}><Link href="/services">{s}</Link></li>)}</ul>
                </div>
                <div className="footer-col">
                    <h4>The Firm</h4>
                    <ul>{nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}</ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
                        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                        <li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.address.street}, {contact.address.city}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div>&#169; {new Date().getFullYear()} {footer.copyright}</div>
                <div className="footer-socials" />
            </div>
        </footer>
    );
}
