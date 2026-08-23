"use client";
import { useState, useMemo } from "react";
import { Lock, User } from "lucide-react";
import { LexiNav, LexiFooter } from "@/components/LexiLayout";
import { SITE_BRAND, SITE_DATA } from "@/data/site";
import { TEAM_POSITIONS, TEAM_PRACTICE_AREAS } from "@/data/teamFilters";

const { team } = SITE_DATA;

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getPracticeLabel(id: string) {
  return TEAM_PRACTICE_AREAS.find((a) => a.id === id)?.label ?? id;
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

  return (
    <div className="content">
      <LexiNav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="text-label">Our People</span>
          <h1>Attorney Search</h1>
          <p className="hero-sub">
            Search our team by name, practice area, or position. Full profiles and contact details are available to referred clients and registered enquirers.
          </p>
        </div>
      </div>

      <section className="team-section team-section-panel">
        <div className="team-inner">
          <div className="team-filter-wrap">
            <div className="search-panel-grid">
              <div>
                <label className="team-filter-label">Search by name</label>
                <input
                  type="text"
                  value={nameQuery}
                  onChange={(e) => setNameQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. Victoria Chen"
                  className="team-field"
                />
              </div>
              <div>
                <label className="team-filter-label">Practice Area</label>
                <select value={practiceFilter} onChange={(e) => setPracticeFilter(e.target.value)} className="team-field team-select">
                  <option value="">All Practice Areas</option>
                  {TEAM_PRACTICE_AREAS.map((a) => (
                    <option key={a.id} value={a.id}>{a.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="team-filter-label">Position</label>
                <select value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} className="team-field team-select">
                  <option value="">All Positions</option>
                  {TEAM_POSITIONS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="team-filter-actions">
                <button onClick={handleClear} className="btn btn-sm team-nowarp">Clear</button>
                <button onClick={handleSearch} className="btn btn-primary btn-sm team-nowarp">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section team-section-alpha">
        <div className="team-inner team-alpha-wrap">
          <button
            onClick={handleClear}
            className={`team-alpha-btn team-alpha-btn-all ${!hasSearched ? "team-alpha-btn-active" : ""}`}
          >
            All
          </button>
          {ALPHABET.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetter(letter)}
              className={`team-alpha-btn team-alpha-btn-letter ${activeLetter === letter ? "team-alpha-btn-active" : ""}`}
            >
              {letter}
            </button>
          ))}
        </div>
      </section>

      <section className="team-section team-section-results">
        <div className="team-inner">
          {!hasSearched && (
            <div className="team-empty-gate">
              <div className="team-empty-icon">
                <Lock size={32} strokeWidth={1.5} />
              </div>
              <h3 className="team-empty-title">Attorney Profiles Available Upon Request</h3>
              <p className="team-empty-copy">
                Full attorney profiles, contact details, and direct introductions are available to referred clients and registered enquirers only. Use the search above to find attorneys by name, practice area, or position. To request access or make a referral enquiry, please contact us directly.
              </p>
              <div className="team-btn-row">
                <a href={SITE_BRAND.primaryEmailMailto} className="btn btn-primary">Request Access</a>
                <a href="/contact" className="btn">Contact the Firm</a>
              </div>
            </div>
          )}

          {hasSearched && (
            <>
              <div className="team-results-head">
                <h2 className="team-results-title">Search Results</h2>
                <p className="team-results-subtitle">{subtitleText}</p>
              </div>

              {results.length === 0 ? (
                <div className="team-no-results">
                  No attorneys found matching your criteria.
                </div>
              ) : (
                <div className="team-table-wrap">
                  <div className="team-table-blur">
                    <div className="attorney-table-grid team-table-head">
                      <div />
                      {["Name", "Position", "Practice Areas / Contact"].map((h) => (
                        <div key={h} className="team-table-colhead">{h}</div>
                      ))}
                    </div>
                    {results.map((m) => (
                      <div key={m.slug} className="attorney-table-grid team-table-row">
                        <div className="team-user-badge">
                          <User size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="team-attorney-name">
                            {m.lastName}, {m.name.split(" ")[0]}
                          </div>
                          <div className="team-attorney-specialty">{m.specialty}</div>
                        </div>
                        <div className="team-position">
                          {m.position}
                        </div>
                        <div>
                          <div className="team-practices">
                            {(m.practiceAreas as string[]).map(getPracticeLabel).join(", ")}
                          </div>
                          <div className="team-email">
                            {m.email}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="team-overlay">
                    <div className="team-overlay-card">
                      <div className="team-overlay-icon">
                        <Lock size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="team-overlay-title">Access Restricted</h3>
                      <p className="team-overlay-copy">
                        Attorney profiles and contact details are available to referred clients and registered enquirers only. To request access, please contact the firm directly.
                      </p>
                      <div className="team-btn-row">
                        <a href={SITE_BRAND.primaryEmailMailto} className="btn btn-primary">Request Access</a>
                        <a href="/contact" className="btn">Contact the Firm</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <LexiFooter />
    </div>
  );
}
