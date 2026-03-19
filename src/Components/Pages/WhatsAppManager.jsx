import React, { useState, useEffect, useCallback } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import { whatsappAPI } from "../../services/api";

const WhatsAppManager = () => {
    const [globalNumber, setGlobalNumber] = useState("");
    const [overrides, setOverrides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });

    const loadData = useCallback(async () => {
        setIsLoading(true);
        try {
            const [global, currentOverrides] = await Promise.all([
                whatsappAPI.getGlobal(),
                whatsappAPI.getOverrides()
            ]);
            
            if (global && global.length > 0) {
                setGlobalNumber(global[0].number);
            }
            setOverrides(currentOverrides);
        } catch (error) {
            console.error("Failed to load WhatsApp data:", error);
            showFeedback("Failed to load data from server", "error");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const showFeedback = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    };

    const handleUpdateGlobal = async () => {
        if (!globalNumber || globalNumber.length < 10) {
            return showFeedback("Please enter a valid WhatsApp number", "error");
        }
        setIsSaving(true);
        try {
            const global = await whatsappAPI.getGlobal();
            if (global && global.length > 0) {
                await whatsappAPI.updateGlobal(global[0].id, { number: globalNumber });
            }
            showFeedback("Global WhatsApp number updated successfully!", "success");
        } catch (error) {
             showFeedback("Update failed: " + error.message, "error");
        } finally {
            setIsSaving(false);
        }
    };

    const handleUpdateOverride = async (id, number) => {
        if (!number || number.length < 10) {
            return showFeedback("Please enter a valid WhatsApp number", "error");
        }
        try {
            await whatsappAPI.updateOverride(id, { number });
            showFeedback("Override updated successfully!", "success");
            loadData(); // Refresh list
        } catch (error) {
            showFeedback("Update failed: " + error.message, "error");
        }
    };

    // Static list of pages for manual overrides if they don't exist
    const pages = [
        { path: "/", label: "Home Page" },
        { path: "/vat-registration-certificate-uae", label: "VAT Certificate" },
        { path: "/corporate-tax-registration-uae", label: "Corporate Tax (A)" },
        { path: "/vat-registration-uae", label: "VAT Registration" },
        { path: "/corporate-tax-registration-in-uae", label: "Corporate Tax (B)" },
    ];

    return (
        <ModernLayout activeTitle="WhatsApp Routing">
            <style>{`
                .manager-container { padding: 32px; max-width: 1000px; margin: 0 auto; }
                .section-card { background: white; border-radius: 20px; border: 1px solid var(--neutral-100); padding: 32px; margin-bottom: 32px; box-shadow: var(--card-shadow); }
                .section-header { margin-bottom: 24px; }
                .section-title { font-size: 20px; font-weight: 800; color: var(--neutral-800); }
                .section-desc { color: var(--neutral-400); font-size: 14px; margin-top: 4px; }
                
                .input-group { display: flex; gap: 16px; align-items: flex-end; }
                .form-control { flex: 1; display: flex; flex-direction: column; gap: 8px; }
                .form-control label { font-size: 12px; font-weight: 700; color: var(--neutral-400); text-transform: uppercase; }
                .form-input { padding: 12px 16px; border-radius: 12px; border: 1px solid var(--neutral-200); background: var(--neutral-50); outline: none; transition: border 0.2s; font-weight: 600; }
                .form-input:focus { border-color: var(--primary); }
                
                .primary-btn { background: var(--primary-dark); color: white; border: 1px solid var(--primary); padding: 12px 24px; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
                .primary-btn:hover { background: var(--primary); color: var(--primary-dark); }
                .primary-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                
                .feedback-toast { position: fixed; bottom: 32px; right: 32px; padding: 16px 24px; border-radius: 12px; color: white; font-weight: 700; box-shadow: 0 10px 25px rgba(0,0,0,0.1); transform: translateY(0); transition: transform 0.3s; z-index: 3000; }
                .feedback-success { background: var(--success); }
                .feedback-error { background: var(--danger); }
                
                .override-grid { display: grid; gap: 16px; }
                .override-item { display: flex; justify-content: space-between; align-items: center; padding: 20px; background: var(--neutral-50); border: 1px solid var(--neutral-100); border-radius: 16px; }
                .page-info .path { font-weight: 700; color: var(--primary-dark); display: block; }
                .page-info .label { font-size: 12px; color: var(--neutral-400); font-weight: 600; }
            `}</style>

            <div className="manager-container">
                <header style={{ marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "32px", fontWeight: "800", color: "var(--neutral-800)" }}>WhatsApp Routing Manager</h1>
                    <p style={{ color: "var(--neutral-400)" }}>Control dynamic WhatsApp routing across all live landing pages.</p>
                </header>

                {/* GLOBAL OVERRIDE */}
                <div className="section-card">
                    <div className="section-header">
                        <h2 className="section-title">Global Default Number</h2>
                        <p className="section-desc">This number is used if no page-specific override is set.</p>
                    </div>
                    <div className="input-group">
                        <div className="form-control">
                            <label>Default Routing Number</label>
                            <input 
                                className="form-input" 
                                value={globalNumber} 
                                onChange={e => setGlobalNumber(e.target.value)}
                                placeholder="e.g. 971501234567" 
                            />
                        </div>
                        <button className="primary-btn" onClick={handleUpdateGlobal} disabled={isSaving}>
                            {isSaving ? "Updating..." : "Set Global Default"}
                        </button>
                    </div>
                </div>

                {/* PAGE OVERRIDES */}
                <div className="section-card">
                    <div className="section-header">
                        <h2 className="section-title">Page Specific Overrides</h2>
                        <p className="section-desc">Customize routing for high-traffic landing pages.</p>
                    </div>
                    
                    <div className="override-grid">
                        {isLoading ? (
                            <div style={{ textAlign: "center", padding: "40px", color: "var(--neutral-400)" }}>Loading routing data...</div>
                        ) : (
                            pages.map(page => {
                                const override = overrides.find(o => o.page_path === page.path);
                                return (
                                    <div key={page.path} className="override-item">
                                        <div className="page-info">
                                            <span className="path">{page.path}</span>
                                            <span className="label">{page.label}</span>
                                        </div>
                                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                            <input 
                                                className="form-input"
                                                style={{ width: "180px" }}
                                                defaultValue={override ? override.number : ""}
                                                id={`input-${page.path}`}
                                                placeholder={globalNumber || "No global set"}
                                            />
                                            <button 
                                                className="primary-btn" 
                                                style={{ padding: "10px 16px", fontSize: "14px" }}
                                                onClick={() => {
                                                    const val = document.getElementById(`input-${page.path}`).value;
                                                    if (override) {
                                                        handleUpdateOverride(override.id, val);
                                                    } else {
                                                         // Logic to create override if it doesn't exist
                                                         whatsappAPI.createOverride({ page_path: page.path, number: val, status: 'active' })
                                                            .then(() => { showFeedback("Override created!", "success"); loadData(); })
                                                            .catch(e => showFeedback("Failed: " + e.message, "error"));
                                                    }
                                                }}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>

            {message.text && (
                <div className={`feedback-toast feedback-${message.type}`}>
                    {message.type === 'success' ? '✅' : '❌'} {message.text}
                </div>
            )}
        </ModernLayout>
    );
};

export default WhatsAppManager;
