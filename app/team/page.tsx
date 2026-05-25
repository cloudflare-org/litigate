"use client";
import { useState, useMemo } from "react";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import siteData from "@/data/siteData.json";

const { team } = siteData;

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const POSITIONS = ["Managing Partner", "Senior Partner", "Partner", "Senior Associate", "Associate"];
const ALL_PRACTICE_AREAS = [
  { id: "international-arbitration", label: "International Arbitration" },
  { id: "corporate-litigation", label: "Corporate Litigation" },
  { id: "asset-recovery", label: "Asset Recovery" },
  { id: "private-wealth", label: "Private Wealth" },
  { id: "regulatory-defence", label: "Regulatory Defence" },
  { id: "investment-law", label: "Investment Law" },
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

  function handleSearch() {
    setAppliedName(nameQuery);
    setAppliedPractice(practiceFilter);
    setAppliedPosition(positionFilter);
    setActiveLetter("");
  }
  function handleClear() {
    setNameQuery(""); setPracticeFilter(""); setPositionFilter("");
    setAppliedName(""); setAppliedPractice(""); setAppliedPosition("");
    setActiveLetter("");
  }
  function handleLetter(l: string) {
    setActiveLetter(l);
    setNameQuery(""); setPracticeFilter(""); setPositionFilter("");
    setAppliedName(""); setAppliedPractice(""); setAppliedPosition("");
  }

  const results = useMemo(() => {
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
  }, [activeLetter, appliedName, appliedPractice, appliedPosition]);

  const isFiltered = activeLetter || appliedName || appliedPractice || appliedPosition;
  const subtitleText = activeLetter
    ? `Attorneys with last name beginning with '${activeLetter}'`
    : isFiltered
      ? `Showing ${results.length} attorney${results.length !== 1 ? "s" : ""}`
      : `Showing all ${results.length} attorneys`;

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
          <p className="hero-sub">Every matter is led by a partner. Search our team by name, practice area, or position.</p>
        </div>
      </div>

      {/* Search panel */}
      <section style={{ padding: "var(--space-4xl) var(--space-3xl) var(--space-2xl)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", padding: "var(--space-2xl) var(--space-3xl)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "var(--space-xl)", alignItems: "flex-end" }}>
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
              <div style={{ display: "flex", gap: "var(--space-md)" }}>
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
          <button onClick={handleClear} style={{ padding: ".3rem .75rem", fontSize: ".75rem", fontWeight: 600, fontFamily: "var(--font-body)", letterSpacing: ".08em", textTransform: "uppercase", border: "1px solid", borderRadius: ".375rem", cursor: "pointer", transition: "all .2s", background: activeLetter === "" ? "var(--color-accent-primary)" : "transparent", borderColor: activeLetter === "" ? "var(--color-accent-primary)" : "var(--color-border)", color: activeLetter === "" ? "var(--color-bg-primary)" : "var(--color-text-secondary)" }}>
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
      <section style={{ padding: "var(--space-4xl) var(--space-3xl) var(--space-5xl)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "var(--space-2xl)" }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", marginBottom: "var(--space-sm)" }}>Search Results</h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: ".9rem" }}>{subtitleText}</p>
          </div>

          {results.length === 0 ? (
            <div style={{ padding: "var(--space-5xl)", textAlign: "center", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", color: "var(--color-text-secondary)" }}>
              No attorneys found matching your criteria.
            </div>
          ) : (
            <div style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", overflow: "hidden" }}>
              {/* Header row */}
              <div style={{ display: "grid", gridTemplateColumns: "56px 1fr 200px 1fr", gap: "var(--space-xl)", padding: "var(--space-md) var(--space-2xl)", background: "rgba(255,255,255,.04)", borderBottom: "1px solid var(--color-border)" }}>
                <div />
                {["Name", "Position", "Practice Areas"].map((h) => (
                  <div key={h} style={{ fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--color-text-tertiary)" }}>{h}</div>
                ))}
              </div>
              {/* Data rows */}
              {results.map((m, idx) => (
                <a key={m.slug} href={`/team/${m.slug}`} className="attorney-row" style={{ display: "grid", gridTemplateColumns: "56px 1fr 200px 1fr", gap: "var(--space-xl)", padding: "var(--space-lg) var(--space-2xl)", borderBottom: idx < results.length - 1 ? "1px solid var(--color-border)" : "none", textDecoration: "none", alignItems: "center", transition: "background .2s" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,var(--color-surface-3),var(--color-surface-1))", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                    {m.emoji}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-text-primary)" }}>
                    {m.lastName}, {m.name.split(" ")[0]}
                  </div>
                  <div style={{ fontSize: ".8rem", color: "var(--color-accent-primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em" }}>
                    {m.position}
                  </div>
                  <div style={{ fontSize: ".85rem", color: "var(--color-text-secondary)" }}>
                    {(m.practiceAreas as string[]).map(getPracticeLabel).join(", ")}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`.attorney-row:hover { background: rgba(132,204,22,0.04) !important; }`}</style>

      <LexiFooter />
    </div>
  );
}
