import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";

const BlogCMSDashboard = () => {
    const [search, setSearch] = useState("");
    const [isSyncing, setIsSyncing] = useState(false);
    
    const initialData = [
        { id: 1, title: "New VAT Regulations in UAE 2026", author: "Ahmed Al", category: "Legal", status: "Published", date: "Mar 15, 2026" },
        { id: 2, title: "How to Register for Corporate Tax", author: "Sarah Jane", category: "Tutorial", status: "Draft", date: "Mar 12, 2026" },
        { id: 3, title: "Top 10 Tax Benefits for SMEs", author: "John Smith", category: "Business", status: "Published", date: "Mar 10, 2026" },
    ];

    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('vat_masters_blog_posts');
        return saved ? JSON.parse(saved) : initialData;
    });

    useEffect(() => {
        // Use a small delay before showing sync status to avoid cascading render lint
        const syncStart = setTimeout(() => setIsSyncing(true), 10);
        const timer = setTimeout(() => {
            localStorage.setItem('vat_masters_blog_posts', JSON.stringify(posts));
            setIsSyncing(false);
        }, 500);
        return () => {
            clearTimeout(syncStart);
            clearTimeout(timer);
        };
    }, [posts]);

    const deletePost = (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            setPosts(posts.filter(p => p.id !== id));
        }
    };

    const addDummyPost = () => {
        const newPost = {
            id: Date.now(),
            title: "New Dynamic Article " + (posts.length + 1),
            author: "Admin",
            category: "General",
            status: "Draft",
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <ModernLayout activeTitle="Blog">
            <style>{`
                .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
                .header-left h1 { margin: 0; font-size: 28px; font-weight: 800; color: var(--neutral-800); }
                .sync-badge { font-size: 12px; padding: 4px 8px; border-radius: 4px; font-weight: 700; margin-left:12px; }
                
                .add-btn { background: var(--primary-dark); color: white; border: 1px solid var(--primary); padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
                .add-btn:hover { background: var(--primary); color: var(--primary-dark); }

                .table-card { background: white; border-radius: 16px; border: 1px solid var(--neutral-100); overflow: hidden; }
                .card-header { padding: 24px; border-bottom: 1px solid var(--neutral-100); display: flex; justify-content: space-between; align-items: center; }
                .search-input { background: var(--neutral-50); border: 1px solid var(--neutral-200); padding: 10px 16px; border-radius: 8px; width: 300px; outline: none; }

                table { width: 100%; border-collapse: collapse; }
                th { background: var(--neutral-50); padding: 16px 24px; font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--neutral-400); text-align: left; }
                td { padding: 18px 24px; border-bottom: 1px solid var(--neutral-100); font-size: 14px; }
                
                .status-badge { padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 800; }
                .status-published { background: #dcfce7; color: #166534; }
                .status-draft { background: #fef3c7; color: #92400e; }
            `}</style>

            <header className="content-header">
                <div className="header-left" style={{ display: 'flex', alignItems: 'center' }}>
                    <h1>Blog CMS</h1>
                    {isSyncing ? (
                        <span className="sync-badge" style={{ background: "#fef3c7", color: "#92400e" }}>⏳ Saving...</span>
                    ) : (
                        <span className="sync-badge" style={{ background: "#d1fae5", color: "#065f46" }}>✅ Synced</span>
                    )}
                </div>
                <button className="add-btn" onClick={addDummyPost}>+ New Post</button>
            </header>

            <div className="table-card">
                <div className="card-header">
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search articles..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Article Title</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th style={{ textAlign: "right" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())).map(post => (
                            <tr key={post.id}>
                                <td style={{ fontWeight: 700 }}>{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.author}</td>
                                <td>
                                    <span className={`status-badge status-${post.status.toLowerCase()}`}>
                                        {post.status}
                                    </span>
                                </td>
                                <td style={{ color: "var(--neutral-400)" }}>{post.date}</td>
                                <td style={{ textAlign: "right" }}>
                                    <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>✏️</button>
                                    <button onClick={() => deletePost(post.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", marginLeft: "8px" }}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ModernLayout>
    );
};

export default BlogCMSDashboard;
