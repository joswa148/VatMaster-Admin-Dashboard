import React from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";

const WhatsAppManager = () => {
    // Static list of pages from meta.js
    const pages = [
        { path: "/", id: 1 },
        { path: "/vat-registration-certificate-uae", id: 2 },
        { path: "/corporate-tax-registration-uae", id: 3 },
        { path: "/vat-registration-uae", id: 4 },
        { path: "/corporate-tax-registration-in-uae", id: 5 },
    ];

    return (
        <ModernLayout activeTitle="WhatsApp Routing">
            <div style={{ padding: "20px" }}>
                <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "8px", color: "var(--neutral-800)" }}>
                    WhatsApp Routing
                </h1>
                <p style={{ color: "var(--neutral-400)", marginBottom: "30px", fontSize: "14px" }}>
                    Configure separate routing numbers for each landing page.
                </p>

                <div style={{ display: "grid", gap: "20px" }}>
                    {pages.map((page) => (
                        <div 
                            key={page.id} 
                            style={{ 
                                background: "white", 
                                border: "1px solid var(--neutral-200)", 
                                borderRadius: "16px", 
                                padding: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px",
                                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)"
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: "12px", color: "var(--neutral-400)", textTransform: "uppercase", fontWeight: "bold", marginBottom: "4px" }}>
                                    Landing Page Path
                                </div>
                                <div style={{ fontSize: "16px", fontWeight: "700", color: "var(--primary)" }}>
                                    {page.path}
                                </div>
                            </div>

                            <div style={{ flex: 1 }}>
                                <label style={{ display: "block", fontSize: "12px", color: "var(--neutral-400)", textTransform: "uppercase", fontWeight: "bold", marginBottom: "4px" }}>
                                    Routing Number
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Enter Routing Number (e.g., 971XXXXXXXXX)"
                                    style={{ 
                                        width: "100%", 
                                        background: "white", 
                                        border: "1px solid var(--neutral-200)", 
                                        borderRadius: "8px", 
                                        padding: "12px", 
                                        color: "var(--neutral-800)",
                                        outline: "none",
                                        fontWeight: "500"
                                    }}
                                />
                            </div>

                            <button 
                                style={{ 
                                    background: "var(--primary-dark)", 
                                    color: "#fff", 
                                    border: `1px solid var(--primary)`, 
                                    borderRadius: "8px", 
                                    padding: "12px 24px", 
                                    fontWeight: "bold", 
                                    cursor: "pointer",
                                    height: "fit-content",
                                    alignSelf: "flex-end",
                                    transition: "all 0.2s"
                                }}
                                onMouseOver={(e) => { e.target.style.background = "var(--primary)"; e.target.style.color = "var(--primary-dark)"; }}
                                onMouseOut={(e) => { e.target.style.background = "var(--primary-dark)"; e.target.style.color = "#fff"; }}
                                onClick={() => alert(`Saving for ${page.path}...`)}
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </ModernLayout>
    );
};

export default WhatsAppManager;
