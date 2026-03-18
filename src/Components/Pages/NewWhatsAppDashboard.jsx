import React, { useState, useEffect, useCallback } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";

const NewWhatsAppDashboard = () => {
    const [activeTab, setActiveTab] = useState("global"); // "global" or "overrides"
    const [search, setSearch] = useState("");
    const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);
    const [isOverrideModalOpen, setIsOverrideModalOpen] = useState(false);
    
    // 1. Global (Day-based) Data
    const initialGlobalData = [
        { id: 1, day: "Monday", name: "Sales Support", number: "+971501234567", message: "Hello, VAT Master, We are looking for VAT Services.", status: "active" },
        { id: 2, day: "Tuesday", name: "Tax Consultant", number: "+971521234567", message: "Hello, VAT Master, We are looking for VAT Services.", status: "active" },
        { id: 3, day: "Wednesday", name: "Billing Dept", number: "+971551234567", message: "Hello, VAT Master, We are looking for VAT Services.", status: "active" },
        { id: 4, day: "Thursday", name: "General Info", number: "+971581234567", message: "Hello, VAT Master, We are looking for VAT Services.", status: "active" },
        { id: 5, day: "Friday", name: "Sales Support", number: "+971501234567", message: "Hello, VAT Master, We are looking for VAT Services.", status: "active" },
        { id: 6, day: "Saturday", name: "Sales Support", number: "+971501234567", message: "Hello, VAT Master, We are looking for VAT Services.", status: "active" },
        { id: 7, day: "Sunday", name: "Sales Support", number: "+971501234567", message: "Hello, VAT Master, We are looking for VAT Services.", status: "active" },
    ];

    const [globalData, setGlobalData] = useState(() => {
        const saved = localStorage.getItem('whatsapp_routing_raw_data');
        if (!saved) return initialGlobalData;
        try {
            return JSON.parse(saved);
        } catch {
            return initialGlobalData;
        }
    });

    // 2. Route-Specific Overrides
    const [overrides, setOverrides] = useState(() => {
        const saved = localStorage.getItem('whatsapp_routing_overrides');
        try {
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [globalFormData, setGlobalFormData] = useState({
        day: "Monday",
        name: "",
        number: "",
        message: "Hello, VAT Master, We are looking for VAT Services.",
        status: "active"
    });

    const [overrideFormData, setOverrideFormData] = useState({
        path: "/",
        name: "",
        number: "",
        message: "Hello, VAT Master, We are looking for VAT Services.",
        status: "active"
    });

    // Save Global Data
    useEffect(() => {
        localStorage.setItem('whatsapp_routing_raw_data', JSON.stringify(globalData));
        const config = {};
        globalData.forEach(item => {
            config[item.day] = { number: item.number, message: item.message, status: item.status };
        });
        localStorage.setItem('whatsapp_routing_config', JSON.stringify(config));
    }, [globalData]);

    // Save Overrides
    useEffect(() => {
        localStorage.setItem('whatsapp_routing_overrides', JSON.stringify(overrides));
    }, [overrides]);

    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = useCallback((id, number) => {
        navigator.clipboard.writeText(number).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 1500);
        });
    }, []);

    const NumberCell = ({ row, isToday }) => (
        <div className="number-cell">
            <span className={`number-pill ${isToday ? 'number-pill-today' : ''}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.523 5.824L.057 23.8a.5.5 0 0 0 .614.612l5.973-1.491A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.882 9.882 0 0 1-5.031-1.378l-.361-.214-3.741.933.988-3.617-.236-.374A9.866 9.866 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1S21.9 6.534 21.9 12 17.466 21.9 12 21.9z"/>
                </svg>
                {row.number}
            </span>
            <button
                className={`copy-btn ${copiedId === row.id ? 'copied' : ''}`}
                title="Copy number"
                onClick={() => handleCopy(row.id, row.number)}
            >
                {copiedId === row.id ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                )}
            </button>
        </div>
    );

    return (
        <ModernLayout activeTitle="WhatsApp Routing">
            <style>{`
                .content-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
                .header-left h1 { margin: 0; font-size: 28px; font-weight: 800; color: var(--neutral-800); }
                .tab-nav { display: flex; gap: 32px; margin-bottom: 32px; border-bottom: 1px solid var(--neutral-100); }
                .tab-link { 
                    padding: 12px 0; 
                    font-weight: 700; 
                    font-size: 15px; 
                    color: var(--neutral-400); 
                    cursor: pointer; 
                    position: relative; 
                    transition: all 0.2s;
                }
                .tab-link.active { color: var(--primary-dark); }
                .tab-link.active::after { 
                    content: ''; 
                    position: absolute; 
                    bottom: -1px; 
                    left: 0; 
                    right: 0; 
                    height: 3px; 
                    background: var(--primary); 
                    border-radius: 3px 3px 0 0;
                }
                
                .add-btn { background: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39); transition: all 0.2s; }
                .add-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45); }

                .table-card { background: white; border-radius: 16px; box-shadow: var(--card-shadow); border: 1px solid var(--neutral-100); overflow: hidden; }
                .card-header { padding: 24px; border-bottom: 1px solid var(--neutral-100); display: flex; justify-content: space-between; align-items: center; }
                .search-input { background: var(--neutral-50); border: 1px solid var(--neutral-200); padding: 10px 16px; border-radius: 8px; width: 300px; outline: none; font-weight: 500; }

                table { width: 100%; border-collapse: collapse; text-align: left; }
                th { background: var(--neutral-50); padding: 16px 24px; font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--neutral-400); letter-spacing: 0.5px; }
                td { padding: 18px 24px; border-bottom: 1px solid var(--neutral-100); font-size: 14px; font-weight: 500; }
                
                .badge { padding: 3px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; }
                .badge-active { background: #dcfce7; color: #166534; }
                .badge-inactive { background: #f1f5f9; color: #475569; }
                .dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }

                /* ── Active-today row ───────────────────────────────────── */
                .row-highlight td {
                    background:
                        repeating-linear-gradient(
                            135deg,
                            transparent,
                            transparent 14px,
                            rgba(37,99,235,0.045) 14px,
                            rgba(37,99,235,0.045) 18px
                        ),
                        #eff6ff !important;
                    border-bottom: 1px solid #bfdbfe !important;
                }
                .row-highlight td:first-child {
                    border-left: 5px solid #2563eb;
                    padding-left: 19px;
                }

                /* Today label inside Day cell */
                .today-label {
                    display: inline-flex; align-items: center; gap: 5px;
                    background: #2563eb; color: #fff;
                    font-size: 9px; font-weight: 800; letter-spacing: 0.8px;
                    text-transform: uppercase; padding: 3px 8px;
                    border-radius: 999px; margin-left: 8px;
                    vertical-align: middle;
                    animation: todayPulse 2.4s ease-in-out infinite;
                }
                .today-dot-live {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #93c5fd;
                    animation: liveBlink 1.2s ease-in-out infinite;
                    flex-shrink: 0;
                }
                @keyframes todayPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.35); }
                    50%       { box-shadow: 0 0 0 5px rgba(37,99,235,0); }
                }
                @keyframes liveBlink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.3; }
                }

                /* ── Number column ──────────────────────────────────────── */
                .number-cell { display: flex; align-items: center; gap: 10px; }
                .number-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: #f0fdf4; border: 1px solid #bbf7d0;
                    padding: 7px 14px; border-radius: 999px;
                    font-size: 13px; font-weight: 700; color: #15803d;
                    font-family: 'SF Mono', 'Fira Code', monospace;
                    letter-spacing: 0.3px; transition: all 0.2s;
                    cursor: default; white-space: nowrap;
                }
                .number-pill svg { flex-shrink: 0; }
                /* Blue variant for today's active number */
                .number-pill-today {
                    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                    border-color: #60a5fa;
                    color: #1e3a8a;
                    box-shadow: 0 2px 12px rgba(37,99,235,0.18);
                    font-size: 14px;
                }
                .number-pill-today svg { color: #2563eb; }

                .copy-btn {
                    width: 28px; height: 28px; border-radius: 6px;
                    display: grid; place-items: center;
                    border: 1px solid var(--neutral-200); background: white;
                    cursor: pointer; transition: all 0.2s; flex-shrink: 0;
                    color: var(--neutral-400);
                }
                .copy-btn:hover { background: var(--neutral-100); color: #2563eb; border-color: #60a5fa; transform: scale(1.05); }
                .copy-btn.copied { border-color: #60a5fa; color: #1d4ed8; background: #eff6ff; }

                .table-actions { display: flex; gap: 12px; justify-content: flex-end; }
                .action-btn { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; cursor: pointer; border: 1px solid var(--neutral-200); background: white; transition: all 0.2s; }
                .action-btn:hover { background: var(--neutral-100); transform: translateY(-2px); }

                .modal-backdrop { position: fixed; inset: 0; background: rgba(11, 47, 53, 0.4); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 2000; animation: fadeIn 0.2s; }
                .modal-content { background: white; width: min(600px, 95vw); border-radius: 24px; overflow: hidden; animation: slideUp 0.3s; }
                .modal-header { padding: 24px; background: var(--primary-dark); color: white; display: flex; justify-content: space-between; align-items: center; }
                .close-x { background: none; border: none; color: white; font-size: 24px; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; }
                .close-x:hover { opacity: 1; }
                .modal-body { padding: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
                .form-group { display: flex; flex-direction: column; gap: 8px; }
                .form-group.full { grid-column: span 2; }
                .form-input { padding: 12px 16px; border-radius: 12px; border: 1px solid var(--neutral-200); background: var(--neutral-50); outline: none; transition: all 0.2s; }
                .form-input:focus { border-color: var(--primary); background: white; }
                .modal-footer { padding: 24px; background: var(--neutral-50); display: flex; justify-content: flex-end; gap: 16px; }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>

            <header className="content-header">
                <div className="header-left">
                    <h1>WhatsApp Routing</h1>
                    <div style={{ color: "var(--neutral-400)", fontSize: "14px", marginTop: "4px" }}>Home / WhatsApp Manager</div>
                </div>
                <button className="add-btn" onClick={() => activeTab === 'global' ? setIsGlobalModalOpen(true) : setIsOverrideModalOpen(true)}>
                    <span>+</span> {activeTab === 'global' ? 'Add Schedule' : 'Add Page Override'}
                </button>
            </header>

            <nav className="tab-nav">
                <div className={`tab-link ${activeTab === 'global' ? 'active' : ''}`} onClick={() => setActiveTab('global')}>Global Schedule (Defaults)</div>
                <div className={`tab-link ${activeTab === 'overrides' ? 'active' : ''}`} onClick={() => setActiveTab('overrides')}>Page-Specific Overrides</div>
            </nav>

            {activeTab === 'global' ? (
                <div className="table-card">
                    <div className="card-header">
                        <div style={{ fontWeight: 700, color: "var(--neutral-600)" }}>Site-Wide Day Schedule</div>
                        <input type="text" className="search-input" placeholder="Search days..." />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Status</th>
                                <th style={{ textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {globalData.map((row) => {
                              const isToday = row.day === currentDay;
                              return (
                                <tr key={row.id} className={isToday ? "row-highlight" : ""}>
                                    <td>
                                        <span style={{ fontWeight: 700, color: isToday ? '#1e3a8a' : 'inherit' }}>{row.day}</span>
                                        {isToday && (
                                            <span className="today-label">
                                                <span className="today-dot-live" />
                                                Live Today
                                            </span>
                                        )}
                                    </td>
                                    <td style={{ fontWeight: 700 }}>{row.name}</td>
                                    <td><NumberCell row={row} isToday={isToday} /></td>
                                    <td>
                                        <span className={`badge badge-${row.status}`}>
                                            <span className="dot"></span>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button className="action-btn" onClick={() => { setGlobalFormData(row); setIsGlobalModalOpen(true); }}>✏️</button>
                                            <button className="action-btn" onClick={() => setGlobalData(globalData.map(d => d.id === row.id ? {...d, status: d.status === 'active' ? 'inactive' : 'active'} : d))}>🔄</button>
                                        </div>
                                    </td>
                                </tr>
                              );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="table-card">
                    <div className="card-header">
                        <div style={{ fontWeight: 700, color: "var(--neutral-600)" }}>Active Route Overrides</div>
                        <input type="text" className="search-input" placeholder="Search routes..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    {overrides.length === 0 ? (
                        <div style={{ padding: "48px", textAlign: "center", color: "var(--neutral-400)" }}>
                            No overrides found. Add one to set a unique number for a specific page.
                        </div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Page Path</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Status</th>
                                    <th style={{ textAlign: "right" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {overrides.filter(o => o.path.includes(search)).map((row) => (
                                    <tr key={row.id}>
                                        <td style={{ color: "var(--primary-dark)", fontWeight: 700 }}>{row.path}</td>
                                        <td>{row.name}</td>
                                        <td><NumberCell row={row} isToday={false} /></td>
                                        <td>
                                            <span className={`badge badge-${row.status}`}>
                                                <span className="dot"></span>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="table-actions">
                                                <button className="action-btn" onClick={() => { setOverrideFormData(row); setIsOverrideModalOpen(true); }}>✏️</button>
                                                <button className="action-btn" onClick={() => setOverrides(overrides.map(o => o.id === row.id ? {...o, status: o.status === 'active' ? 'inactive' : 'active'} : o))}>🔄</button>
                                                <button className="action-btn" style={{ color: "red" }} onClick={() => setOverrides(overrides.filter(o => o.id !== row.id))}>🗑</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}

            {/* Global Modal */}
            {isGlobalModalOpen && (
                <div className="modal-backdrop" onClick={() => setIsGlobalModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Edit Global Schedule</h2>
                            <button className="close-x" onClick={() => setIsGlobalModalOpen(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Day</label>
                                <input className="form-input" value={globalFormData.day} disabled />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-input" value={globalFormData.name} onChange={e => setGlobalFormData({...globalFormData, name: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Routing Number</label>
                                <input className="form-input" value={globalFormData.number} onChange={e => setGlobalFormData({...globalFormData, number: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-input" value={globalFormData.status} onChange={e => setGlobalFormData({...globalFormData, status: e.target.value})}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="form-group full">
                                <label>Message</label>
                                <textarea className="form-input" value={globalFormData.message} onChange={e => setGlobalFormData({...globalFormData, message: e.target.value})} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-save" onClick={() => {
                                setGlobalData(globalData.map(d => d.id === globalFormData.id ? globalFormData : d));
                                setIsGlobalModalOpen(false);
                            }}>Save Schedule</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Override Modal */}
            {isOverrideModalOpen && (
                <div className="modal-backdrop" onClick={() => setIsOverrideModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{overrideFormData.id ? 'Edit' : 'Add'} Route Override</h2>
                            <button className="close-x" onClick={() => setIsOverrideModalOpen(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Page Path (e.g. /vat-registration)</label>
                                <input className="form-input" placeholder="/page-url" value={overrideFormData.path} onChange={e => setOverrideFormData({...overrideFormData, path: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-input" placeholder="Sales for this page" value={overrideFormData.name} onChange={e => setOverrideFormData({...overrideFormData, name: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>WhatsApp Number</label>
                                <input className="form-input" placeholder="+971..." value={overrideFormData.number} onChange={e => setOverrideFormData({...overrideFormData, number: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-input" value={overrideFormData.status} onChange={e => setOverrideFormData({...overrideFormData, status: e.target.value})}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="form-group full">
                                <label>Custom Message</label>
                                <textarea className="form-input" value={overrideFormData.message} onChange={e => setOverrideFormData({...overrideFormData, message: e.target.value})} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-save" onClick={() => {
                                if (overrideFormData.id) {
                                    setOverrides(overrides.map(o => o.id === overrideFormData.id ? overrideFormData : o));
                                } else {
                                    setOverrides([...overrides, { ...overrideFormData, id: Date.now() }]);
                                }
                                setIsOverrideModalOpen(false);
                            }}>Save Override</button>
                        </div>
                    </div>
                </div>
            )}
        </ModernLayout>
    );
};

export default NewWhatsAppDashboard;
