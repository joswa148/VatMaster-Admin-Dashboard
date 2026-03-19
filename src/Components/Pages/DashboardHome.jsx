import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import { whatsappAPI, pricingAPI, metaAPI, blogAPI } from "../../services/api";

const DashboardHome = () => {
    const [stats, setStats] = useState([
        { label: "Active Services", value: "—", icon: "bi-cash-stack", color: "#6366f1" },
        { label: "Active WhatsApp", value: "—", icon: "bi-whatsapp", color: "#22c55e" },
        { label: "SEO Configs", value: "—", icon: "bi-globe", color: "#00E6F6" },
        { label: "Blog Posts", value: "—", icon: "bi-journal-text", color: "#f59e0b" },
    ]);
    const [recentActivity, setRecentActivity] = useState([]);

    useEffect(() => {
        Promise.all([
            whatsappAPI.getGlobal().catch(() => []),
            pricingAPI.getAll().catch(() => ({ list: [] })),
            metaAPI.getAll().catch(() => []),
            blogAPI.getPosts().catch(() => []),
        ]).then(([whatsapp, pricing, meta, blog]) => {
            const pricingList = Array.isArray(pricing?.list) ? pricing.list : [];
            const whatsappList = Array.isArray(whatsapp) ? whatsapp : [];
            const metaList = Array.isArray(meta) ? meta : [];
            const blogList = Array.isArray(blog) ? blog : [];

            const activeWA = whatsappList.filter(d => d.status === 'active').length;
            const activePricing = pricingList.filter(d => d.status === 'active').length;
            
            setStats([
                { label: "Active Services",  value: activePricing.toString(),             icon: "bi-cash-stack", color: "#6366f1" },
                { label: "Active WhatsApp",  value: `${activeWA} / ${whatsappList.length}`,   icon: "bi-whatsapp", color: "#22c55e" },
                { label: "SEO Configs",      value: metaList.length.toString(),               icon: "bi-globe", color: "#00E6F6" },
                { label: "Blog Posts",       value: blogList.length.toString(),               icon: "bi-journal-text", color: "#f59e0b" },
            ]);

            // Create a pseudo-activity feed from real data
            const activities = [];
            if (blogList.length > 0) {
                blogList.slice(0, 2).forEach(p => activities.push({
                    action: `Blog post '${p.title}' published`,
                    time: p.date || "Recently",
                    user: p.author || "Admin",
                    type: "blog",
                    icon: "bi-file-earmark-post"
                }));
            }
            if (pricingList.length > 0) {
                pricingList.slice(0, 1).forEach(p => activities.push({
                    action: `Service '${p.name}' price: ${p.currency} ${p.price}`,
                    time: "Active",
                    user: "System",
                    type: "pricing",
                    icon: "bi-tag-fill"
                }));
            }
            if (activities.length === 0) {
                activities.push({ action: "Welcome to VAT Masters Dashboard", time: "Now", user: "System", type: "system", icon: "bi-info-circle" });
            }
            setRecentActivity(activities);

        }).catch(console.error);
    }, []);

    const quickActions = [
        { label: "Update WhatsApp", path: "/dashboard/whatsapp", icon: "bi-whatsapp" },
        { label: "Edit Meta Tags", path: "/dashboard/meta", icon: "bi-globe" },
        { label: "Manage Pricing", path: "/dashboard/pricing", icon: "bi-cash-stack" },
        { label: "New Blog Post", path: "/dashboard/blogs", icon: "bi-pencil-square" },
    ];

    return (
        <ModernLayout activeTitle="Dashboard">
            <style>{`
                .welcome-section { margin-bottom: 32px; }
                .welcome-section h1 { font-size: 32px; font-weight: 800; color: var(--neutral-800); margin: 0; }
                .welcome-section p { color: var(--neutral-400); margin-top: 8px; font-weight: 500; }

                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 32px; }
                .stat-card { 
                    background: white; 
                    padding: 24px; 
                    border-radius: 20px; 
                    box-shadow: var(--card-shadow); 
                    border: 1px solid var(--neutral-100);
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .stat-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
                .stat-icon { 
                    width: 56px; 
                    height: 56px; 
                    border-radius: 16px; 
                    background: var(--neutral-50); 
                    display: flex; 
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                }
                .stat-info .label { color: var(--neutral-400); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
                .stat-info .value { font-size: 28px; font-weight: 800; color: var(--neutral-800); }

                .main-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 32px; }
                
                .grid-card { 
                    background: white; 
                    border-radius: 24px; 
                    box-shadow: var(--card-shadow); 
                    border: 1px solid var(--neutral-100);
                    overflow: hidden;
                }
                .card-header { padding: 24px; border-bottom: 1px solid var(--neutral-100); display: flex; justify-content: space-between; align-items: center; }
                .card-header h2 { font-size: 18px; font-weight: 800; margin: 0; color: var(--neutral-800); }
                
                .activity-list { padding: 0; margin: 0; list-style: none; }
                .activity-item { 
                    padding: 20px 24px; 
                    border-bottom: 1px solid var(--neutral-50); 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center;
                    transition: background 0.2s;
                }
                .activity-item:hover { background: var(--neutral-50); }
                .activity-main { display: flex; align-items: center; gap: 16px; }
                .activity-icon { color: var(--neutral-400); font-size: 18px; }
                .activity-details { display: flex; flex-direction: column; gap: 4px; }
                .activity-action { font-weight: 700; color: var(--neutral-700); font-size: 14px; }
                .activity-meta { font-size: 12px; color: var(--neutral-400); font-weight: 600; }
                
                .quick-actions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 24px; }
                .action-btn { 
                    background: var(--neutral-50); 
                    border: 1px solid var(--neutral-200);
                    padding: 20px 16px;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    color: var(--neutral-700);
                }
                .action-btn:hover { background: var(--primary-dark); border-color: var(--primary); transform: scale(1.02); }
                .action-btn:hover span, .action-btn:hover i { color: white; }
                .action-btn .icon { font-size: 24px; }
                .action-btn span { font-size: 12px; font-weight: 700; text-align: center; }

                @media (max-width: 1024px) {
                    .main-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <section className="welcome-section">
                <h1>Welcome Back, Admin</h1>
                <p>Monitor your performance and manage VAT services from a single console.</p>
            </section>

            <div className="stats-grid">
                {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            <i className={`bi ${stat.icon}`}></i>
                        </div>
                        <div className="stat-info">
                            <div className="label">{stat.label}</div>
                            <div className="value">{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="main-grid">
                <div className="grid-card">
                    <div className="card-header">
                        <h2>Recent Activity</h2>
                    </div>
                    <ul className="activity-list">
                        {recentActivity.map((activity, idx) => (
                            <li key={idx} className="activity-item">
                                <div className="activity-main">
                                    <div className="activity-icon"><i className={`bi ${activity.icon}`}></i></div>
                                    <div className="activity-details">
                                        <span className="activity-action">{activity.action}</span>
                                        <span className="activity-meta">by {activity.user} • {activity.time}</span>
                                    </div>
                                </div>
                                <div style={{ fontSize: "14px", opacity: 0.3 }}><i className="bi bi-chevron-right"></i></div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid-card">
                    <div className="card-header">
                        <h2>Quick Actions</h2>
                    </div>
                    <div className="quick-actions-grid">
                        {quickActions.map((action, idx) => (
                            <div key={idx} onClick={() => window.location.href=action.path} className="action-btn">
                                <i className={`bi ${action.icon} icon`}></i>
                                <span>{action.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ModernLayout>
    );
};

export default DashboardHome;
