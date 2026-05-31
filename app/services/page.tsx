import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import { ServiceIcon } from "@/components/ServiceIcon";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const { services } = siteData;

export default function ServicesPage() {
  return (
    <div className="content">
      <LexiNav />
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="text-label">Practice Areas</span>
          <h1>Our Services</h1>
          <p className="hero-sub">Six practice areas. One standard of excellence. Every matter is led by a partner with decades of specialist experience in that field.</p>
        </div>
      </div>

      <div className="services-layout">
        <aside className="services-sidebar">
          <span className="services-sidebar-title">Jump to</span>
          <div className="services-sidebar-list">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="sidebar-nav-link">
                <span className="service-sidebar-icon"><ServiceIcon id={s.id} size={18} /></span><span>{s.title}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className="services-list">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="service-panel">
              <div className="service-panel-head">
                <div className="service-panel-icon"><ServiceIcon id={s.id} size={28} /></div>
                <div>
                  <span className="text-label text-label-block">{s.title}</span>
                  <h2 className="service-panel-title">{s.title}</h2>
                </div>
              </div>
              <p className="service-panel-copy">{s.fullDescription}</p>
              <div className="services-details-grid">
                {s.details.map((d, i) => (
                  <div key={i} className="service-detail-item">
                    <span className="service-detail-check">&#10003;</span>
                    <span className="service-detail-text">{d}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-primary text-[.85rem]">Discuss This Matter</Link>
            </div>
          ))}
        </div>
      </div>

      <section className="page-section-alt">
        <div className="page-section-inner">
          <span className="text-label text-label-block-md">Why Lex Firm Global</span>
          <h2 className="mb-[var(--space-3xl)]">What Sets Us Apart</h2>
          <div className="services-why-grid">
            {[
              { title: "Absolute Discretion", body: "We operate under confidentiality protocols that go beyond standard legal professional privilege. Nothing about your matter is discussed outside the team handling it, and nothing is ever disclosed publicly without your explicit consent." },
              { title: "Partner-Led on Every Matter", body: "There are no exceptions to this rule. Every client of Lex Firm Global is advised directly by a partner. We do not delegate substantive work to junior associates. The person you instruct is the person who does the work." },
              { title: "Global Reach Without Limitation", body: "We are qualified across more than 40 jurisdictions and maintain relationships with leading local counsel in every major financial centre. When your matter crosses borders, we move with it." },
              { title: "Speed When It Matters", body: "The most consequential legal situations require immediate action. We maintain a 24-hour response guarantee for retained clients and can mobilise across multiple jurisdictions within hours of instruction." },
            ].map((w, i) => (
              <div key={i} className="surface-card p-[var(--space-2xl)]">
                <h4 className="service-card-title">{w.title}</h4>
                <p className="service-card-copy">{w.body}</p>
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
      <LexiFooter />
    </div>
  );
}
