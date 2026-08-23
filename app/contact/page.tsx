import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import { CONTACT_BEFORE_YOU_WRITE } from "@/data/pageContent";
import { SITE_BRAND, SITE_DATA } from "@/data/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const { contact } = SITE_DATA;

const contactCards = [
  { icon: MapPin, title: "Chicago Office", content: `${contact.address.street}\n${contact.address.city}, ${contact.address.country}\n${contact.address.postcode}`, href: undefined as string | undefined },
  { icon: Phone, title: "Phone", content: contact.phone, href: `tel:${contact.phone}` },
  { icon: Clock, title: "Office Hours", content: `${contact.hours.weekdays}\n${contact.hours.saturday}\n${contact.hours.sunday}`, href: undefined as string | undefined },
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
              <a href={SITE_BRAND.primaryEmailMailto} className="btn btn-primary contact-email-btn">
                <span className="contact-email-btn-icon">
                  <Mail size={20} strokeWidth={1.8} />
                </span>
                <span className="contact-email-btn-copy">
                  <span className="contact-email-btn-label">Email the Firm</span>
                  <span className="contact-email-btn-address">{SITE_BRAND.primaryEmail}</span>
                </span>
              </a>
              <p className="contact-ref-note">
                If you have been referred to us by an existing client, please mention this in your email.
              </p>
            </div>

            <div className="contact-side-panel">
              <h3 className="contact-side-title">Before You Write</h3>
              <ul className="contact-checklist">
                {CONTACT_BEFORE_YOU_WRITE.map((point, i) => (
                  <li key={i} className="contact-checklist-item">
                    <div className="contact-checklist-dot" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact-details-grid">
            {contactCards.map((item, i) => (
              <div key={i} className="contact-card">
                <div className="contact-card-icon">
                  <item.icon size={20} strokeWidth={1.8} />
                </div>
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
      </section>
      <LexiFooter />
    </div>
  );
}
