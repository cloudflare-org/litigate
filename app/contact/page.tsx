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
            <div>
              <h2 className="contact-intro-title">Make an Enquiry</h2>
              <p className="contact-intro-copy">
                We accept new clients by referral only. To make a confidential enquiry, please email us directly. All correspondence is treated with absolute discretion and responded to within 24 hours.
              </p>
              <a href="mailto:enquiries@lexfirmglobal.com" className="btn btn-primary contact-email-btn">
                enquiries@lexfirmglobal.com
              </a>
              <p className="contact-ref-note">
                If you have been referred to us by an existing client, please mention this in your email.
              </p>
              <div className="contact-card-list">
                {contactCards.map((item, i) => (
                  <div key={i} className="contact-card">
                    <div className="contact-card-icon">{item.icon}</div>
                    <div>
                      <h4 className="contact-card-title">{item.title}</h4>
                      {item.href
                        ? <a href={item.href} className="contact-card-link">{item.content}</a>
                        : <p className="contact-card-content">{item.content}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="contact-side-panel">
                <h3 className="contact-side-title">Before You Write</h3>
                <ul className="contact-checklist">
                  {beforeYouWrite.map((point, i) => (
                    <li key={i} className="contact-checklist-item">
                      <div className="contact-checklist-dot" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="office-list">
                {offices.map((o, i) => (
                  <div key={i} className="office-card">
                    <div className="office-head">
                      <span className="office-flag">{o.flag}</span>
                      <h4 className="office-city">{o.city}</h4>
                    </div>
                    <p className="office-address">{o.address}</p>
                    <a href={`tel:${o.phone}`} className="office-link">{o.phone}</a>
                    <a href={`mailto:${o.email}`} className="office-link">{o.email}</a>
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
