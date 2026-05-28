import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import siteData from "@/data/siteData.json";

const { contact } = siteData;

const offices = [
  { flag: "🇺🇸", city: "Chicago", address: `${contact.address.street}\n${contact.address.city}, ${contact.address.country} ${contact.address.postcode}`, phone: contact.phone, email: contact.email },
];

const contactCards = [
  { icon: "📍", title: "Chicago Office", content: `${contact.address.street}\n${contact.address.city}, ${contact.address.country}\n${contact.address.postcode}`, href: undefined as string | undefined },
  { icon: "📞", title: "Phone", content: contact.phone, href: `tel:${contact.phone}` },
  { icon: "✉️", title: "Email", content: contact.email, href: `mailto:${contact.email}` },
  { icon: "🕐", title: "Office Hours", content: `${contact.hours.weekdays}\n${contact.hours.saturday}\n${contact.hours.sunday}`, href: undefined as string | undefined },
];

const beforeYouWrite = [
  "We do not take on matters below a certain threshold of complexity or value.",
  "We do not offer free consultations or preliminary advice by email.",
  "All new client relationships begin with a formal engagement letter.",
  "We are bound by strict confidentiality obligations to existing clients.",
  "Response time for new enquiries is 24 to 48 hours.",
];

export default function ContactPage() {
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

      <section className="page-section">
        <div className="page-section-inner">
          <div className="contact-main-grid">
            {/* Left */}
            <div>
              <h2 style={{ marginBottom: "var(--space-xl)" }}>Make an Enquiry</h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.8", marginBottom: "var(--space-2xl)" }}>
                We accept new clients by referral only. To make a confidential enquiry, please email us directly. All correspondence is treated with absolute discretion and responded to within 24 hours.
              </p>
              <a href="mailto:enquiries@lexiglobalfirm.com" className="btn btn-primary" style={{ display: "inline-block", fontSize: "clamp(.8rem,2vw,1rem)", padding: "var(--space-lg) var(--space-2xl)", marginBottom: "var(--space-xl)", wordBreak: "break-all" }}>
                enquiries@lexiglobalfirm.com
              </a>
              <p style={{ color: "var(--color-text-tertiary)", fontSize: ".875rem", lineHeight: "1.7", marginBottom: "var(--space-3xl)" }}>
                If you have been referred to us by an existing client, please mention this in your email.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                {contactCards.map((item, i) => (
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

            {/* Right */}
            <div>
              <div style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", padding: "var(--space-3xl)", marginBottom: "var(--space-2xl)" }}>
                <h3 style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", marginBottom: "var(--space-xl)" }}>Before You Write</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                  {beforeYouWrite.map((point, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-md)", color: "var(--color-text-secondary)", fontSize: ".9rem", lineHeight: "1.7" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--color-accent-primary)", flexShrink: 0, marginTop: "8px" }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                {offices.map((o, i) => (
                  <div key={i} className="office-card">
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", marginBottom: "var(--space-md)" }}>
                      <span style={{ fontSize: "1.5rem" }}>{o.flag}</span>
                      <h4 style={{ fontSize: "1.1rem", color: "var(--color-text-primary)" }}>{o.city}</h4>
                    </div>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: ".875rem", lineHeight: "1.7", whiteSpace: "pre-line", marginBottom: "var(--space-sm)" }}>{o.address}</p>
                    <a href={`tel:${o.phone}`} style={{ display: "block", color: "var(--color-accent-primary)", textDecoration: "none", fontSize: ".875rem", marginBottom: "var(--space-xs)" }}>{o.phone}</a>
                    <a href={`mailto:${o.email}`} style={{ display: "block", color: "var(--color-accent-primary)", textDecoration: "none", fontSize: ".875rem" }}>{o.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <LexiFooter />
    </div>
  );
}
