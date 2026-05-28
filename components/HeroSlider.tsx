"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const { cases, blog } = siteData;

interface TickerItem {
    id: string;
    type: "Case" | "Insight";
    label: string;
    title: string;
    href: string;
}

const ITEMS: TickerItem[] = [
    ...cases.map((c) => ({
        id: c.slug,
        type: "Case" as const,
        label: c.category,
        title: c.title,
        href: `/cases/${c.slug}`,
    })),
    ...blog.map((b) => ({
        id: b.slug,
        type: "Insight" as const,
        label: b.category,
        title: b.title,
        href: `/blog/${b.slug}`,
    })),
];

const TICK_MS = 2800;

export default function HeroSlider() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const advance = useCallback(() => {
        setActive((prev) => (prev + 1) % ITEMS.length);
    }, []);

    // Auto-advance
    useEffect(() => {
        if (paused) return;
        timerRef.current = setInterval(advance, TICK_MS);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [paused, advance]);

    // Scroll active item into view
    useEffect(() => {
        const el = itemRefs.current[active];
        if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [active]);
    return (
        <>
            <style>{`
                /* ── HERO SHELL ── */
                .hs {
                    position: relative;
                    width: 100%;
                    height: 82vh;
                    min-height: 560px;
                    max-height: 780px;
                    overflow: hidden;
                    background: #0d1420;
                    display: flex;
                    align-items: stretch;
                }

                /* ── BACKGROUND ── */
                .hs-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                }
                .hs-bg img {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    transform: translateX(-50%);
                    height: 100%;
                    width: auto;
                    object-fit: contain;
                    object-position: center top;
                    opacity: .15;
                    filter: grayscale(20%);
                }
                /* Left-to-right dark fade so text is always readable */
                .hs-bg::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to right,
                        rgba(13,20,32,.92) 0%,
                        rgba(13,20,32,.55) 40%,
                        rgba(13,20,32,.55) 60%,
                        rgba(13,20,32,.92) 100%
                    );
                }
                /* Subtle gold glow bottom-left */
                .hs-bg::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse 45% 60% at 0% 100%, rgba(182,157,116,.07) 0%, transparent 60%);
                    z-index: 1;
                }

                /* ── INNER GRID ── */
                .hs-inner {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 clamp(1.5rem, 5vw, 5rem);
                    display: grid;
                    grid-template-columns: 1fr 380px;
                    gap: 5rem;
                    align-items: center;
                    padding-top: 140px;
                    padding-bottom: 4rem;
                }

                /* ── LEFT: HERO TEXT ── */
                .hs-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .hs-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: .75rem;
                    font-family: var(--font-body);
                    font-size: .7rem;
                    font-weight: 700;
                    letter-spacing: .2em;
                    text-transform: uppercase;
                    color: var(--color-accent-primary);
                    margin-bottom: 1.25rem;
                }
                .hs-eyebrow::before {
                    content: '';
                    display: block;
                    width: 28px;
                    height: 1px;
                    background: var(--color-accent-primary);
                    flex-shrink: 0;
                }
                .hs-headline {
                    font-family: var(--font-display);
                    font-size: clamp(2.6rem, 4.5vw, 4.25rem);
                    font-weight: 600;
                    line-height: 1.08;
                    letter-spacing: -.025em;
                    color: #f0ede8;
                    margin-bottom: 1.25rem;
                }
                .hs-body {
                    font-family: var(--font-body);
                    font-size: .92rem;
                    color: rgba(159,168,184,.8);
                    line-height: 1.85;
                    max-width: 420px;
                    margin-bottom: 2rem;
                }
                .hs-btns {
                    display: flex;
                    gap: .75rem;
                    flex-wrap: wrap;
                    margin-bottom: 2.5rem;
                }
                .hs-btn-p {
                    display: inline-block;
                    padding: .75rem 1.75rem;
                    background: var(--color-accent-primary);
                    color: #141b27;
                    font-family: var(--font-body);
                    font-size: .78rem;
                    font-weight: 700;
                    letter-spacing: .07em;
                    text-transform: uppercase;
                    text-decoration: none;
                    border-radius: .25rem;
                    border: 2px solid var(--color-accent-primary);
                    transition: background .25s, transform .2s, box-shadow .25s;
                    white-space: nowrap;
                }
                .hs-btn-p:hover {
                    background: var(--color-accent-secondary);
                    border-color: var(--color-accent-secondary);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(182,157,116,.28);
                }
                .hs-btn-s {
                    display: inline-block;
                    padding: .75rem 1.75rem;
                    background: transparent;
                    color: rgba(240,237,232,.8);
                    font-family: var(--font-body);
                    font-size: .78rem;
                    font-weight: 600;
                    letter-spacing: .07em;
                    text-transform: uppercase;
                    text-decoration: none;
                    border-radius: .25rem;
                    border: 2px solid rgba(240,237,232,.18);
                    transition: border-color .25s, color .25s;
                    white-space: nowrap;
                }
                .hs-btn-s:hover {
                    border-color: var(--color-accent-primary);
                    color: var(--color-accent-primary);
                }

                /* Mini stats row */
                .hs-stats {
                    display: flex;
                    gap: 2rem;
                    padding-top: 1.75rem;
                    border-top: 1px solid rgba(182,157,116,.15);
                }
                .hs-stat { text-align: left; }
                .hs-stat-num {
                    font-family: var(--font-display);
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: var(--color-accent-primary);
                    letter-spacing: -.02em;
                    line-height: 1;
                }
                .hs-stat-lbl {
                    font-family: var(--font-body);
                    font-size: .6rem;
                    font-weight: 700;
                    letter-spacing: .14em;
                    text-transform: uppercase;
                    color: rgba(159,168,184,.45);
                    margin-top: .2rem;
                }

                /* ── RIGHT: SCROLL PANEL ── */
                .hs-panel {
                    display: flex;
                    flex-direction: column;
                    height: calc(82vh - 160px);
                    max-height: 520px;
                    min-height: 320px;
                }
                .hs-panel-head {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: .875rem;
                    border-bottom: 1px solid rgba(182,157,116,.18);
                    margin-bottom: .25rem;
                    flex-shrink: 0;
                }
                .hs-panel-title {
                    font-family: var(--font-body);
                    font-size: .65rem;
                    font-weight: 700;
                    letter-spacing: .22em;
                    text-transform: uppercase;
                    color: rgba(159,168,184,.45);
                }
                .hs-panel-count {
                    font-family: var(--font-body);
                    font-size: .65rem;
                    color: rgba(182,157,116,.4);
                    letter-spacing: .1em;
                }

                /* Scrollable list — user scrolls with mouse */
                .hs-list {
                    flex: 1;
                    overflow-y: auto;
                    overflow-x: hidden;
                    scrollbar-width: thin;
                    scrollbar-color: rgba(182,157,116,.2) transparent;
                    /* Fade top and bottom */
                    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%);
                    mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%);
                }
                .hs-list::-webkit-scrollbar { width: 3px; }
                .hs-list::-webkit-scrollbar-track { background: transparent; }
                .hs-list::-webkit-scrollbar-thumb { background: rgba(182,157,116,.2); border-radius: 2px; }

                /* Each item */
                .hs-item {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: .875rem;
                    align-items: start;
                    padding: .875rem .5rem;
                    border-bottom: 1px solid rgba(255,255,255,.04);
                    text-decoration: none;
                    transition: background .25s;
                    border-radius: .25rem;
                    margin: 0 -.5rem;
                    border-left: 2px solid transparent;
                }
                .hs-item:hover { background: rgba(182,157,116,.05); }
                .hs-item:hover .hs-item-title { color: #f0ede8; }
                .hs-item:hover .hs-item-arrow { opacity: 1; transform: translateX(2px); }

                /* Active / highlighted item */
                .hs-item-active {
                    background: rgba(182,157,116,.07);
                    border-left-color: var(--color-accent-primary, #b69d74);
                }
                .hs-item-active .hs-item-meta { color: var(--color-accent-primary, #b69d74) !important; }
                .hs-item-active .hs-item-title { color: #f0ede8 !important; }
                .hs-item-active .hs-item-arrow { opacity: 1 !important; }
                .hs-item-active .hs-item-icon.case {
                    background: rgba(182,157,116,.22);
                    border-color: rgba(182,157,116,.45);
                }

                @keyframes hsTick { from { width: 0; } to { width: 100%; } }

                .hs-item-icon {
                    width: 28px;
                    height: 28px;
                    border-radius: .25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin-top: 1px;
                    font-size: .65rem;
                    font-weight: 700;
                    font-family: var(--font-body);
                    letter-spacing: .05em;
                }
                .hs-item-icon.case {
                    background: rgba(182,157,116,.12);
                    color: var(--color-accent-primary);
                    border: 1px solid rgba(182,157,116,.2);
                }
                .hs-item-icon.insight {
                    background: rgba(159,168,184,.08);
                    color: rgba(159,168,184,.6);
                    border: 1px solid rgba(159,168,184,.12);
                }

                .hs-item-body { min-width: 0; }
                .hs-item-meta {
                    font-family: var(--font-body);
                    font-size: .6rem;
                    font-weight: 700;
                    letter-spacing: .14em;
                    text-transform: uppercase;
                    color: rgba(159,168,184,.4);
                    margin-bottom: .3rem;
                }
                .hs-item-title {
                    font-family: var(--font-display);
                    font-size: .88rem;
                    line-height: 1.35;
                    color: rgba(240,237,232,.55);
                    transition: color .2s;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .hs-item-arrow {
                    font-size: .7rem;
                    color: var(--color-accent-primary);
                    opacity: 0;
                    transition: opacity .2s, transform .2s;
                    margin-top: .2rem;
                    display: inline-block;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 1024px) {
                    .hs-inner { grid-template-columns: 1fr 300px; gap: 3rem; }
                }
                @media (max-width: 768px) {
                    .hs {
                        height: auto;
                        max-height: none;
                        min-height: 0;
                        padding-bottom: 3rem;
                    }
                    .hs-inner {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                        padding-top: 120px;
                        padding-bottom: 2rem;
                    }
                    .hs-panel { height: 280px; max-height: 280px; }
                    .hs-headline { font-size: clamp(2rem, 8vw, 3rem); }
                    .hs-stats { gap: 1.25rem; }
                }
                @media (max-width: 480px) {
                    .hs-btns { flex-direction: column; }
                    .hs-btn-p, .hs-btn-s { text-align: center; }
                    .hs-stats { flex-wrap: wrap; gap: 1rem; }
                }
            `}</style>

            <section className="hs" aria-label="Hero">

                {/* Background */}
                <div className="hs-bg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/lawyer.png" alt="" aria-hidden="true" />
                </div>

                <div className="hs-inner">

                    {/* LEFT — hero text */}
                    <div className="hs-text">
                        <p className="hs-eyebrow">Founded by Howard Weitzman · Since 2013</p>
                        <h1 className="hs-headline">
                            Counsel Without<br />Compromise.
                        </h1>
                        <p className="hs-body">
                            Lexi Global Firm serves a select group of clients who require the highest level of legal counsel and the strictest standards of confidentiality. We do not seek publicity. We seek results.
                        </p>
                        <div className="hs-btns">
                            <Link href="/contact" className="hs-btn-p">Request a Consultation</Link>
                            <Link href="/about" className="hs-btn-s">About the Firm</Link>
                        </div>
                        <div className="hs-stats">
                            {[
                                { num: "$3.2B+", lbl: "Assets Recovered" },
                                { num: "500+", lbl: "Matters Concluded" },
                                { num: "60+", lbl: "Countries" },
                                { num: "12+", lbl: "Years" },
                            ].map((s) => (
                                <div key={s.lbl} className="hs-stat">
                                    <div className="hs-stat-num">{s.num}</div>
                                    <div className="hs-stat-lbl">{s.lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — auto-scroll ticker */}
                    <div
                        className="hs-panel"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div className="hs-panel-head">
                            <span className="hs-panel-title">Cases &amp; Insights</span>
                            <span className="hs-panel-count">{String(active + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}</span>
                        </div>
                        <div className="hs-list" ref={listRef}>
                            {ITEMS.map((item, i) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`hs-item${i === active ? " hs-item-active" : ""}`}
                                    ref={(el) => { itemRefs.current[i] = el; }}
                                    onClick={() => { setActive(i); setPaused(true); }}
                                >
                                    <span className={`hs-item-icon ${item.type === "Case" ? "case" : "insight"}`}>
                                        {item.type === "Case" ? "C" : "I"}
                                    </span>
                                    <span className="hs-item-body">
                                        <span className="hs-item-meta">{item.type} · {item.label}</span>
                                        <span className="hs-item-title">
                                            {item.title} <span className="hs-item-arrow">›</span>
                                        </span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                        {/* Progress bar under panel */}
                        {!paused && (
                            <div style={{ height: "2px", background: "rgba(182,157,116,.1)", borderRadius: "1px", marginTop: ".75rem", overflow: "hidden", flexShrink: 0 }}>
                                <div
                                    key={active}
                                    style={{
                                        height: "100%",
                                        background: "var(--color-accent-primary, #b69d74)",
                                        borderRadius: "1px",
                                        animation: `hsTick ${TICK_MS}ms linear forwards`,
                                    }}
                                />
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </>
    );
}
