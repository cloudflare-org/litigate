"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/data/siteData.json";
import {
    BASE_CSS,
    NAV_CSS,
    FOOTER_CSS,
    BTN_CSS,
    PAGE_HERO_CSS,
    SECTION_CSS,
} from "@/components/LexiStyles";

export default function ContactPage() {
    const { company, contact, footer, nav, services } = siteData;
    const [scrolled, setScrolled] = useState(false);
    const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    const offices = [
        {
            city: "London",
            phone: contact.phone,
            email: contact.email,
            address: `${contact.address.street}, ${contact.address.city} ${contact.address.postcode}`,
            flag: "🇬🇧",
        },
        {
            city: "New York",
            phone: "+1 212 555 1000",
            email: "ny@lexiglobalfirm.com",
            address: "Madison Avenue, New York NY 10065",
            flag: "🇺🇸",
        },
        {
            city: "Singapore",
            phone: "+65 6555 1000",
            email: "sg@lexiglobalfirm.com",
            address: "Marina Bay, Singapore 018956",
            flag: "🇸🇬",
        },
    ];

    return (
        <>
            <style>{BASE_CSS}</style>
            <style>{NAV_CSS}</style>
            <style>{FOOTER_CSS}</style>
            <style>{BTN_CSS}</style>
            <style>{PAGE_HERO_CSS}</style>
            <style>{SECTION_CSS}</style>
            <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
          align-items: start;
        }
        .contact-form-wrap {
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          padding: var(--space-3xl);
        }
        .contact-form-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--color-text-primary);
          margin-bottom: var(--space-2xl);
        }
        .form-group {
          margin-bottom: var(--space-xl);
        }
        .form-label {
          display: block;
          font-size: .75rem;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--space-sm);
        }
        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          background: var(--color-surface-1);
          border: 1px solid var(--color-border);
          border-radius: .5rem;
          padding: var(--space-md) var(--space-lg);
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: .9rem;
          transition: border-color .3s;
          outline: none;
          appearance: none;
        }
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: var(--color-accent-primary);
          background: rgba(132,204,22,.03);
        }
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--color-text-tertiary);
        }
        .form-select option {
          background: var(--color-bg-secondary);
          color: var(--color-text-primary);
        }
        .form-textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.6;
        }
        .form-submit {
          width: 100%;
          padding: var(--space-lg) var(--space-2xl);
          background: var(--color-accent-primary);
          border: none;
          border-radius: .5rem;
          color: var(--color-bg-primary);
          font-family: var(--font-body);
          font-size: .9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all .3s;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-top: var(--space-md);
        }
        .form-submit:hover {
          background: var(--color-accent-secondary);
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(132,204,22,.2);
        }
        .form-success {
          text-align: center;
          padding: var(--space-3xl) var(--space-xl);
        }
        .form-success-icon {
          font-size: 3rem;
          margin-bottom: var(--space-xl);
        }
        .form-success h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--color-text-primary);
          margin-bottom: var(--space-lg);
        }
        .form-success p {
          color: var(--color-text-secondary);
          font-size: .95rem;
          line-height: 1.7;
        }
        .contact-info-wrap {
          display: flex;
          flex-direction: column;
          gap: var(--space-2xl);
        }
        .contact-note {
          background: rgba(132,204,22,.05);
          border: 1px solid rgba(132,204,22,.15);
          border-radius: .75rem;
          padding: var(--space-2xl);
        }
        .contact-note p {
          color: var(--color-text-secondary);
          font-size: .95rem;
          line-height: 1.8;
          margin: 0;
        }
        .contact-info-card {
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-radius: .75rem;
          padding: var(--space-xl) var(--space-2xl);
          display: flex;
          gap: var(--space-lg);
          align-items: flex-start;
          transition: border-color .3s;
        }
        .contact-info-card:hover {
          border-color: rgba(132,204,22,.3);
        }
        .contact-info-icon {
          width: 44px;
          height: 44px;
          background: rgba(132,204,22,.1);
          border: 1px solid rgba(132,204,22,.2);
          border-radius: .5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .contact-info-label {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: .25rem;
        }
        .contact-info-value {
          color: var(--color-text-primary);
          font-size: .9rem;
          line-height: 1.6;
          text-decoration: none;
        }
        .contact-info-value:hover {
          color: var(--color-accent-primary);
        }
        .offices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-2xl);
          margin-top: var(--space-4xl);
        }
        .office-card {
          background: var(--color-surface-2);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          padding: var(--space-2xl);
          transition: all .3s;
        }
        .office-card:hover {
          border-color: rgba(132,204,22,.3);
          transform: translateY(-4px);
        }
        .office-flag {
          font-size: 1.75rem;
          margin-bottom: var(--space-lg);
        }
        .office-city {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--color-text-primary);
          margin-bottom: var(--space-xl);
        }
        .office-detail {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        .office-detail-item {
          display: flex;
          gap: var(--space-md);
          align-items: flex-start;
        }
        .office-detail-icon {
          font-size: .9rem;
          flex-shrink: 0;
          margin-top: .1rem;
          color: var(--color-accent-primary);
        }
        .office-detail-text {
          color: var(--color-text-secondary);
          font-size: .875rem;
          line-height: 1.5;
          text-decoration: none;
        }
        .office-detail-text:hover {
          color: var(--color-accent-primary);
        }
        @media(max-width: 1024px) {
          .contact-layout { grid-template-columns: 1fr; }
          .offices-grid { grid-template-columns: 1fr; }
        }
        @media(max-width: 768px) {
          .contact-form-wrap { padding: var(--space-2xl); }
          .offices-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <div className="content">
                {/* NAV */}
                <nav className={scrolled ? "active" : ""}>
                    <Link href="/" className="logo">{company.name}</Link>
                    <ul className="nav-menu">
                        {nav.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className={pathname === l.href ? "active-link" : ""}>{l.name}</Link>
                            </li>
                        ))}
                        <li><Link href="/contact"><button className="nav-cta">Enquire</button></Link></li>
                    </ul>
                </nav>

                {/* HERO */}
                <div className="page-hero">
                    <div className="page-hero-inner">
                        <span className="text-label">Get in Touch</span>
                        <h1>Contact</h1>
                        <p className="hero-sub">All enquiries are treated with absolute confidentiality.</p>
                    </div>
                </div>

                {/* CONTACT FORM + INFO */}
                <section className="section">
                    <div className="section-inner">
                        <div className="contact-layout">
                            {/* FORM */}
                            <div className="contact-form-wrap">
                                {submitted ? (
                                    <div className="form-success">
                                        <div className="form-success-icon">&#10003;</div>
                                        <h3>Enquiry Received</h3>
                                        <p>Thank you for your enquiry. A member of our team will respond within 24 hours. All communications are treated with absolute confidentiality.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="contact-form-title">Make an Enquiry</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="name">Full Name</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    className="form-input"
                                                    placeholder="Your full name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="email">Email Address</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="form-input"
                                                    placeholder="your@email.com"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    className="form-input"
                                                    placeholder="+44 or international"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="service">Area of Interest</label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    className="form-select"
                                                    value={formState.service}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select a practice area</option>
                                                    {services.map((s) => (
                                                        <option key={s.id} value={s.id}>{s.title}</option>
                                                    ))}
                                                    <option value="other">Other / Not sure</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="message">Your Message</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    className="form-textarea"
                                                    placeholder="Please describe your matter briefly. All information is treated in strict confidence."
                                                    value={formState.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className="form-submit">Send Enquiry</button>
                                        </form>
                                    </>
                                )}
                            </div>

                            {/* INFO */}
                            <div className="contact-info-wrap">
                                <div className="contact-note">
                                    <p>We accept new clients by referral only. If you have been referred to us, or wish to make a confidential enquiry, please complete the form and we will respond within 24 hours.</p>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">&#128222;</div>
                                    <div>
                                        <div className="contact-info-label">Phone</div>
                                        <a href={`tel:${contact.phone}`} className="contact-info-value">{contact.phone}</a>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">&#9993;</div>
                                    <div>
                                        <div className="contact-info-label">Email</div>
                                        <a href={`mailto:${contact.email}`} className="contact-info-value">{contact.email}</a>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">&#128205;</div>
                                    <div>
                                        <div className="contact-info-label">Address</div>
                                        <div className="contact-info-value">{contact.address.street}<br />{contact.address.city}, {contact.address.postcode}</div>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">&#128336;</div>
                                    <div>
                                        <div className="contact-info-label">Hours</div>
                                        <div className="contact-info-value">
                                            {contact.hours.weekdays}<br />
                                            {contact.hours.saturday}<br />
                                            {contact.hours.sunday}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* OFFICES */}
                        <div style={{ marginTop: "var(--space-5xl)", borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-4xl)" }}>
                            <div className="section-header">
                                <span className="text-label">Global Presence</span>
                                <h2>Our Offices</h2>
                                <div className="divider" />
                            </div>
                            <div className="offices-grid">
                                {offices.map((office) => (
                                    <div className="office-card" key={office.city}>
                                        <div className="office-flag">{office.flag}</div>
                                        <div className="office-city">{office.city}</div>
                                        <div className="office-detail">
                                            <div className="office-detail-item">
                                                <span className="office-detail-icon">&#128222;</span>
                                                <a href={`tel:${office.phone}`} className="office-detail-text">{office.phone}</a>
                                            </div>
                                            <div className="office-detail-item">
                                                <span className="office-detail-icon">&#9993;</span>
                                                <a href={`mailto:${office.email}`} className="office-detail-text">{office.email}</a>
                                            </div>
                                            <div className="office-detail-item">
                                                <span className="office-detail-icon">&#128205;</span>
                                                <span className="office-detail-text">{office.address}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
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
                                <li style={{ color: "var(--color-text-secondary)", fontSize: ".875rem" }}>{contact.hours.footerDisplay}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div>&#169; {new Date().getFullYear()} {footer.copyright}</div>
                        <div className="footer-socials">
                            <a href="#">LinkedIn</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
