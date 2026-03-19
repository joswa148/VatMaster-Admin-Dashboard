import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ModernLayout = ({ children, activeTitle = "Dashboard" }) => {
    const navigate = useNavigate();
    const { logout, isAuthenticated, isLoading } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate("/login");
        }
    }, [isLoading, isAuthenticated, navigate]);

    if (isLoading) {
        return <div style={{ background: '#0B2F35', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Loading VAT Masters...</div>;
    }

    if (!isAuthenticated) return null;

    const menuItems = [
        { icon: "🏠", label: "Main Dashboard", path: "/dashboard", active: activeTitle === "Dashboard" },
        { icon: "💬", label: "WhatsApp Routing", path: "/dashboard/whatsapp", active: activeTitle === "WhatsApp Routing" },
        { icon: "💰", label: "Pricing Manager", path: "/dashboard/pricing", active: activeTitle === "Pricing Manager" },
        { icon: "📊", label: "Meta Settings", path: "/dashboard/meta", active: activeTitle === "Meta settings" },
        { icon: "📝", label: "Blog CMS", path: "/dashboard/blogs", active: activeTitle === "Blog" },
        { icon: "📂", label: "Categories", path: "/dashboard/categories", active: activeTitle === "Categories" },
    ];

    return (
        <div className="modern-layout-root">
            <style>{`
                :root {
                    --primary: #00E6F6;
                    --primary-dark: #0B2F35;
                    --secondary: #6366f1;
                    --danger: #ef4444;
                    --success: #22c55e;
                    --neutral-50: #f8fafc;
                    --neutral-100: #f1f5f9;
                    --neutral-200: #e2e8f0;
                    --neutral-300: #cbd5e1;
                    --neutral-400: #94a3b8;
                    --neutral-600: #475569;
                    --neutral-700: #334155;
                    --neutral-800: #152A2E;
                    --sidebar-bg: #223b41;
                    --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                }

                .modern-layout-root { display: flex; flex-direction: column; min-height: 100vh; font-family: 'Inter', -apple-system, sans-serif; }

                /* Top Nav */
                .top-nav {
                    height: 64px;
                    background: var(--primary-dark);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 24px;
                    color: white;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .brand { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 20px; letter-spacing: -0.5px; }
                .hamburger { background: none; border: none; color: white; cursor: pointer; font-size: 20px; }
                .logout-btn { background: rgba(255,255,255,0.1); border: 1px solid var(--primary); color: white; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
                .logout-btn:hover { background: var(--primary); color: var(--primary-dark); }

                /* Layout */
                .main-container { display: flex; flex: 1; }

                /* Sidebar */
                .sidebar {
                    width: ${isSidebarOpen ? "250px" : "80px"};
                    background: var(--sidebar-bg);
                    border-right: 1px solid rgba(255,255,255,0.05);
                    padding: 24px 12px;
                    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .menu-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 12px 16px;
                    border-radius: 10px;
                    color: var(--neutral-600);
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.2s;
                    border: none;
                    background: none;
                    width: 100%;
                    cursor: pointer;
                    white-space: nowrap;
                    text-align: left;
                }
                .menu-item:hover { background: rgba(255,255,255,0.05); color: var(--primary); }
                .menu-item.active { background: rgba(255,255,255,0.1); color: var(--primary); box-shadow: none; }
                .menu-label { opacity: ${isSidebarOpen ? 1 : 0}; transition: opacity 0.2s; }

                /* Content Area */
                .page-content { flex: 1; padding: 32px; background: #f8fafc; overflow-y: auto; }

                @media (max-width: 1024px) {
                    .sidebar { width: 80px; }
                    .menu-label { display: none; }
                }
            `}</style>

            <nav className="top-nav">
                <div className="brand">
                    <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>
                    <span>VAT Masters</span>
                </div>
                <button className="logout-btn" onClick={() => {
                    logout();
                    navigate("/login");
                }}>Logout</button>
            </nav>

            <div className="main-container">
                <aside className="sidebar">
                    <div style={{ padding: "0 6px", marginBottom: "12px", color: "var(--neutral-400)", fontSize: "20px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", opacity: isSidebarOpen ? 1 : 0 }}>
                        Dashboard
                    </div>
                    {menuItems.map((item, idx) => (
                        <button 
                            key={idx} 
                            className={`menu-item ${item.active ? "active" : ""}`}
                            onClick={() => item.path !== "#" && navigate(item.path)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            <span className="menu-label">{item.label}</span>
                        </button>
                    ))}
                </aside>
                <main className="page-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default ModernLayout;
