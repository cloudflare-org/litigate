"use client";
import { useState, useMemo } from "react";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import siteData from "@/data/siteData.json";

const { team } = siteData;

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const POSITIONS = ["Managing Partner", "Senior Partner", "Partner", "Senior Associate", "Associate", "Chairman"];
const ALL_PRACTICE_AREAS = [
  { id: "international-arbitration", label: "International Arbitration" },
  { id: "corporate-litigation", label: "Corporate Litigation" },
  { id: "asset-recovery", label: "Asset Recovery" },
  { id: "private-wealth", label: "Private Wealth" },
  { id: "regulatory-defence", label: "Regulatory Defence" },
  { id: "investment-law", label: "Investment Law" },
  { id: "white-collar-defense", label: "White-Collar Defense" },
  { id: "commercial-litigation", label: "Commercial Litigation" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "entertainment-law", label: "Entertainment Law" },
  { id: "mergers-and-acquisitions", label: "Mergers and Acquisitions" },
  { id: "securities-enforcement", label: "Securities Enforcement" },
];

function getPracticeLabel(id: string) {
  return ALL_PRACTICE_AREAS.find((a) => a.id === id)?.label ?? id;
}

export default function TeamPage() {
  const [nameQuery, setNameQuery] = useState("");
  const [practiceFilter, setPracticeFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [activeLetter, setActiveLetter] = useState("");
  const [appliedName, setAppliedName] = useState("");
  const [appliedPractice, setAppliedPractice] = useState("");
  const [appliedPosition, setAppliedPosition] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  function handleSearch() {
    setAppliedName(nameQuery);
    setAppliedPractice(practiceFilter);
    setAppliedPosition(positionFilter);
    setActiveLetter("");
    setHasSearched(true);
  }
  function handleClear() {
    setNameQuery(""); setPracticeFilter(""); setPositionFilter("");
    setAppliedName(""); setAppliedPractice(""); setAppliedPosition("");
    setActiveLetter(""); setHasSearched(false);
  }
  function handleLetter(l: string) {
    setActiveLetter(l);
    setNameQuery(""); setPracticeFilter(""); setPositionFilter("");
    setAppliedName(""); setAppliedPractice(""); setAppliedPosition("");
    setHasSearched(true);
  }

  const results = useMemo(() => {
    if (!hasSearched) return [];
    let list = [...team];
    if (activeLetter) {
      list = list.filter((m) => m.lastName.toUpperCase().startsWith(activeLetter));
    } else {
      if (appliedName.trim()) {
        const q = appliedName.trim().toLowerCase();
        list = list.filter((m) => m.name.toLowerCase().includes(q));
      }
      if (appliedPractice) list = list.filter((m) => (m.practiceAreas as string[]).includes(appliedPractice));
      if (appliedPosition) list = list.filter((m) => m.position === appliedPosition);
    }
    return list.sort((a, b) => a.lastName.localeCompare(b.lastName));
  }, [activeLetter, appliedName, appliedPractice, appliedPosition, hasSearched]);

  const subtitleText = activeLetter
    ? `Attorneys with last name beginning with '${activeLetter}'`
    : hasSearched
      ? `Showing ${results.length} attorney${results.length !== 1 ? "s" : ""}`
      : "";

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "var(--space-md) var(--space-lg)",
    background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
    borderRadius: ".5rem", color: "var(--color-text-primary)",
    fontFamily: "var(--font-body)", fontSize: ".9rem", outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: ".7rem", fontWeight: 600,
    textTransform: "uppercase", letterSpacing: ".12em",
    color: "var(--color-text-secondary)", marginBottom: "var(--space-sm)",
  };

  return (
    <div className="content">
      <LexiNav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="text-label">Our People</span>
          <h1>Attorney Search</h1>
          <p className="hero-sub">Search our team by name, practice area, or position. Full profiles and contact details are available to referred clients and registered enquirers.</p>
        </div>
      </div>

      {/* Search panel */}
      <section style={{ padding: "var(--space-4xl) var(--space-3xl) var(--space-2xl)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", padding: "var(--space-2xl) var(--space-xl)" }}>
            <div className="search-panel-grid">
              <div>
                <label style={labelStyle}>Search by name</label>
                <input type="text" value={nameQuery} onChange={(e) => setNameQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. Victoria Chen" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Practice Area</label>
                <select value={practiceFilter} onChange={(e) => setPracticeFilter(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="">All Practice Areas</option>
                  {ALL_PRACTICE_AREAS.map((a) => <option key={a.id} value={a.id} style={{ background: "var(--color-bg-secondary)" }}>{a.label}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Position</label>
                <select value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="">All Positions</option>
                  {POSITIONS.map((p) => <option key={p} value={p} style={{ background: "var(--color-bg-secondary)" }}>{p}</option>)}
                </select>
              </div>
              <div style={{ display: "flex", gap: "var(--space-md)", alignItems: "flex-end" }}>
                <button onClick={handleClear} className="btn btn-sm" style={{ whiteSpace: "nowrap" }}>Clear</button>
                <button onClick={handleSearch} className="btn btn-primary btn-sm" style={{ whiteSpace: "nowrap" }}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet bar */}
      <section style={{ padding: "var(--space-xl) var(--space-3xl)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "var(--space-xs)", alignItems: "center" }}>
          <button onClick={handleClear} style={{ padding: ".3rem .75rem", fontSize: ".75rem", fontWeight: 600, fontFamily: "var(--font-body)", letterSpacing: ".08em", textTransform: "uppercase", border: "1px solid", borderRadius: ".375rem", cursor: "pointer", transition: "all .2s", background: !hasSearched ? "var(--color-accent-primary)" : "transparent", borderColor: !hasSearched ? "var(--color-accent-primary)" : "var(--color-border)", color: !hasSearched ? "var(--color-bg-primary)" : "var(--color-text-secondary)" }}>
            All
          </button>
          {ALPHABET.map((letter) => (
            <button key={letter} onClick={() => handleLetter(letter)} style={{ width: "2rem", height: "2rem", fontSize: ".8rem", fontWeight: 600, fontFamily: "var(--font-body)", border: "1px solid", borderRadius: ".375rem", cursor: "pointer", transition: "all .2s", background: activeLetter === letter ? "var(--color-accent-primary)" : "transparent", borderColor: activeLetter === letter ? "var(--color-accent-primary)" : "var(--color-border)", color: activeLetter === letter ? "var(--color-bg-primary)" : "var(--color-text-secondary)" }}>
              {letter}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: "var(--space-4xl) var(--space-lg) var(--space-5xl)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 var(--space-lg)" }}>

          {/* Pre-search gate */}
          {!hasSearched && (
            <div style={{ padding: "var(--space-5xl)", textAlign: "center", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "var(--space-xl)" }}>🔒</div>
              <h3 style={{ marginBottom: "var(--space-lg)" }}>Attorney Profiles Available Upon Request</h3>
              <p style={{ color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto var(--space-2xl)", lineHeight: "1.8" }}>
                Full attorney profiles, contact details, and direct introductions are available to referred clients and registered enquirers only. Use the search above to find attorneys by name, practice area, or position. To request access or make a referral enquiry, please contact us directly.
              </p>
              <div style={{ display: "flex", gap: "var(--space-lg)", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:enquiries@lexiglobalfirm.com" className="btn btn-primary">
                  Request Access
                </a>
                <a href="/contact" className="btn">
                  Contact the Firm
                </a>
              </div>
            </div>
          )}

          {/* Results table */}
          {hasSearched && (
            <>
              <div style={{ marginBottom: "var(--space-2xl)" }}>
                <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", marginBottom: "var(--space-sm)" }}>Search Results</h2>
                <p style={{ color: "var(--color-text-secondary)", fontSize: ".9rem" }}>{subtitleText}</p>
              </div>

              {results.length === 0 ? (
                <div style={{ padding: "var(--space-5xl)", textAlign: "center", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", color: "var(--color-text-secondary)" }}>
                  No attorneys found matching your criteria.
                </div>
              ) : (
                <div style={{ position: "relative" }}>
                  {/* Blurred table */}
                  <div style={{ filter: "blur(4px)", userSelect: "none", pointerEvents: "none", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", overflow: "hidden" }}>
                    {/* Header */}
                    <div className="attorney-table-grid" style={{ gap: "var(--space-xl)", padding: "var(--space-md) var(--space-2xl)", background: "rgba(255,255,255,.04)", borderBottom: "1px solid var(--color-border)" }}>
                      <div />
                      {["Name", "Position", "Practice Areas / Contact"].map((h) => (
                        <div key={h} style={{ fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--color-text-tertiary)" }}>{h}</div>
                      ))}
                    </div>
                    {/* Rows */}
                    {results.map((m, idx) => (
                      <div key={m.slug} className="attorney-row attorney-table-grid" style={{ gap: "var(--space-xl)", padding: "var(--space-lg) var(--space-2xl)", borderBottom: idx < results.length - 1 ? "1px solid var(--color-border)" : "none", alignItems: "center" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,var(--color-surface-3),var(--color-surface-1))", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                          {m.emoji}
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-text-primary)" }}>
                            {m.lastName}, {m.name.split(" ")[0]}
                          </div>
                          <div style={{ fontSize: ".75rem", color: "var(--color-text-tertiary)", marginTop: ".2rem" }}>{m.specialty}</div>
                        </div>
                        <div style={{ fontSize: ".8rem", color: "var(--color-accent-primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em" }}>
                          {m.position}
                        </div>
                        <div>
                          <div style={{ fontSize: ".85rem", color: "var(--color-text-secondary)", marginBottom: "var(--space-xs)" }}>
                            {(m.practiceAreas as string[]).map(getPracticeLabel).join(", ")}
                          </div>
                          <div style={{ fontSize: ".75rem", color: "var(--color-text-tertiary)", fontStyle: "italic" }}>
                            {m.email}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Access restricted overlay */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-xl)" }}>
                    <div style={{ background: "rgba(15,15,15,0.96)", border: "1px solid rgba(132,204,22,0.25)", borderRadius: "1rem", padding: "var(--space-3xl) var(--space-4xl)", textAlign: "center", maxWidth: "520px", width: "100%", backdropFilter: "blur(12px)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
                      <div style={{ fontSize: "2rem", marginBottom: "var(--space-lg)" }}>🔒</div>
                      <h3 style={{ marginBottom: "var(--space-lg)", fontSize: "clamp(1.25rem,3vw,1.75rem)" }}>Access Restricted</h3>
                      <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.8", marginBottom: "var(--space-2xl)", fontSize: ".95rem" }}>
                        Attorney profiles and contact details are available to referred clients and registered enquirers only. To request access, please contact the firm directly.
                      </p>
                      <div style={{ display: "flex", gap: "var(--space-lg)", justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="mailto:enquiries@lexiglobalfirm.com" className="btn btn-primary">
                          Request Access
                        </a>
                        <a href="/contact" className="btn">
                          Contact the Firm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style>{`.attorney-row { transition: background .2s; }`}</style>
      <LexiFooter />
    </div>
  );
}
