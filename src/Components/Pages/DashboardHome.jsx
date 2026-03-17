import React from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";

const DashboardHome = () => {
    // Pull real stats from localStorage
    const getStats = () => {
        const whatsappData = JSON.parse(localStorage.getItem('whatsapp_routing_raw_data') || '[]');
        const pricingData = JSON.parse(localStorage.getItem('vat_masters_pricing_raw_data') || '[]');
        const metaData = JSON.parse(localStorage.getItem('vat_masters_meta_raw_data') || '[]');
        const blogData = JSON.parse(localStorage.getItem('vat_masters_blog_posts') || '[]');

        const activeWhatsapp = whatsappData.filter(d => d.status === 'active').length;
        const totalWhatsapp = whatsappData.length;

        const activePricing = pricingData.filter(d => d.status === 'active').length;

        return [
            { label: "Active Services", value: activePricing.toString(), icon: "💰", color: "#6366f1" },
            { label: "Active WhatsApp", value: `${activeWhatsapp} / ${totalWhatsapp}`, icon: "💬", color: "#22c55e" },
            { label: "SEO Configs", value: metaData.length.toString(), icon: "🎯", color: "#00E6F6" },
            { label: "Blog Posts", value: blogData.length.toString(), icon: "📝", color: "#f59e0b" },
        ];
    };

    const stats = getStats();

    const quickActions = [
        { label: "Update WhatsApp", path: "/dashboard/whatsapp", icon: "📲" },
        { label: "Edit Meta Tags", path: "/dashboard/meta", icon: "🔍" },
        { label: "Manage Pricing", path: "/dashboard/pricing", icon: "💰" },
        { label: "New Blog Post", path: "/dashboard/blogs", icon: "✍️" },
    ];

    const recentActivity = [
        { action: "WhatsApp routing updated for Monday", time: "2 hours ago", user: "Admin", type: "whatsapp" },
        { action: "New service 'VAT Audit' added to Pricing", time: "5 hours ago", user: "Admin", type: "pricing" },
        { action: "Meta description updated for Home Page", time: "1 day ago", user: "System", type: "meta" },
        { action: "Blog post 'New FTA Regulations' published", time: "2 days ago", user: "Content Team", type: "blog" },
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
                    border: 1px solid var(--neutral-100);
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
                        <button style={{ background: "none", border: "none", color: "var(--primary-dark)", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}>View All</button>
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
                            <a key={idx} href={action.path} className="action-btn">
                                <span className="icon">{action.icon}</span>
                                <span>{action.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </ModernLayout>
    );
};

export default DashboardHome;
