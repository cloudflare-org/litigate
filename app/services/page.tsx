"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";
import { BASE_CSS, NAV_CSS, FOOTER_CSS, BTN_CSS, PAGE_HERO_CSS, SECTION_CSS, CTA_STRIP_CSS } from "@/components/LexiStyles";

export default function ServicesPage() {
  const { company, services, contact, footer, nav } = siteData;
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 80); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

  return (
    <>
      <style>{BASE_CSS}</style><style>{NAV_CSS}</style><style>{FOOTER_CSS}</style><style>{BTN_CSS}</style><style>{PAGE_HERO_CSS}</style><style>{SECTION_CSS}</style><style>{CTA_STRIP_CSS}</style>
      <style>{`
        .services-layout{display:grid;grid-template-columns:260px 1fr;gap:var(--space-4xl);align-items:start;max-width:1400px;margin:0 auto;padding:var(--space-5xl) var(--space-3xl);}
        .services-sidebar{position:sticky;top:120px;}
        .sidebar-label{font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;font-weight:600;color:var(--color-text-tertiary);margin-bottom:var(--space-xl);display:block;}
        .sidebar-links{display:flex;flex-direction:column;gap:var(--space-sm);}
        .sidebar-link{display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md) var(--space-lg);border-radius:.5rem;text-decoration:none;color:var(--color-text-secondary);font-size:.875rem;transition:all .3s;border:1px solid transparent;}
        .sidebar-link:hover{color:var(--color-accent-primary);background:var(--color-surface-2);border-color:var(--color-border);}
        .sidebar-link-icon{font-size:1rem;flex-shrink:0;}
        .services-list{display:flex;flex-direction:column;gap:var(--space-3xl);}
        .service-card{padding:var(--space-4xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:1rem;transition:border-color .4s;scroll-margin-top:120px;}
        .service-card:hover{border-color:rgba(132,204,22,.3);}
        .service-card-header{display:flex;align-items:flex-start;gap:var(--space-xl);margin-bottom:var(--space-2xl);}
        .service-card-icon{width:64px;height:64px;background:rgba(132,204,22,.12);border:1px solid rgba(132,204,22,.3);border-radius:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem;flex-shrink:0;}
        .service-card-header-text h2{margin-bottom:var(--space-sm);}
        .service-card-header-text .text-label{display:block;}
        .service-full-desc{color:var(--color-text-secondary);margin-bottom:var(--space-2xl);line-height:1.9;}
        .service-details-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);margin-bottom:var(--space-2xl);}
        .service-detail-item{display:flex;align-items:flex-start;gap:var(--space-md);padding:var(--space-md) var(--space-lg);background:var(--color-surface-1);border-radius:.5rem;}
        .service-detail-check{color:var(--color-accent-primary);font-weight:700;flex-shrink:0;margin-top:2px;}
        .service-detail-item span{color:var(--color-text-secondary);font-size:.875rem;line-height:1.5;}
        @media(max-width:1024px){.services-layout{grid-template-columns:1fr;padding:var(--space-3xl) var(--space-lg);}.services-sidebar{display:none;}}
        @media(max-width:768px){.service-card{padding:var(--space-2xl);}.service-details-grid{grid-template-columns:1fr;}}

        .why-section{padding:var(--space-5xl) var(--space-3xl);background:linear-gradient(180deg,var(--color-bg-tertiary),transparent);}
        .why-inner{max-width:1400px;margin:0 auto;}
        .why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-xl);margin-top:var(--space-3xl);}
        .why-card{padding:var(--space-2xl);background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:.75rem;transition:all .3s;}
        .why-card:hover{border-color:var(--color-accent-primary);}
        .why-card h4{margin-bottom:var(--space-md);}
        .why-card p{color:var(--color-text-secondary);font-size:.9rem;line-height:1.7;}
        @media(max-width:768px){.why-section{padding:var(--space-3xl) var(--space-lg);}.why-grid{grid-template-columns:1fr;}}
      `}</style>

      <div className="content">
        <nav className={scrolled ? "active" : ""}>
          <Link href="/" className="logo">{company.name}</Link>
          <ul className="nav-menu">
            {nav.map((l) => <li key={l.href}><Link href={l.href} className={pathname === l.href ? "active-link" : ""}>{l.name}</Link></li>)}
            <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
          </ul>
        </nav>

        <div className="page-hero">
          <div className="page-hero-inner">
            <span className="text-label">Practice Areas</span>
            <h1>Our Services</h1>
            <p className="hero-sub">Six practice areas. One standard of excellence. Every matter is led by a partner with decades of specialist experience in that field.</p>
          </div>
        </div>

        <div className="services-layout">
          <aside className="services-sidebar">
            <span className="sidebar-label">Jump to</span>
            <div className="sidebar-links">
              {services.map((s) => (
                <a href={`#${s.id}`} className="sidebar-link" key={s.id}>
                  <span className="sidebar-link-icon">{s.icon}</span>
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </aside>

          <div className="services-list">
            {services.map((s) => (
              <div className="service-card" id={s.id} key={s.id}>
                <div className="service-card-header">
                  <div className="service-card-icon">{s.icon}</div>
                  <div className="service-card-header-text">
                    <span className="text-label">{s.title}</span>
                    <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>{s.title}</h2>
                  </div>
                </div>
                <p className="service-full-desc">{s.fullDescription}</p>
                <div className="service-details-grid">
                  {s.details.map((d, i) => (
                    <div className="service-detail-item" key={i}>
                      <span className="service-detail-check">&#10003;</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-primary" style={{ fontSize: ".85rem" }}>Discuss This Matter</Link>
              </div>
            ))}
          </div>
        </div>

        <section className="why-section">
          <div className="why-inner">
            <div className="section-header">
              <span className="text-label">Why Lexi Global Firm</span>
              <h2>What Sets Us Apart</h2>
            </div>
            <div className="why-grid">
              {[
                { title: "Absolute Discretion", body: "We operate under confidentiality protocols that go beyond standard legal professional privilege. Nothing about your matter is discussed outside the team handling it, and nothing is ever disclosed publicly without your explicit consent." },
                { title: "Partner-Led on Every Matter", body: "There are no exceptions to this rule. Every client of Lexi Global Firm is advised directly by a partner. We do not delegate substantive work to junior associates. The person you instruct is the person who does the work." },
                { title: "Global Reach Without Limitation", body: "We are qualified across more than 40 jurisdictions and maintain relationships with leading local counsel in every major financial centre. When your matter crosses borders, we move with it." },
                { title: "Speed When It Matters", body: "The most consequential legal situations require immediate action. We maintain a 24-hour response guarantee for retained clients and can mobilise across multiple jurisdictions within hours of instruction." },
              ].map((w, i) => (
                <div className="why-card" key={i}>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="cta-strip">
          <div className="cta-strip-inner">
            <div className="cta-strip-content">
              <h2>Discuss Your Matter</h2>
              <p>All enquiries are treated with absolute confidentiality. We will respond within 24 hours.</p>
              <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
            </div>
          </div>
        </div>

        <footer className="lexi-footer">
          <div className="footer-grid">
            <div className="footer-brand footer-col"><h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "none", letterSpacing: "-.02em", color: "var(--color-text-primary)" }}>{company.name}</h4><p>{company.description}</p></div>
            <div className="footer-col"><h4>Practice Areas</h4><ul>{footer.servicesLinks.map((s, i) => <li key={i}><Link href="/services">{s}</Link></li>)}</ul></div>
            <div className="footer-col"><h4>The Firm</h4><ul>{nav.map((l) => <li key={l.href}><Link href={l.href}>{l.name}</Link></li>)}</ul></div>
            <div className="footer-col"><h4>Contact</h4><ul><li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li><li><a href={`mailto:${contact.email}`}>{contact.email}</a></li><li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.address.street}, {contact.address.city}</li></ul></div>
          </div>
          <div className="footer-bottom"><div>&#169; {new Date().getFullYear()} {footer.copyright}</div><div className="footer-socials"><a href="#">LinkedIn</a><a href="#">Privacy Policy</a><a href="#">Terms</a></div></div>
        </footer>
      </div>
    </>
  );
}
