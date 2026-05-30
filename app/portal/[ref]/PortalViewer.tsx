"use client";

interface Props {
    docRef: string;
    docUrl: string;
}

export default function PortalViewer({ docRef, docUrl }: Props) {
    return (
        <div style={{ minHeight: "100vh", background: "#1a1a1a", fontFamily: "'Open Sans', sans-serif" }}>

            {/* Top bar */}
            <div style={{
                background: "#0d1420",
                borderBottom: "1px solid rgba(182,157,116,.2)",
                padding: ".875rem clamp(1rem, 4vw, 3rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/lexfirm-logo.png" alt="Lex Firm Global" style={{ height: "36px", width: "auto" }} />
                    <div style={{ width: "1px", height: "28px", background: "rgba(182,157,116,.2)" }} />
                    <div>
                        <div style={{ fontSize: ".65rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(182,157,116,.6)" }}>Client Portal</div>
                        <div style={{ fontSize: ".8rem", color: "rgba(240,237,232,.6)", marginTop: ".1rem" }}>Ref: {docRef}</div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: ".75rem" }}>
                    <button
                        onClick={() => window.print()}
                        style={{
                            padding: ".5rem 1.25rem",
                            background: "rgba(182,157,116,.12)",
                            border: "1px solid rgba(182,157,116,.25)",
                            borderRadius: ".3rem",
                            color: "#b69d74",
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: ".75rem",
                            fontWeight: 600,
                            letterSpacing: ".06em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                        }}
                    >
                        Print / Save PDF
                    </button>
                    <a
                        href="/"
                        style={{
                            padding: ".5rem 1.25rem",
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,.1)",
                            borderRadius: ".3rem",
                            color: "rgba(240,237,232,.5)",
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: ".75rem",
                            fontWeight: 600,
                            letterSpacing: ".06em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            display: "inline-block",
                        }}
                    >
                        ← Home
                    </a>
                </div>
            </div>

            {/* Document iframe */}
            <div style={{ padding: "2rem clamp(1rem, 4vw, 3rem)" }}>
                <div style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: ".5rem",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,.4)",
                }}>
                    <iframe
                        src={docUrl}
                        style={{ width: "100%", minHeight: "85vh", border: "none", display: "block" }}
                        title={`Document ${docRef}`}
                        sandbox="allow-same-origin allow-scripts allow-forms"
                        onError={() => {/* handled by iframe showing 404 */ }}
                    />
                </div>
            </div>

            <style>{`
                @media print {
                    div[style*="background: #0d1420"] { display: none !important; }
                    div[style*="background: #1a1a1a"] { background: white !important; padding: 0 !important; }
                    iframe { min-height: 100vh !important; }
                }
            `}</style>
        </div>
    );
}
