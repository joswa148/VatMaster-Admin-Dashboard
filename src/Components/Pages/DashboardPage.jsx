import React from 'react'
import ModernLayout from '../CommonDasboardComponents/ModernLayout'

const DashboardPage = () => {
  return (
    <ModernLayout activeTitle="Dashboard">
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontWeight: 800, fontSize: "28px" }}>Dashboard Overview</h1>
            <p style={{ color: "var(--neutral-400)", marginTop: "8px" }}>Welcome back to the VAT Masters administration panel.</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginTop: "32px" }}>
                <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)", border: "1px solid var(--neutral-200)" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--neutral-400)", textTransform: "uppercase" }}>Total Leads</div>
                    <div style={{ fontSize: "32px", fontWeight: 800, marginTop: "8px", color: "var(--neutral-800)" }}>1,284</div>
                </div>
                <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)", border: "1px solid var(--neutral-200)" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--neutral-400)", textTransform: "uppercase" }}>Active WhatsApps</div>
                    <div style={{ fontSize: "32px", fontWeight: 800, marginTop: "8px", color: "var(--neutral-800)" }}>18</div>
                </div>
                <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)", border: "1px solid var(--neutral-200)" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--neutral-400)", textTransform: "uppercase" }}>Total Blogs</div>
                    <div style={{ fontSize: "32px", fontWeight: 800, marginTop: "8px", color: "var(--neutral-800)" }}>43</div>
                </div>
                <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)", border: "1px solid var(--neutral-200)" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--neutral-400)", textTransform: "uppercase" }}>Categories</div>
                    <div style={{ fontSize: "32px", fontWeight: 800, marginTop: "8px", color: "var(--neutral-800)" }}>12</div>
                </div>
            </div>
        </div>
    </ModernLayout>
  )
}

export default DashboardPage