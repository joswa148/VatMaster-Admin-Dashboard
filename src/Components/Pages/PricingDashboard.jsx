import React, { useState, useEffect, useCallback } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import { pricingAPI } from "../../services/api";

const PricingDashboard = () => {
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [data, setData] = useState([]);

    const [formData, setFormData] = useState({
        service_id: "", name: "", price: "", originalPrice: "", currency: "AED", status: "active"
    });

    const load = useCallback(() => {
        pricingAPI.getAll()
            .then(({ list }) => setData(list))
            .catch(console.error);
    }, []);

    useEffect(() => { load(); }, [load]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const existing = data.find(d => d.service_id === formData.service_id);
            if (existing) {
                const updated = await pricingAPI.update(formData.service_id, {
                    name: formData.name, price: formData.price,
                    originalPrice: formData.originalPrice || formData.original_price,
                    currency: formData.currency, status: formData.status
                });
                setData(prev => prev.map(d => d.service_id === updated.service_id ? updated : d));
            } else {
                const created = await pricingAPI.create({
                    service_id: formData.service_id, name: formData.name,
                    price: formData.price, originalPrice: formData.originalPrice,
                    currency: formData.currency, status: formData.status
                });
                setData(prev => [...prev, created]);
            }
            setIsModalOpen(false);
        } catch (e) { alert('Save failed: ' + e.message); }
        finally { setIsSaving(false); }
    };

    const handleToggle = async (row) => {
        try {
            const updated = await pricingAPI.update(row.service_id, {
                name: row.name, price: row.price, originalPrice: row.original_price,
                currency: row.currency, status: row.status === 'active' ? 'inactive' : 'active'
            });
            setData(prev => prev.map(d => d.service_id === updated.service_id ? updated : d));
        } catch (e) { alert('Update failed: ' + e.message); }
    };

    const handleReset = async () => {
        if (!window.confirm("Reset all prices to defaults? This will overwrite current settings.")) return;
        load();
    };

    return (
        <ModernLayout activeTitle="Pricing Manager">
            <style>{`
                .content-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px}
                .header-left h1{margin:0;font-size:28px;font-weight:800;color:var(--neutral-800)}
                .breadcrumbs{color:var(--neutral-400);font-size:14px;margin-top:4px;font-weight:500}
                .add-btn{background:var(--primary);color:white;border:none;padding:12px 24px;border-radius:8px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:8px;box-shadow:0 4px 14px 0 rgba(16,185,129,.39);transition:all .2s}
                .add-btn:hover{transform:translateY(-2px)}
                .btn-secondary{background:white;color:var(--neutral-600);border:1px solid var(--neutral-200);padding:12px 20px;border-radius:8px;font-weight:700;cursor:pointer;transition:all .2s}
                .btn-secondary:hover{background:var(--neutral-50)}
                .table-card{background:white;border-radius:16px;box-shadow:var(--card-shadow);border:1px solid var(--neutral-100);overflow:hidden}
                .card-header{padding:24px;border-bottom:1px solid var(--neutral-100);display:flex;justify-content:space-between;align-items:center}
                .search-input{background:var(--neutral-50);border:1px solid var(--neutral-200);padding:10px 16px;border-radius:8px;width:300px;outline:none;font-weight:500}
                table{width:100%;border-collapse:collapse;text-align:left}
                th{background:var(--neutral-50);padding:16px 24px;font-size:12px;font-weight:800;text-transform:uppercase;color:var(--neutral-400);letter-spacing:.5px}
                td{padding:18px 24px;border-bottom:1px solid var(--neutral-100);font-size:14px;font-weight:500}
                .price-tag{font-weight:800;color:var(--primary-dark);font-size:16px}
                .old-price{text-decoration:line-through;color:var(--neutral-400);font-size:13px;margin-left:8px}
                .badge{padding:6px 12px;border-radius:20px;font-size:12px;font-weight:700;display:inline-flex;align-items:center;gap:6px}
                .badge-active{background:#dcfce7;color:#166534}
                .badge-inactive{background:#f1f5f9;color:#475569}
                .modal-backdrop{position:fixed;inset:0;background:rgba(11,47,53,.4);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000;animation:fadeIn .1s}
                .modal-content{background:white;width:min(500px,95vw);border-radius:24px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,.25);animation:slideUp .3s}
                .modal-header{padding:24px 32px;background:var(--primary-dark);color:white;display:flex;justify-content:space-between;align-items:center}
                .close-x{background:none;border:none;color:white;font-size:24px;cursor:pointer;opacity:.7;transition:opacity .2s}
                .close-x:hover{opacity:1}
                .modal-body{padding:32px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
                .form-group{display:flex;flex-direction:column;gap:6px}
                .form-group.full{grid-column:span 2}
                .form-group label{font-size:12px;font-weight:700;color:var(--neutral-400);text-transform:uppercase}
                .form-input{padding:12px;border-radius:10px;border:1px solid var(--neutral-200);background:var(--neutral-50);font-weight:600;outline:none}
                .modal-footer{padding:24px 32px;background:var(--neutral-50);display:flex;justify-content:flex-end;gap:12px}
                .btn-save{background:var(--primary-dark);color:white;border:none;padding:10px 24px;border-radius:8px;cursor:pointer;font-weight:700}
                .btn-save:disabled{opacity:.6;cursor:not-allowed}
                @keyframes fadeIn{from{opacity:0}to{opacity:1}}
                @keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
            `}</style>

            <header className="content-header">
                <div className="header-left">
                    <h1>Pricing Manager</h1>
                    <div className="breadcrumbs">Dashboard / Pricing</div>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <button onClick={handleReset} className="btn-secondary">🔄 Reload from DB</button>
                    <button onClick={() => {
                        setFormData({ service_id: `service-${Date.now()}`, name: "", price: "", originalPrice: "", currency: "AED", status: "active" });
                        setIsModalOpen(true);
                    }} className="add-btn">+ Add Service</button>
                </div>
            </header>

            <div className="table-card">
                <div className="card-header">
                    <div style={{ fontWeight: 700, color: "var(--neutral-600)" }}>Global Service Rates</div>
                    <input type="text" className="search-input" placeholder="Search services..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <table>
                    <thead>
                        <tr><th>Service Name</th><th>Service ID</th><th>Current Price</th><th>Status</th><th style={{ textAlign: "right" }}>Actions</th></tr>
                    </thead>
                    <tbody>
                        {data.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map((row) => (
                            <tr key={row.service_id}>
                                <td style={{ fontWeight: 700 }}>{row.name}</td>
                                <td style={{ color: "var(--neutral-400)", fontFamily: "monospace" }}>{row.service_id}</td>
                                <td>
                                    <span className="price-tag">{row.currency} {row.price}</span>
                                    <span className="old-price">{row.original_price}</span>
                                </td>
                                <td>
                                    <span className={`badge badge-${row.status}`}>{row.status.charAt(0).toUpperCase() + row.status.slice(1)}</span>
                                </td>
                                <td>
                                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                                        <button onClick={() => {
                                            setFormData({ ...row, originalPrice: row.original_price });
                                            setIsModalOpen(true);
                                        }} style={{ background: "none", border: "none", cursor: "pointer" }}>✏️</button>
                                        <button onClick={() => handleToggle(row)} style={{ background: "none", border: "none", cursor: "pointer" }}>🔄</button>
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
                            <div className="form-group full"><label>Service Name</label><input className="form-input" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} /></div>
                            <div className="form-group"><label>Sale Price</label><input className="form-input" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} /></div>
                            <div className="form-group"><label>Original Price</label><input className="form-input" value={formData.originalPrice || formData.original_price || ""} onChange={e => setFormData({ ...formData, originalPrice: e.target.value })} /></div>
                            <div className="form-group"><label>Currency</label><input className="form-input" value={formData.currency} onChange={e => setFormData({ ...formData, currency: e.target.value })} /></div>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-input" value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => setIsModalOpen(false)} style={{ padding: "10px 20px", borderRadius: "8px", border: "1px solid #ddd", background: "white", cursor: "pointer" }}>Cancel</button>
                            <button className="btn-save" disabled={isSaving} onClick={handleSave}>{isSaving ? 'Saving...' : 'Save Changes'}</button>
                        </div>
                    </div>
                </div>
            )}
        </ModernLayout>
    );
};

export default PricingDashboard;
