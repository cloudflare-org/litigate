"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PortalPage() {
    const [password, setPassword] = useState("");
    const [ref, setRef] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/portal-auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password, ref: ref.trim() }),
            });
            const data = await res.json();

            if (data.ok) {
                router.push(`/portal/${encodeURIComponent(ref.trim())}`);
            } else {
                setError(data.message ?? "Incorrect access code or reference.");
                setLoading(false);
                inputRef.current?.focus();
            }
        } catch {
            setError("An error occurred. Please try again.");
            setLoading(false);
        }
    }

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0d1420 0%, #141b27 50%, #1a2235 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "'Open Sans', sans-serif",
        }}>
            {/* Subtle gold glow */}
            <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(182,157,116,.06) 0%, transparent 60%)", pointerEvents: "none" }} />

            <div style={{
                width: "100%",
                maxWidth: "440px",
                position: "relative",
                zIndex: 1,
            }}>
                {/* Logo + Home link */}
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <a href="/" style={{ display: "inline-block", textDecoration: "none" }}>
                        <Image
                            src="/lexfirm-logo.png"
                            alt="Lexi Global Firm"
                            width={180}
                            height={50}
                            style={{ height: "50px", width: "auto", margin: "0 auto" }}
                            priority
                        />
                    </a>
                    <div style={{ marginTop: "1rem" }}>
                        <a href="/" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: ".4rem",
                            fontSize: ".72rem",
                            color: "rgba(182,157,116,.55)",
                            textDecoration: "none",
                            fontFamily: "'Open Sans', sans-serif",
                            letterSpacing: ".08em",
                            transition: "color .2s",
                        }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#b69d74")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(182,157,116,.55)")}
                        >
                            ← Back to main site
                        </a>
                    </div>
                </div>

                {/* Card */}
                <div style={{
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid rgba(182,157,116,.18)",
                    borderRadius: ".75rem",
                    padding: "2.5rem",
                    backdropFilter: "blur(12px)",
                }}>
                    {/* Lock icon */}
                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        <div style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            background: "rgba(182,157,116,.1)",
                            border: "1px solid rgba(182,157,116,.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto .875rem",
                            fontSize: "1.4rem",
                        }}>🔒</div>
                        <h1 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 600, color: "#f0ede8", letterSpacing: "-.01em" }}>
                            Client Portal
                        </h1>
                        <p style={{ margin: ".5rem 0 0", fontSize: ".82rem", color: "rgba(159,168,184,.7)", lineHeight: 1.6 }}>
                            Enter your document reference and access code to view your document.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {/* Reference field */}
                        <div>
                            <label style={{ display: "block", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(159,168,184,.6)", marginBottom: ".4rem" }}>
                                Document Reference
                            </label>
                            <input
                                type="text"
                                value={ref}
                                onChange={(e) => setRef(e.target.value)}
                                placeholder="Enter your document reference"
                                required
                                autoComplete="off"
                                style={{
                                    width: "100%",
                                    padding: ".75rem 1rem",
                                    background: "rgba(255,255,255,.05)",
                                    border: "1px solid rgba(182,157,116,.2)",
                                    borderRadius: ".375rem",
                                    color: "#f0ede8",
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontSize: ".9rem",
                                    outline: "none",
                                    boxSizing: "border-box",
                                    transition: "border-color .2s",
                                }}
                                onFocus={(e) => e.target.style.borderColor = "rgba(182,157,116,.6)"}
                                onBlur={(e) => e.target.style.borderColor = "rgba(182,157,116,.2)"}
                            />
                        </div>

                        {/* Password field */}
                        <div>
                            <label style={{ display: "block", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(159,168,184,.6)", marginBottom: ".4rem" }}>
                                Access Code
                            </label>
                            <input
                                ref={inputRef}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your access code"
                                required
                                autoComplete="current-password"
                                style={{
                                    width: "100%",
                                    padding: ".75rem 1rem",
                                    background: "rgba(255,255,255,.05)",
                                    border: "1px solid rgba(182,157,116,.2)",
                                    borderRadius: ".375rem",
                                    color: "#f0ede8",
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontSize: ".9rem",
                                    outline: "none",
                                    boxSizing: "border-box",
                                    transition: "border-color .2s",
                                }}
                                onFocus={(e) => e.target.style.borderColor = "rgba(182,157,116,.6)"}
                                onBlur={(e) => e.target.style.borderColor = "rgba(182,157,116,.2)"}
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <div style={{
                                padding: ".75rem 1rem",
                                background: "rgba(220,38,38,.1)",
                                border: "1px solid rgba(220,38,38,.25)",
                                borderRadius: ".375rem",
                                color: "#fca5a5",
                                fontSize: ".82rem",
                                lineHeight: 1.5,
                            }}>
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                marginTop: ".5rem",
                                padding: ".875rem",
                                background: loading ? "rgba(182,157,116,.4)" : "var(--color-accent-primary, #b69d74)",
                                color: "#141b27",
                                border: "none",
                                borderRadius: ".375rem",
                                fontFamily: "'Open Sans', sans-serif",
                                fontSize: ".8rem",
                                fontWeight: 700,
                                letterSpacing: ".08em",
                                textTransform: "uppercase",
                                cursor: loading ? "not-allowed" : "pointer",
                                transition: "background .2s",
                            }}
                        >
                            {loading ? "Verifying…" : "Access Document"}
                        </button>
                    </form>
                </div>

                {/* Footer note */}
                <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: ".72rem", color: "rgba(159,168,184,.35)", lineHeight: 1.6 }}>
                    This portal is for authorised clients only.<br />
                    If you have not received an access code, contact{" "}
                    <a href="mailto:enquiries@lexfirmglobal.com" style={{ color: "rgba(182,157,116,.6)", textDecoration: "none" }}>
                        enquiries@lexfirmglobal.com
                    </a>
                </p>
            </div>
        </div>
    );
}
