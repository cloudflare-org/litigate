"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";

const { company, contact, footer, nav } = siteData;

export function LexiNav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <>
            <style>{`
                .lexi-hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                    width: 40px;
                    height: 40px;
                    background: transparent;
                    border: 1px solid rgba(132,204,22,0.4);
                    border-radius: .375rem;
                    cursor: pointer;
                    padding: 0;
                    flex-shrink: 0;
                    transition: border-color .3s;
                }
                .lexi-hamburger:hover { border-color: #84cc16; }
                .lexi-hamburger span {
                    display: block;
                    width: 18px;
                    height: 2px;
                    background: #84cc16;
                    border-radius: 2px;
                    transition: all .3s ease;
                    transform-origin: center;
                }
                .lexi-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
                .lexi-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .lexi-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
                .lexi-mobile-menu {
                    display: none;
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 999;
                    background: rgba(5,5,5,0.97);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    padding-top: 72px;
                    transform: translateY(-100%);
                    transition: transform .35s cubic-bezier(.4,0,.2,1);
                    backdrop-filter: blur(20px);
                }
                .lexi-mobile-menu.open { transform: translateY(0); }
                .lexi-mobile-menu ul { list-style: none; display: flex; flex-direction: column; }
                .lexi-mobile-menu ul li a {
                    display: block;
                    width: 100%;
                    padding: 1rem 1.5rem;
                    color: #a1a09e;
                    text-decoration: none;
                    font-family: var(--font-body);
                    font-size: 1rem;
                    font-weight: 500;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    transition: color .2s, background .2s;
                }
                .lexi-mobile-menu ul li a:hover,
                .lexi-mobile-menu ul li a.active-link { color: #84cc16; background: rgba(132,204,22,0.05); }
                .lexi-mobile-menu-cta { padding: 1.5rem; }
                .lexi-mobile-menu-cta a {
                    display: block;
                    text-align: center;
                    padding: .875rem 1.5rem;
                    background: #84cc16;
                    color: #050505 !important;
                    border-radius: .5rem;
                    font-weight: 700;
                    font-size: .9rem;
                    text-decoration: none;
                    letter-spacing: .05em;
                    text-transform: uppercase;
                    transition: background .2s;
                }
                .lexi-mobile-menu-cta a:hover { background: #a3e635; }
                @media (max-width: 768px) {
                    .lexi-hamburger { display: flex; }
                    .lexi-mobile-menu { display: block; }
                }
            `}</style>

            <nav className={`lexi-nav${scrolled ? " scrolled" : ""}`}>
                <Link href="/" className="lexi-logo">{company.name}</Link>
                <ul className="lexi-nav-menu">
                    {nav.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className={pathname === l.href ? "active-link" : ""}>{l.name}</Link>
                        </li>
                    ))}
                    <li><Link href="/contact"><button className="lexi-nav-cta">Enquire</button></Link></li>
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

            <div className={`lexi-mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
                <ul>
                    {nav.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className={pathname === l.href ? "active-link" : ""} onClick={() => setMenuOpen(false)}>
                                {l.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="lexi-mobile-menu-cta">
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>Enquire Now</Link>
                </div>
            </div>
        </>
    );
}

export function LexiFooter() {
    return (
        <footer className="lexi-footer">
            <div className="footer-grid">
                <div className="footer-brand footer-col">
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "none", letterSpacing: "-.02em", color: "var(--color-text-primary)" }}>{company.name}</h4>
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
                <div className="footer-socials"><a href="#">LinkedIn</a><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
            </div>
        </footer>
    );
}
