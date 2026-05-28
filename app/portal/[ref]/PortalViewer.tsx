"use client";

interface Props {
    docRef: string;
    htmlContent: string;
    fileExists: boolean;
}

export default function PortalViewer({ docRef, htmlContent, fileExists }: Props) {
    return (
        <div style={{
            minHeight: "100vh",
            background: "#1a1a1a",
            fontFamily: "'Open Sans', sans-serif",
        }}>
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
                    <img src="/lexfirm-logo.png" alt="Lexi Global Firm" style={{ height: "36px", width: "auto" }} />
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
                            transition: "background .2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(182,157,116,.2)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(182,157,116,.12)")}
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
                            cursor: "pointer",
                            textDecoration: "none",
                            display: "inline-block",
                            transition: "border-color .2s, color .2s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(182,157,116,.3)"; e.currentTarget.style.color = "rgba(240,237,232,.8)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "rgba(240,237,232,.5)"; }}
                    >
                        ← Home
                    </a>
                </div>
            </div>

            {/* Document area */}
            <div style={{ padding: "2rem clamp(1rem, 4vw, 3rem)" }}>
                {!fileExists ? (
                    <div style={{
                        maxWidth: "600px",
                        margin: "4rem auto",
                        textAlign: "center",
                        padding: "3rem 2rem",
                        background: "rgba(255,255,255,.03)",
                        border: "1px solid rgba(182,157,116,.15)",
                        borderRadius: ".75rem",
                    }}>
                        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📄</div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8", marginBottom: ".75rem", fontSize: "1.3rem" }}>
                            Document Not Yet Available
                        </h2>
                        <p style={{ color: "rgba(159,168,184,.7)", fontSize: ".9rem", lineHeight: 1.7 }}>
                            The document for reference <strong style={{ color: "#b69d74" }}>{docRef}</strong> has not been uploaded yet.
                            Please contact us at{" "}
                            <a href="mailto:enquiries@lexiglobalfirm.com" style={{ color: "#b69d74" }}>
                                enquiries@lexiglobalfirm.com
                            </a>{" "}
                            if you believe this is an error.
                        </p>
                    </div>
                ) : (
                    <div style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                        background: "#fff",
                        borderRadius: ".5rem",
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(0,0,0,.4)",
                    }}>
                        {/* Render the HTML document in an iframe for isolation */}
                        <iframe
                            srcDoc={htmlContent}
                            style={{
                                width: "100%",
                                minHeight: "85vh",
                                border: "none",
                                display: "block",
                            }}
                            title={`Document ${docRef}`}
                            sandbox="allow-same-origin allow-scripts allow-forms"
                        />
                    </div>
                )}
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
