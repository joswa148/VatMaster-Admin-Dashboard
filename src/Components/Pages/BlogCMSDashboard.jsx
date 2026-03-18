import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import AdminModal from "../CommonDasboardComponents/AdminModal";

const BlogCMSDashboard = () => {
    const [search, setSearch] = useState("");
    const [isSyncing, setIsSyncing] = useState(false);
    
    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    
    // Dynamic Categories
    const [availableCategories, setAvailableCategories] = useState([]);
    
    useEffect(() => {
        const savedCats = localStorage.getItem('vat_masters_categories');
        if (savedCats) {
            const parsed = JSON.parse(savedCats);
            setTimeout(() => setAvailableCategories(parsed), 0);
        }
    }, []);

    const [formData, setFormData] = useState({ 
        title: "", 
        author: "", 
        category: "", 
        status: "Published" 
    });

    useEffect(() => {
        if (!editingPost && availableCategories.length > 0 && !formData.category) {
            setTimeout(() => {
                setFormData(prev => ({ ...prev, category: availableCategories[0].name }));
            }, 0);
        }
    }, [availableCategories, editingPost, formData.category]);
    
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

    const handleOpenModal = (post = null) => {
        if (post) {
            setEditingPost(post);
            setFormData({ title: post.title, author: post.author, category: post.category, status: post.status });
        } else {
            setEditingPost(null);
            setFormData({ 
                title: "", 
                author: "", 
                category: availableCategories.length > 0 ? availableCategories[0].name : "Uncategorized", 
                status: "Published" 
            });
        }
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!formData.title || !formData.author) return alert("Please fill all fields");

        if (editingPost) {
            setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...formData } : p));
        } else {
            const newPost = {
                id: Date.now(),
                ...formData,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            };
            setPosts([newPost, ...posts]);
        }
        setIsModalOpen(false);
    };

    const deletePost = (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            setPosts(posts.filter(p => p.id !== id));
        }
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

                .form-group { margin-bottom: 20px; }
                .form-group label { display: block; font-size: 13px; font-weight: 700; color: #64748b; margin-bottom: 8px; }
                .form-group input, .form-group select { 
                    width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; outline: none; font-size: 14px;
                }
                .form-group input:focus { border-color: var(--primary); }
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
                <button className="add-btn" onClick={() => handleOpenModal()}>+ New Post</button>
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
                                    <button onClick={() => handleOpenModal(post)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>✏️</button>
                                    <button onClick={() => deletePost(post.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", marginLeft: "8px" }}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AdminModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                title={editingPost ? "Edit Blog Post" : "Add New Post"}
                onConfirm={handleSave}
                confirmText={editingPost ? "Update Post" : "Publish Post"}
            >
                <div className="form-group">
                    <label>Article Title</label>
                    <input 
                        type="text" 
                        value={formData.title} 
                        onChange={e => setFormData({...formData, title: e.target.value})}
                        placeholder="e.g. New Corporate Tax Rules"
                    />
                </div>
                <div className="form-group">
                    <label>Author Name</label>
                    <input 
                        type="text" 
                        value={formData.author} 
                        onChange={e => setFormData({...formData, author: e.target.value})}
                        placeholder="e.g. John Doe"
                    />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                        <label>Category</label>
                        <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                            {availableCategories.length > 0 ? (
                                availableCategories.map(cat => (
                                    <option key={cat.slug} value={cat.name}>{cat.name}</option>
                                ))
                            ) : (
                                <option>Uncategorized</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                            <option>Published</option>
                            <option>Draft</option>
                        </select>
                    </div>
                </div>
            </AdminModal>
        </ModernLayout>
    );
};

export default BlogCMSDashboard;
