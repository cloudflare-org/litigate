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
        <aside style={{ position: "sticky", top: "120px" }}>
          <span style={{ fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".15em", fontWeight: 600, color: "var(--color-text-tertiary)", marginBottom: "var(--space-xl)", display: "block" }}>Jump to</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="sidebar-nav-link">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px" }}><ServiceIcon id={s.id} size={18} /></span><span>{s.title}</span>
              </a>
            ))}
          </div>
        </aside>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3xl)" }}>
          {services.map((s) => (
            <div key={s.id} id={s.id} style={{ padding: "var(--space-3xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", scrollMarginTop: "120px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-xl)", marginBottom: "var(--space-2xl)" }}>
                <div style={{ width: "56px", height: "56px", background: "rgba(132,204,22,.12)", border: "1px solid rgba(132,204,22,.3)", borderRadius: ".75rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#84cc16" }}><ServiceIcon id={s.id} size={28} /></div>
                <div>
                  <span className="text-label" style={{ display: "block" }}>{s.title}</span>
                  <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>{s.title}</h2>
                </div>
              </div>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-2xl)", lineHeight: "1.9" }}>{s.fullDescription}</p>
              <div className="services-details-grid">
                {s.details.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-md)", padding: "var(--space-md) var(--space-lg)", background: "var(--color-surface-1)", borderRadius: ".5rem" }}>
                    <span style={{ color: "var(--color-accent-primary)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>&#10003;</span>
                    <span style={{ color: "var(--color-text-secondary)", fontSize: ".875rem", lineHeight: "1.5" }}>{d}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ fontSize: ".85rem" }}>Discuss This Matter</Link>
            </div>
          ))}
        </div>
      </div>

      <section className="page-section-alt">
        <div className="page-section-inner">
          <span className="text-label" style={{ display: "block", marginBottom: "var(--space-md)" }}>Why Lex Firm Global</span>
          <h2 style={{ marginBottom: "var(--space-3xl)" }}>What Sets Us Apart</h2>
          <div className="services-why-grid">
            {[
              { title: "Absolute Discretion", body: "We operate under confidentiality protocols that go beyond standard legal professional privilege. Nothing about your matter is discussed outside the team handling it, and nothing is ever disclosed publicly without your explicit consent." },
              { title: "Partner-Led on Every Matter", body: "There are no exceptions to this rule. Every client of Lex Firm Global is advised directly by a partner. We do not delegate substantive work to junior associates. The person you instruct is the person who does the work." },
              { title: "Global Reach Without Limitation", body: "We are qualified across more than 40 jurisdictions and maintain relationships with leading local counsel in every major financial centre. When your matter crosses borders, we move with it." },
              { title: "Speed When It Matters", body: "The most consequential legal situations require immediate action. We maintain a 24-hour response guarantee for retained clients and can mobilise across multiple jurisdictions within hours of instruction." },
            ].map((w, i) => (
              <div key={i} style={{ padding: "var(--space-2xl)", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: ".75rem" }}>
                <h4 style={{ marginBottom: "var(--space-md)" }}>{w.title}</h4>
                <p style={{ color: "var(--color-text-secondary)", fontSize: ".9rem", lineHeight: "1.7" }}>{w.body}</p>
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
