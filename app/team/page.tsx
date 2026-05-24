"use client";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const { company, team } = siteData;

export default function TeamPage() {
  return (
    <div className="content">
      <LexiNav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="text-label">Our People</span>
          <h1>The Partners</h1>
          <p className="hero-sub">Every matter at {company.name} is led by a partner. There are no exceptions.</p>
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="section-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5xl)", alignItems: "center" }}>
          <div>
            <span className="text-label" style={{ display: "block", marginBottom: "var(--space-lg)" }}>A Different Kind of Firm</span>
            <h2 style={{ marginBottom: "var(--space-xl)" }}>Small by Design. Exceptional by Necessity.</h2>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)", lineHeight: "1.9" }}>We are a small firm by design. We believe that exceptional legal work requires exceptional people, and that exceptional people cannot be scaled indefinitely. Every partner at {company.name} has been selected for their technical mastery, their judgment under pressure, and their absolute commitment to client confidentiality.</p>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)", lineHeight: "1.9" }}>We do not have associates handling partner-level work. We do not have trainees sitting in on sensitive client calls. When you instruct {company.name}, you are instructing the partner whose name is on the door. That is not a marketing claim. It is how we operate.</p>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.9" }}>Our partners have come from the most demanding environments in the legal profession: Magic Circle firms, international arbitral institutions, government enforcement bodies, and the judiciary. They have chosen to work here because they share a belief that the best legal work is done quietly, carefully, and without compromise.</p>
          </div>
          <div style={{ height: "360px", background: "linear-gradient(135deg,var(--color-surface-2),var(--color-surface-1))", border: "1px solid var(--color-border)", borderRadius: "1rem", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "var(--color-text-secondary)", textAlign: "center", padding: "var(--space-3xl)", position: "relative", zIndex: 1, fontStyle: "italic", lineHeight: "1.5" }}>
              "We do not have associates handling partner-level work. When you instruct us, you instruct the partner."
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section style={{ padding: "0 var(--space-3xl) var(--space-5xl)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-2xl)" }}>
          {team.map((m) => (
            <div key={m.slug} style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "160px 1fr" }}>
                <div style={{ background: "linear-gradient(135deg,var(--color-surface-3),var(--color-surface-1))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", minHeight: "200px", borderRight: "1px solid var(--color-border)" }}>
                  {m.emoji}
                </div>
                <div style={{ padding: "var(--space-2xl)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--color-text-primary)", marginBottom: "var(--space-sm)" }}>{m.name}</div>
                  <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".12em", color: "var(--color-accent-primary)", fontWeight: 600, marginBottom: "var(--space-sm)" }}>{m.role}</div>
                  <div style={{ fontSize: ".875rem", color: "var(--color-text-secondary)" }}>{m.specialty}</div>
                </div>
              </div>
              <div style={{ padding: "var(--space-2xl)", borderTop: "1px solid var(--color-border)" }}>
                <p style={{ color: "var(--color-text-secondary)", fontSize: ".95rem", lineHeight: "1.9", marginBottom: "var(--space-xl)" }}>{m.bio}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                  {m.credentials.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-md)", fontSize: ".8rem", color: "var(--color-text-tertiary)" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--color-accent-primary)", flexShrink: 0, marginTop: "6px" }} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="cta-strip-inner">
          <div className="cta-strip-content">
            <h2>Work Directly With a Partner</h2>
            <p>Every new enquiry is reviewed personally by a partner before we respond. We will tell you honestly whether we can help and who is best placed to do so.</p>
            <Link href="/contact" className="btn">Make a Confidential Enquiry</Link>
          </div>
        </div>
      </div>

      <LexiFooter />
    </div>
  );
}
