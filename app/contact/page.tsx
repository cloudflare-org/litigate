"use client";
import { useState } from "react";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const { contact, services } = siteData;

const offices = [
  { flag: "🇬🇧", city: "London", address: `${contact.address.street}\n${contact.address.city}, ${contact.address.country} ${contact.address.postcode}`, phone: contact.phone, email: contact.email },
  { flag: "🇺🇸", city: "New York", address: "Madison Avenue\nNew York, NY 10065", phone: "+1 (212) 555-1000", email: "ny@lexiglobalfirm.com" },
  { flag: "🇸🇬", city: "Singapore", address: "Marina Bay\nSingapore 018956", phone: "+65 (6) 555-1000", email: "sg@lexiglobalfirm.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert("Thank you for your enquiry. A partner will review your message and respond within 24 hours."); };

  const inputStyle: React.CSSProperties = { width: "100%", padding: "var(--space-md) var(--space-lg)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".5rem", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", fontSize: ".95rem", outline: "none", transition: "border-color .3s" };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: ".75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-text-secondary)", fontFamily: "var(--font-body)", marginBottom: "var(--space-sm)" };

  return (
    <div className="content">
      <LexiNav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="text-label">Get In Touch</span>
          <h1>Contact</h1>
          <p className="hero-sub">All enquiries are treated with absolute confidentiality. A partner will review your message personally and respond within 24 hours.</p>
        </div>
      </div>

      {/* Main contact section */}
      <section style={{ padding: "var(--space-5xl) var(--space-3xl)", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-5xl)" }}>

          {/* Form */}
          <div>
            <h2 style={{ marginBottom: "var(--space-2xl)" }}>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              {[
                { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", required: true },
                { label: "Email Address *", name: "email", type: "email", placeholder: "your@email.com", required: true },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "+44 XXX XXX XXXX", required: false },
              ].map((f) => (
                <div key={f.name} style={{ marginBottom: "var(--space-xl)" }}>
                  <label style={labelStyle}>{f.label}</label>
                  <input type={f.type} name={f.name} required={f.required} value={(form as Record<string, string>)[f.name]} onChange={handleChange} placeholder={f.placeholder} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--color-accent-primary)"}
                    onBlur={e => e.target.style.borderColor = "var(--color-border)"}
                  />
                </div>
              ))}
              <div style={{ marginBottom: "var(--space-xl)" }}>
                <label style={labelStyle}>Service Required *</label>
                <select name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => e.target.style.borderColor = "var(--color-accent-primary)"}
                  onBlur={e => e.target.style.borderColor = "var(--color-border)"}
                >
                  <option value="" style={{ background: "var(--color-bg-secondary)" }}>Select a practice area</option>
                  {services.map((s) => <option key={s.id} value={s.id} style={{ background: "var(--color-bg-secondary)" }}>{s.title}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: "var(--space-xl)" }}>
                <label style={labelStyle}>Message *</label>
                <textarea name="message" required rows={7} value={form.message} onChange={handleChange} placeholder="Please describe your matter briefly. All information is treated in strict confidence." style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "var(--color-accent-primary)"}
                  onBlur={e => e.target.style.borderColor = "var(--color-border)"}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ fontSize: ".9rem", padding: "var(--space-lg) var(--space-3xl)" }}>
                Send Enquiry &#8594;
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 style={{ marginBottom: "var(--space-lg)" }}>Get In Touch</h2>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-3xl)", lineHeight: "1.8" }}>We accept new clients by referral only. If you have been referred to us, or wish to make a confidential enquiry, please complete the form and a partner will respond within 24 hours. We do not use automated responses.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
              {[
                { icon: "📍", title: "London Office", content: `${contact.address.street}\n${contact.address.city}, ${contact.address.country}\n${contact.address.postcode}`, href: undefined },
                { icon: "📞", title: "Phone", content: contact.phone, href: `tel:${contact.phone}` },
                { icon: "✉️", title: "Email", content: contact.email, href: `mailto:${contact.email}` },
                { icon: "🕐", title: "Office Hours", content: `${contact.hours.weekdays}\n${contact.hours.saturday}\n${contact.hours.sunday}`, href: undefined },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-lg)", padding: "var(--space-xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem" }}>
                  <div style={{ width: "44px", height: "44px", background: "rgba(132,204,22,.12)", border: "1px solid rgba(132,204,22,.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ color: "var(--color-text-primary)", marginBottom: "var(--space-xs)", fontSize: "1rem" }}>{item.title}</h4>
                    {item.href
                      ? <a href={item.href} style={{ color: "var(--color-text-secondary)", fontSize: ".9rem", textDecoration: "none", whiteSpace: "pre-line" }}>{item.content}</a>
                      : <p style={{ color: "var(--color-text-secondary)", fontSize: ".9rem", whiteSpace: "pre-line" }}>{item.content}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section style={{ padding: "var(--space-5xl) var(--space-3xl)", background: "linear-gradient(180deg,var(--color-bg-tertiary),transparent)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-4xl)" }}>
            <span className="text-label" style={{ display: "block", marginBottom: "var(--space-md)" }}>Global Presence</span>
            <h2>Our Offices</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-2xl)" }}>
            {offices.map((o, i) => (
              <div key={i} style={{ padding: "var(--space-3xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "var(--space-lg)" }}>{o.flag}</div>
                <h3 style={{ marginBottom: "var(--space-md)" }}>{o.city}</h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: ".9rem", lineHeight: "1.7", whiteSpace: "pre-line", marginBottom: "var(--space-md)" }}>{o.address}</p>
                <a href={`tel:${o.phone}`} style={{ display: "block", color: "var(--color-accent-primary)", textDecoration: "none", fontSize: ".9rem", marginBottom: "var(--space-sm)" }}>{o.phone}</a>
                <a href={`mailto:${o.email}`} style={{ display: "block", color: "var(--color-accent-primary)", textDecoration: "none", fontSize: ".9rem" }}>{o.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LexiFooter />
    </div>
  );
}
