import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import { whatsappAPI, pricingAPI, metaAPI, blogAPI } from "../../services/api";

const DashboardHome = () => {
    const [stats, setStats] = useState([
        { label: "Active Services", value: "—", icon: "💰", color: "#6366f1" },
        { label: "Active WhatsApp", value: "—", icon: "💬", color: "#22c55e" },
        { label: "SEO Configs", value: "—", icon: "🎯", color: "#00E6F6" },
        { label: "Blog Posts", value: "—", icon: "📝", color: "#f59e0b" },
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
                { label: "Active Services",  value: activePricing.toString(),             icon: "💰", color: "#6366f1" },
                { label: "Active WhatsApp",  value: `${activeWA} / ${whatsappList.length}`,   icon: "💬", color: "#22c55e" },
                { label: "SEO Configs",      value: metaList.length.toString(),               icon: "🎯", color: "#00E6F6" },
                { label: "Blog Posts",       value: blogList.length.toString(),               icon: "📝", color: "#f59e0b" },
            ]);

            // Create a pseudo-activity feed from real data
            const activities = [];
            if (blogList.length > 0) {
                blogList.slice(0, 2).forEach(p => activities.push({
                    action: `Blog post '${p.title}' published`,
                    time: p.date || "Recently",
                    user: p.author || "Admin",
                    type: "blog"
                }));
            }
            if (pricingList.length > 0) {
                pricingList.slice(0, 1).forEach(p => activities.push({
                    action: `Service '${p.name}' price: ${p.currency} ${p.price}`,
                    time: "Active",
                    user: "System",
                    type: "pricing"
                }));
            }
            if (activities.length === 0) {
                activities.push({ action: "Welcome to VAT Masters Dashboard", time: "Now", user: "System", type: "system" });
            }
            setRecentActivity(activities);

        }).catch(console.error);
    }, []);

    const quickActions = [
        { label: "Update WhatsApp", path: "/dashboard/whatsapp", icon: "📲" },
        { label: "Edit Meta Tags", path: "/dashboard/meta", icon: "🔍" },
        { label: "Manage Pricing", path: "/dashboard/pricing", icon: "💰" },
        { label: "New Blog Post", path: "/dashboard/blogs", icon: "✍️" },
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
                    transition: transform 0.2s;
                }
                .stat-card:hover { transform: translateY(-4px); }
                .stat-icon { 
                    width: 56px; 
                    height: 56px; 
                    border-radius: 16px; 
                    background: var(--neutral-50); 
                    display: grid; 
                    place-items: center; 
                    font-size: 24px;
                }
                .stat-info .label { color: var(--neutral-400); font-size: 13px; font-weight: 700; text-transform: uppercase; }
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
                }
                .activity-item:last-child { border-bottom: none; }
                .activity-main { display: flex; flex-direction: column; gap: 4px; }
                .activity-action { font-weight: 700; color: var(--neutral-700); font-size: 14px; }
                .activity-meta { font-size: 12px; color: var(--neutral-400); font-weight: 600; }
                
                .quick-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 24px; }
                .action-btn { 
                    background: var(--neutral-50); 
                    border: 1px solid var(--neutral-200);
                    padding: 16px;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    transition: all 0.2s;
                    cursor: pointer;
                }
                .action-btn:hover { background: var(--primary-dark); border-color: var(--primary); }
                .action-btn:hover span { color: white; }
                .action-btn .icon { font-size: 20px; }
                .action-btn span { font-size: 12px; font-weight: 700; color: var(--neutral-800); }

                @media (max-width: 1024px) {
                    .main-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <section className="welcome-section">
                <h1>Welcome Back, Admin</h1>
                <p>Here's what's happening with VAT Masters today.</p>
            </section>

            <div className="stats-grid">
                {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}15` }}>
                            {stat.icon}
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
                        {/* <button style={{ background: "none", border: "none", color: "var(--primary-dark)", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}>View All</button> */}
                    </div>
                    <ul className="activity-list">
                        {recentActivity.map((activity, idx) => (
                            <li key={idx} className="activity-item">
                                <div className="activity-main">
                                    <span className="activity-action">{activity.action}</span>
                                    <span className="activity-meta">by {activity.user} • {activity.time}</span>
                                </div>
                                <div style={{ fontSize: "14px", opacity: 0.5 }}>→</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid-card">
                    <div className="card-header">
                        <h2>Quick Actions</h2>
                    </div>
                    <div className="quick-actions">
                        {quickActions.map((action, idx) => (
                            <div key={idx} onClick={() => window.location.href=action.path} className="action-btn">
                                <span className="icon">{action.icon}</span>
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
