import React, { useState, useEffect, useCallback } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import { metaAPI } from "../../services/api";

const MetaDashboard = () => {
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({ page_id: "", page: "", title: "", description: "", keywords: "" });

    const load = useCallback(() => {
        metaAPI.getAll().then(setData).catch(console.error);
    }, []);

    useEffect(() => { load(); }, [load]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const updated = await metaAPI.update(formData.page_id, {
                title: formData.title, description: formData.description, keywords: formData.keywords
            });
            setData(prev => prev.map(d => d.page_id === updated.page_id ? updated : d));
            setIsModalOpen(false);
        } catch (e) { alert('Save failed: ' + e.message); }
        finally { setIsSaving(false); }
    };

    return (
        <ModernLayout activeTitle="Meta settings">
            <style>{`
                .content-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px}
                .header-left h1{margin:0;font-size:28px;font-weight:800;color:var(--neutral-800)}
                .table-card{background:white;border-radius:16px;box-shadow:var(--card-shadow);border:1px solid var(--neutral-100);overflow:hidden}
                .card-header{padding:24px;border-bottom:1px solid var(--neutral-100);display:flex;justify-content:space-between;align-items:center}
                .search-input{background:var(--neutral-50);border:1px solid var(--neutral-200);padding:10px 16px;border-radius:8px;width:300px;outline:none}
                table{width:100%;border-collapse:collapse}
                th{background:var(--neutral-50);padding:16px 24px;font-size:12px;font-weight:800;text-transform:uppercase;color:var(--neutral-400);text-align:left}
                td{padding:18px 24px;border-bottom:1px solid var(--neutral-100);font-size:14px;font-weight:500}
                .meta-title{font-weight:700;color:#1e40af}
                .meta-desc{font-size:13px;color:var(--neutral-400);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
                .modal-backdrop{position:fixed;inset:0;background:rgba(11,47,53,.4);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000}
                .modal-content{background:white;width:min(600px,95vw);border-radius:24px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}
                .modal-header{padding:24px 32px;background:var(--primary-dark);color:white;display:flex;justify-content:space-between}
                .modal-body{padding:32px;display:flex;flex-direction:column;gap:20px}
                .form-group{display:flex;flex-direction:column;gap:6px}
                .form-group label{font-size:12px;font-weight:700;color:var(--neutral-400);text-transform:uppercase}
                .form-input{padding:12px;border-radius:10px;border:1px solid var(--neutral-200);background:var(--neutral-50);outline:none}
                .modal-footer{padding:24px 32px;background:var(--neutral-50);display:flex;justify-content:flex-end;gap:12px}
                .btn-save{background:var(--primary-dark);color:white;border:none;padding:10px 24px;border-radius:8px;cursor:pointer;font-weight:700}
                .btn-save:disabled{opacity:.6;cursor:not-allowed}
            `}</style>

            <header className="content-header">
                <div className="header-left">
                    <h1>SEO Meta Settings</h1>
                </div>
            </header>

            <div className="table-card">
                <div className="card-header">
                    <div style={{ fontWeight: 700 }}>Landing Page SEO Targets</div>
                    <input type="text" className="search-input" placeholder="Search pages..." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <table>
                    <thead>
                        <tr><th>Page</th><th>Meta Title / Description</th><th style={{ textAlign: "right" }}>Actions</th></tr>
                    </thead>
                    <tbody>
                        {data.filter(s => s.page.toLowerCase().includes(search.toLowerCase())).map((row) => (
                            <tr key={row.page_id}>
                                <td style={{ fontWeight: 700 }}>{row.page}</td>
                                <td>
                                    <div className="meta-title">{row.title}</div>
                                    <div className="meta-desc">{row.description}</div>
                                </td>
                                <td style={{ textAlign: "right" }}>
                                    <button onClick={() => { setFormData(row); setIsModalOpen(true); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "18px" }}>✏️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header"><h2>Edit Meta Tags: {formData.page}</h2></div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Meta Title (SEO)</label>
                                <input className="form-input" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Meta Description</label>
                                <textarea className="form-input" style={{ minHeight: "100px" }} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Keywords (Comma separated)</label>
                                <input className="form-input" value={formData.keywords} onChange={e => setFormData({ ...formData, keywords: e.target.value })} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => setIsModalOpen(false)} style={{ padding: "10px 20px", border: "1px solid #ddd", background: "white", borderRadius: "8px", cursor: "pointer" }}>Cancel</button>
                            <button className="btn-save" disabled={isSaving} onClick={handleSave}>{isSaving ? 'Saving...' : 'Save SEO'}</button>
                        </div>
                    </div>
                </div>
            )}
        </ModernLayout>
    );
};

export default MetaDashboard;
