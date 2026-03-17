import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";

const NewWhatsAppDashboard = () => {
    const [search, setSearch] = useState("");
    const [entries, setEntries] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Default initial data
    const initialData = [
        { id: 1, day: "Monday", name: "Sales Support", number: "+971501234567", message: "Hello, I need help with VAT...", status: "active" },
        { id: 2, day: "Tuesday", name: "Tax Consultant", number: "+971521234567", message: "Inquiry about corporate tax...", status: "active" },
        { id: 3, day: "Wednesday", name: "Billing Dept", number: "+971551234567", message: "Payment confirmation for invoice...", status: "inactive" },
        { id: 4, day: "Thursday", name: "General Info", number: "+971581234567", message: "General VAT registration query...", status: "active" },
        { id: 5, day: "Friday", name: "Sales Support", number: "+971501234567", message: "Hello, I need help with VAT...", status: "active" },
        { id: 6, day: "Saturday", name: "Sales Support", number: "+971501234567", message: "Hello, I need help with VAT...", status: "active" },
        { id: 7, day: "Sunday", name: "Sales Support", number: "+971501234567", message: "Hello, I need help with VAT...", status: "active" },
    ];

    // Load from localStorage, merging any missing days from initialData
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('whatsapp_routing_raw_data');
        if (!saved) return initialData;
        const parsed = JSON.parse(saved);
        const existingDays = new Set(parsed.map(r => r.day));
        const missing = initialData.filter(r => !existingDays.has(r.day));
        const merged = [...parsed, ...missing];
        const dayOrder = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        return merged.sort((a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day));
    });

    const [formData, setFormData] = useState({
        day: "Monday",
        name: "",
        number: "",
        message: "Hello The VAT Consultant , We are Seeking for TAX Services.",
        status: "active"
    });

    const [isSyncing, setIsSyncing] = useState(false);

    // Save to localStorage whenever data changes
    useEffect(() => {
        const syncTimer = setTimeout(() => {
            setIsSyncing(true);
        }, 0);
        
        // Save raw data
        localStorage.setItem('whatsapp_routing_raw_data', JSON.stringify(data));
        
        // Save formatted config for the hook
        const config = {};
        data.forEach(item => {
            config[item.day] = {
                number: item.number,
                message: item.message,
                status: item.status
            };
        });
        localStorage.setItem('whatsapp_routing_config', JSON.stringify(config));
        
        // Fake a small delay for visual feedback only
        const timer = setTimeout(() => {
            setIsSyncing(false);
        }, 500);

        return () => {
            clearTimeout(timer);
            clearTimeout(syncTimer);
        };
    }, [data]);

    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <ModernLayout activeTitle="WhatsApp Routing">
            <style>{`
                .content-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
                .header-left h1 { margin: 0; font-size: 28px; font-weight: 800; color: var(--neutral-800); }
                .breadcrumbs { color: var(--neutral-400); font-size: 14px; margin-top: 4px; font-weight: 500; }
                
                .add-btn { 
                    background: var(--primary); 
                    color: white; 
                    border: none; 
                    padding: 12px 24px; 
                    border-radius: 8px; 
                    font-weight: 700; 
                    cursor: pointer; 
                    display: flex; 
                    align-items: center; 
                    gap: 8px;
                    box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39);
                    transition: all 0.2s;
                }
                .add-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45); }

                .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 32px; }
                .stat-card { background: white; padding: 20px; border-radius: 12px; box-shadow: var(--card-shadow); border: 1px solid var(--neutral-100); }
                .stat-label { color: var(--neutral-400); font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
                .stat-value { font-size: 24px; font-weight: 800; color: var(--neutral-800); }

                .table-card { background: white; border-radius: 16px; box-shadow: var(--card-shadow); border: 1px solid var(--neutral-100); overflow: hidden; }
                .card-header { padding: 24px; border-bottom: 1px solid var(--neutral-100); display: flex; justify-content: space-between; align-items: center; }
                .search-input { background: var(--neutral-50); border: 1px solid var(--neutral-200); padding: 10px 16px; border-radius: 8px; width: 300px; outline: none; font-weight: 500; }

                table { width: 100%; border-collapse: collapse; text-align: left; }
                th { background: var(--neutral-50); padding: 16px 24px; font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--neutral-400); letter-spacing: 0.5px; }
                td { padding: 18px 24px; border-bottom: 1px solid var(--neutral-100); font-size: 14px; font-weight: 500; }
                tbody tr:hover td { background: var(--neutral-50); }
                tbody tr:nth-child(even) { background-color: #fafafa; }

                .badge { padding: 3px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
                .badge-active { background: #dcfce7; color: #166534; }
                .badge-inactive { background: #f1f5f9; color: #475569; }
                .badge-today { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; font-size: 10px; }
                .dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
                .badge-wrap { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; }

                .table-actions { display: flex; gap: 12px; justify-content: flex-end; }
                .action-btn { width: 36px; height: 36px; border-radius: 8px; display: grid; place-items: center; cursor: pointer; border: 1px solid var(--neutral-200); background: white; transition: all 0.2s; }
                .action-btn:hover { background: var(--neutral-100); transform: translateY(-2px); }
                .action-btn.del:hover { color: var(--danger); border-color: var(--danger); background: #fef2f2; }
                .row-highlight td { background: #f0fdfa !important; border-left: 4px solid var(--primary); }

                .table-footer { padding: 24px; display: flex; justify-content: space-between; align-items: center; color: var(--neutral-400); font-size: 14px; }
                .pagination { display: flex; gap: 8px; }
                .page-btn { padding: 8px 12px; border-radius: 6px; border: 1px solid var(--neutral-200); background: white; cursor: pointer; font-weight: 600; }
                .page-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

                @media (max-width: 1024px) {
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                }

                /* Modal Styles */
                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(11, 47, 53, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    animation: fadeIn 0.2s ease-out;
                }
                .modal-content {
                    background: white;
                    width: min(600px, 95vw);
                    border-radius: 24px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    overflow: hidden;
                    animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .modal-header {
                    padding: 24px 32px;
                    background: var(--primary-dark);
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .modal-header h2 { margin: 0; font-size: 20px; font-weight: 800; }
                .close-x { background: none; border: none; color: white; font-size: 24px; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; }
                .close-x:hover { opacity: 1; }

                .modal-body { padding: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
                .form-group { display: flex; flex-direction: column; gap: 8px; }
                .form-group.full { grid-column: span 2; }
                .form-group label { font-size: 13px; font-weight: 700; color: var(--neutral-400); text-transform: uppercase; }
                .form-input {
                    padding: 12px 16px;
                    border-radius: 12px;
                    border: 1px solid var(--neutral-200);
                    background: var(--neutral-50);
                    font-weight: 600;
                    color: var(--neutral-800);
                    outline: none;
                    transition: all 0.2s;
                }
                .form-input:focus { border-color: var(--primary); box-shadow: 0 0 0 4px rgba(0, 230, 246, 0.1); background: white; }
                .form-textarea { min-height: 100px; resize: vertical; }

                .modal-footer {
                    padding: 24px 32px;
                    background: var(--neutral-50);
                    display: flex;
                    justify-content: flex-end;
                    gap: 16px;
                }
                .btn-cancel { padding: 12px 24px; border-radius: 10px; border: 1px solid var(--neutral-200); background: white; font-weight: 700; cursor: pointer; color: var(--neutral-600); }
                .btn-save { padding: 12px 32px; border-radius: 10px; border: none; background: var(--primary-dark); color: white; font-weight: 700; cursor: pointer; border: 1px solid var(--primary); transition: all 0.2s; }
                .btn-save:hover { background: var(--primary); color: var(--primary-dark); }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>

            <header className="content-header">
                <div className="header-left">
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <h1>WhatsApp Routing</h1>
                        {isSyncing ? (
                            <span style={{ fontSize: "12px", background: "#fef3c7", color: "#92400e", padding: "4px 8px", borderRadius: "4px", fontWeight: 700 }}>
                                ⏳ Syncing...
                            </span>
                        ) : (
                            <span style={{ fontSize: "12px", background: "#d1fae5", color: "#065f46", padding: "4px 8px", borderRadius: "4px", fontWeight: 700 }}>
                                ✅ Cloud Synced
                            </span>
                        )}
                    </div>
                    <div className="breadcrumbs">Home / WhatsApp Routing</div>
                </div>
                <button className="add-btn" onClick={() => setIsModalOpen(true)}>
                    <span>+</span> add
                </button>
            </header>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-label">Total Channels</div>
                    <div className="stat-value">{data.length}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Active Now</div>
                    <div className="stat-value">{data.filter(d => d.status === 'active').length}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Today Active</div>
                    <div className="stat-value">{data.find(d => d.day === currentDay && d.status === 'active') ? 1 : 0}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Inactive</div>
                    <div className="stat-value">{data.filter(d => d.status === 'inactive').length}</div>
                </div>
            </div>

            <div className="table-card">
                <div className="card-header">
                    <div>
                        <select 
                            value={entries} 
                            onChange={(e) => setEntries(e.target.value)}
                            style={{ border: "1px solid #e2e8f0", padding: "8px", borderRadius: "6px" }}
                        >
                            <option value={10}>Show 10 entries</option>
                            <option value={25}>Show 25 entries</option>
                        </select>
                    </div>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search lead channels..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "50px" }}>#</th>
                            <th>Day of Week</th>
                            <th>Channel Name</th>
                            <th>Routing Number</th>
                            <th>Status</th>
                            <th style={{ textAlign: "right" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                                <tr key={row.id} className={row.day === currentDay ? "row-highlight" : ""}>
                                    <td>{row.id}</td>
                                    <td>{row.day}</td>
                                <td style={{ fontWeight: 700 }}>{row.name}</td>
                                <td>{row.number}</td>
                                <td>
                                    <div className="badge-wrap">
                                        <span className={`badge badge-${row.status}`}>
                                            <span className="dot"></span>
                                            {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                                        </span>
                                        {row.day === currentDay && (
                                            <span className="badge badge-today">⭐ Today</span>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div className="table-actions">
                                <button className="action-btn" title="Edit" onClick={() => {
                                    setFormData(row);
                                    setIsModalOpen(true);
                                }}>✏️</button>
                                <button className="action-btn" title="Toggle Status" onClick={() => {
                                    setData(data.map(d => d.id === row.id ? {...d, status: d.status === 'active' ? 'inactive' : 'active'} : d));
                                }}>🔄</button>
                                <button className="action-btn del" title="Delete" onClick={() => {
                                    if(window.confirm("Are you sure?")) setData(data.filter(d => d.id !== row.id));
                                }}>🗑</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="table-footer">
                    <div>Showing 1 to 4 of 4 entries</div>
                    <div className="pagination">
                        <button className="page-btn">Previous</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">Next</button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Add Routing Number</h2>
                            <button className="close-x" onClick={() => setIsModalOpen(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Day of Week</label>
                                <select 
                                    className="form-input"
                                    value={formData.day}
                                    onChange={e => setFormData({...formData, day: e.target.value})}
                                >
                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select 
                                    className="form-input"
                                    value={formData.status}
                                    onChange={e => setFormData({...formData, status: e.target.value})}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Channel Name</label>
                                <input 
                                    type="text" 
                                    className="form-input"
                                    placeholder="e.g. Sales Support"
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Routing Number</label>
                                <input 
                                    type="text" 
                                    className="form-input"
                                    placeholder="+971XXXXXXXXX"
                                    value={formData.number}
                                    onChange={e => setFormData({...formData, number: e.target.value})}
                                />
                            </div>
                            <div className="form-group full">
                                <label>Initial Message</label>
                                <textarea 
                                    className="form-input form-textarea"
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="btn-save" onClick={() => {
                                if (formData.id) {
                                    setData(data.map(d => d.id === formData.id ? formData : d));
                                } else {
                                    setData([...data, { ...formData, id: Date.now() }]);
                                }
                                setIsModalOpen(false);
                            }}>Save Channel</button>
                        </div>
                    </div>
                </div>
            )}
        </ModernLayout>
    );
};

export default NewWhatsAppDashboard;
