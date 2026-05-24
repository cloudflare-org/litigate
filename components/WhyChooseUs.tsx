"use client";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const features = [
    { title: "Available 24/7", description: "Emergency legal support when you need it most" },
    { title: "Proven Track Record", description: "Decades of successful case outcomes" },
    { title: "Client-Focused", description: "Your needs and goals are our priority" },
    { title: "Confidential Service", description: "Complete discretion and privacy guaranteed" },
];

const WhyChooseUs = () => {
    const { contact } = siteData;

    return (
        <section style={{ padding: "8rem 3rem", background: "var(--color-bg-primary)" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }}>
                <div>
                    <span className="text-label" style={{ display: "block", marginBottom: "1.5rem" }}>Why Choose Us</span>
                    <h2 style={{ marginBottom: "1.5rem" }}>Your Trusted Legal Partner</h2>
                    <p style={{ color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: "1.8" }}>
                        We combine institutional excellence with boutique agility. Our counsel is rooted in meticulous preparation, deep sectoral knowledge, and an uncompromising commitment to client outcomes.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {features.map((f, i) => (
                            <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", padding: "1.5rem", background: "var(--color-surface-1)", border: "1px solid var(--color-border)", borderRadius: ".5rem" }}>
                                <div style={{ width: "32px", height: "32px", background: "var(--color-accent-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#050505", fontWeight: 700, flexShrink: 0 }}>&#10003;</div>
                                <div>
                                    <h4 style={{ marginBottom: ".5rem", color: "var(--color-text-primary)" }}>{f.title}</h4>
                                    <p style={{ color: "var(--color-text-tertiary)", fontSize: ".9rem" }}>{f.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ padding: "3rem", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: "1rem", textAlign: "center" }}>
                    <h3 style={{ marginBottom: "1rem" }}>Need Legal Advice?</h3>
                    <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: "1.8" }}>
                        Contact us today for a free initial consultation. Our experienced solicitors are ready to help.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <a href={`tel:${contact.phone}`} className="btn btn-primary" style={{ textAlign: "center" }}>Call Now</a>
                        <Link href="/contact" className="btn" style={{ textAlign: "center" }}>Book Consultation</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
