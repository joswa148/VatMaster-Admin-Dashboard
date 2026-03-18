import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";

const PricingDashboard = () => {
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);

    // Initial default data
    const initialData = [
        // VAT Return Filing
        { id: "vat-return-micro", name: "VAT Return Filing - Micro", price: "499", originalPrice: "999", currency: "AED", status: "active" },
        { id: "vat-return-small", name: "VAT Return Filing - Small", price: "999", originalPrice: "1999", currency: "AED", status: "active" },
        { id: "vat-return-medium", name: "VAT Return Filing - Medium", price: "1499", originalPrice: "2999", currency: "AED", status: "active" },
        
        // VAT Registration
        { id: "vat-reg-single", name: "VAT Registration - Single", price: "125", originalPrice: "499", currency: "AED", status: "active" },
        { id: "vat-reg-promo", name: "VAT Registration - Promo", price: "99", originalPrice: "299", currency: "AED", status: "active" },
        { id: "vat-reg-group", name: "VAT Registration - Group", price: "499", originalPrice: "999", currency: "AED", status: "active" },

        // Accounting & Bookkeeping
        { id: "accounting-micro", name: "Accounting & Bookkeeping - Micro", price: "499", originalPrice: "1499", currency: "AED", status: "active" },
        { id: "accounting-small", name: "Accounting & Bookkeeping - Small", price: "999", originalPrice: "2499", currency: "AED", status: "active" },
        { id: "accounting-medium", name: "Accounting & Bookkeeping - Medium", price: "1499", originalPrice: "3499", currency: "AED", status: "active" },

        // De-Registration
        { id: "dereg-individual", name: "VAT De-Registration - Individual", price: "499", originalPrice: "1499", currency: "AED", status: "active" },
        { id: "dereg-group-3", name: "VAT De-Registration - Group (3)", price: "999", originalPrice: "2499", currency: "AED", status: "active" },
        { id: "dereg-group-5", name: "VAT De-Registration - Group (5)", price: "1499", originalPrice: "3499", currency: "AED", status: "active" },

        // Home Page Specific / Additional
        { id: "corporate-tax-reg", name: "Corporate Tax Registration", price: "125", originalPrice: "499", currency: "AED", status: "active" },
        { id: "outsource-cfo", name: "Outsource CFO", price: "499", originalPrice: "999", currency: "AED", status: "active" },
        { id: "vat-consultancy", name: "VAT & TAX Consultancy", price: "499", originalPrice: "999", currency: "AED", status: "active" },
    ];

    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('vat_masters_pricing_raw_data');
        if (!saved) return initialData;
        try {
            const parsed = JSON.parse(saved);
            // Merge logic: Add any missing services from initialData to the existing data
            const existingIds = new Set(parsed.map(item => item.id));
            const missingServices = initialData.filter(item => !existingIds.has(item.id));
            
            if (missingServices.length > 0) {
                console.log("Merging missing services:", missingServices);
                return [...parsed, ...missingServices];
            }
            return parsed;
        } catch (e) {
            console.error("Error parsing saved pricing data:", e);
            return initialData;
        }
    });

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: "",
        originalPrice: "",
        currency: "AED",
        status: "active"
    });

    // Save to localStorage whenever data changes
    useEffect(() => {
        const syncTimer = setTimeout(() => {
            setIsSyncing(true);
            const saveTimer = setTimeout(() => {
                localStorage.setItem('vat_masters_pricing_raw_data', JSON.stringify(data));
                
                // Optimized config for the hook
                const config = {};
                data.forEach(item => {
                    config[item.id] = item;
                });
                localStorage.setItem('vat_masters_pricing_config', JSON.stringify(config));
                setIsSyncing(false);
            }, 800);
            return () => clearTimeout(saveTimer);
        }, 0);
        return () => clearTimeout(syncTimer);
    }, [data]);

    return (
        <ModernLayout activeTitle="Pricing Manager">
            <style>{`
                .content-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
                .header-left h1 { margin: 0; font-size: 28px; font-weight: 800; color: var(--neutral-800); }
                .sync-badge { fontSize: 12px; padding: 4px 8px; border-radius: 4px; font-weight: 700; height: fit-content; }
                .breadcrumbs { color: var(--neutral-400); font-size: 14px; margin-top: 4px; font-weight: 500; }
                
                .add-btn { background: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39); transition: all 0.2s; }
                .add-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45); }

                .table-card { background: white; border-radius: 16px; box-shadow: var(--card-shadow); border: 1px solid var(--neutral-100); overflow: hidden; }
                .card-header { padding: 24px; border-bottom: 1px solid var(--neutral-100); display: flex; justify-content: space-between; align-items: center; }
                .search-input { background: var(--neutral-50); border: 1px solid var(--neutral-200); padding: 10px 16px; border-radius: 8px; width: 300px; outline: none; font-weight: 500; }

                table { width: 100%; border-collapse: collapse; text-align: left; }
                th { background: var(--neutral-50); padding: 16px 24px; font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--neutral-400); letter-spacing: 0.5px; }
                td { padding: 18px 24px; border-bottom: 1px solid var(--neutral-100); font-size: 14px; font-weight: 500; }

                .price-tag { font-weight: 800; color: var(--primary-dark); font-size: 16px; }
                .old-price { text-decoration: line-through; color: var(--neutral-400); font-size: 13px; margin-left: 8px; }
                
                .badge { padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; }
                .badge-active { background: #dcfce7; color: #166534; }
                .badge-inactive { background: #f1f5f9; color: #475569; }

                /* Modal Styles */
                .modal-backdrop { position: fixed; inset: 0; background: rgba(11, 47, 53, 0.4); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 2000; animation: fadeIn 0.1s; }
                .modal-content { background: white; width: min(500px, 95vw); border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); animation: slideUp 0.3s; }
                .modal-header { padding: 24px 32px; background: var(--primary-dark); color: white; display: flex; justify-content: space-between; align-items: center; }
                .close-x { background: none; border: none; color: white; font-size: 24px; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; }
                .close-x:hover { opacity: 1; }
                .modal-body { padding: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .form-group { display: flex; flex-direction: column; gap: 6px; }
                .form-group.full { grid-column: span 2; }
                .form-group label { font-size: 12px; font-weight: 700; color: var(--neutral-400); text-transform: uppercase; }
                .form-input { padding: 12px; border-radius: 10px; border: 1px solid var(--neutral-200); background: var(--neutral-50); font-weight: 600; outline: none; }
                .modal-footer { padding: 24px 32px; background: var(--neutral-50); display: flex; justify-content: flex-end; gap: 12px; }
            `}</style>

            <header className="content-header">
                <div className="header-left">
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <h1>Pricing Manager</h1>
                        {isSyncing ? (
                            <span className="sync-badge" style={{ background: "#fef3c7", color: "#92400e" }}>⏳ Syncing...</span>
                        ) : (
                            <span className="sync-badge" style={{ background: "#d1fae5", color: "#065f46" }}>✅ Cloud Synced</span>
                        )}
                    </div>
                    <div className="breadcrumbs">Dashboard / Pricing</div>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <button onClick={() => {
                        if (window.confirm("Are you sure you want to reset all prices to defaults? This will overwrite your current settings.")) {
                            setData(initialData);
                        }
                    }} className="btn-secondary">
                        🔄 Reset to Defaults
                    </button>
                    <button onClick={() => {
                        setFormData({ id: `service-${Date.now()}`, name: "", price: "", originalPrice: "", currency: "AED", status: "active" });
                        setIsModalOpen(true);
                    }} className="btn-primary">
                        + Add Service
                    </button>
                </div>
            </header>

            <div className="table-card">
                <div className="card-header">
                    <div style={{ fontWeight: 700, color: "var(--neutral-600)" }}>Global Service Rates</div>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search services..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Service ID</th>
                            <th>Current Price</th>
                            <th>Status</th>
                            <th style={{ textAlign: "right" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map((row) => (
                            <tr key={row.id}>
                                <td style={{ fontWeight: 700 }}>{row.name}</td>
                                <td style={{ color: "var(--neutral-400)", fontFamily: "monospace" }}>{row.id}</td>
                                <td>
                                    <span className="price-tag">{row.currency} {row.price}</span>
                                    <span className="old-price">{row.originalPrice}</span>
                                </td>
                                <td>
                                    <span className={`badge badge-${row.status}`}>
                                        {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                                    </span>
                                </td>
                                <td>
                                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                                        <button onClick={() => {
                                            setFormData(row);
                                            setIsModalOpen(true);
                                        }} style={{ background: "none", border: "none", cursor: "pointer" }}>✏️</button>
                                        <button onClick={() => {
                                            setData(data.map(d => d.id === row.id ? {...d, status: d.status === 'active' ? 'inactive' : 'active'} : d));
                                        }} style={{ background: "none", border: "none", cursor: "pointer" }}>🔄</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Edit Service Rate</h2>
                            <button className="close-x" onClick={() => setIsModalOpen(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group full">
                                <label>Service Name</label>
                                <input className="form-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Sale Price</label>
                                <input className="form-input" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Original Price</label>
                                <input className="form-input" value={formData.originalPrice} onChange={e => setFormData({...formData, originalPrice: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Currency</label>
                                <input className="form-input" value={formData.currency} onChange={e => setFormData({...formData, currency: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-input" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => setIsModalOpen(false)} style={{ padding: "10px 20px", borderRadius: "8px", border: "1px solid #ddd", background: "white", cursor: "pointer" }}>Cancel</button>
                            <button onClick={() => {
                                if (data.find(d => d.id === formData.id)) {
                                    setData(data.map(d => d.id === formData.id ? formData : d));
                                } else {
                                    setData([...data, formData]);
                                }
                                setIsModalOpen(false);
                            }} style={{ padding: "10px 24px", borderRadius: "8px", border: "none", background: "var(--primary-dark)", color: "white", cursor: "pointer", fontWeight: 700 }}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </ModernLayout>
    );
};

export default PricingDashboard;
