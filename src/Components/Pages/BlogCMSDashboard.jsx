import React, { useState, useEffect, useCallback } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import AdminModal from "../CommonDasboardComponents/AdminModal";
import { blogAPI, categoryAPI } from "../../services/api";

const BlogCMSDashboard = () => {
    const [search, setSearch] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    const [formData, setFormData] = useState({ title: "", author: "", category: "", status: "Published" });

    const loadPosts      = useCallback(() => { blogAPI.getPosts().then(setPosts).catch(console.error); }, []);
    const loadCategories = useCallback(() => { categoryAPI.getAll().then(setAvailableCategories).catch(console.error); }, []);

    useEffect(() => { loadPosts(); },      [loadPosts]);
    useEffect(() => { loadCategories(); }, [loadCategories]);

    const handleOpenModal = (post = null) => {
        if (post) {
            setEditingPost(post);
            setFormData({ title: post.title, author: post.author, category: post.category, status: post.status });
        } else {
            setEditingPost(null);
            setFormData({ title: "", author: "", category: availableCategories.length > 0 ? availableCategories[0].name : "Uncategorized", status: "Published" });
        }
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        if (!formData.title || !formData.author) return alert("Please fill all fields");
        setIsSaving(true);
        try {
            if (editingPost) {
                const updated = await blogAPI.updatePost(editingPost.id, formData);
                setPosts(prev => prev.map(p => p.id === updated.id ? updated : p));
            } else {
                const created = await blogAPI.createPost(formData);
                setPosts(prev => [created, ...prev]);
            }
            setIsModalOpen(false);
        } catch (e) { alert('Save failed: ' + e.message); }
        finally { setIsSaving(false); }
    };

    const deletePost = async (id) => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
        try {
            await blogAPI.deletePost(id);
            setPosts(prev => prev.filter(p => p.id !== id));
        } catch (e) { alert('Delete failed: ' + e.message); }
    };

    return (
        <ModernLayout activeTitle="Blog">
            <style>{`
                .content-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px}
                .header-left h1{margin:0;font-size:28px;font-weight:800;color:var(--neutral-800)}
                .add-btn{background:var(--primary-dark);color:white;border:1px solid var(--primary);padding:12px 24px;border-radius:8px;font-weight:700;cursor:pointer;transition:all .2s}
                .add-btn:hover{background:var(--primary);color:var(--primary-dark)}
                .table-card{background:white;border-radius:16px;border:1px solid var(--neutral-100);overflow:hidden}
                .card-header{padding:24px;border-bottom:1px solid var(--neutral-100);display:flex;justify-content:space-between;align-items:center}
                .search-input{background:var(--neutral-50);border:1px solid var(--neutral-200);padding:10px 16px;border-radius:8px;width:300px;outline:none}
                table{width:100%;border-collapse:collapse}
                th{background:var(--neutral-50);padding:16px 24px;font-size:12px;font-weight:800;text-transform:uppercase;color:var(--neutral-400);text-align:left}
                td{padding:18px 24px;border-bottom:1px solid var(--neutral-100);font-size:14px}
                .status-badge{padding:4px 10px;border-radius:20px;font-size:11px;font-weight:800}
                .status-published{background:#dcfce7;color:#166534}
                .status-draft{background:#fef3c7;color:#92400e}
                .form-group{margin-bottom:20px}
                .form-group label{display:block;font-size:13px;font-weight:700;color:#64748b;margin-bottom:8px}
                .form-group input,.form-group select{width:100%;padding:12px;border-radius:12px;border:1px solid #e2e8f0;outline:none;font-size:14px}
                .form-group input:focus{border-color:var(--primary)}
            `}</style>

            <header className="content-header">
                <div className="header-left"><h1>Blog CMS</h1></div>
                <button className="add-btn" onClick={() => handleOpenModal()}>
                    <i className="bi bi-plus-lg" style={{ marginRight: '8px' }}></i>
                    New Post
                </button>
            </header>

            <div className="table-card">
                <div className="card-header">
                    <input type="text" className="search-input" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <table>
                    <thead>
                        <tr><th>Article Title</th><th>Category</th><th>Author</th><th>Status</th><th>Date</th><th style={{ textAlign: "right" }}>Actions</th></tr>
                    </thead>
                    <tbody>
                        {posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())).map(post => (
                            <tr key={post.id}>
                                <td style={{ fontWeight: 700 }}>{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.author}</td>
                                <td><span className={`status-badge status-${post.status.toLowerCase()}`}>{post.status}</span></td>
                                <td style={{ color: "var(--neutral-400)" }}>{post.date}</td>
                                <td style={{ textAlign: "right" }}>
                                    <button onClick={() => handleOpenModal(post)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--primary-dark)" }}>
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button onClick={() => deletePost(post.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--danger)", marginLeft: "12px" }}>
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
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
                confirmText={isSaving ? "Saving..." : (editingPost ? "Update Post" : "Publish Post")}
            >
                <div className="form-group">
                    <label>Article Title</label>
                    <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. New Corporate Tax Rules" />
                </div>
                <div className="form-group">
                    <label>Author Name</label>
                    <input type="text" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} placeholder="e.g. John Doe" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                        <label>Category</label>
                        <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                            {availableCategories.length > 0
                                ? availableCategories.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)
                                : <option>Uncategorized</option>}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
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
