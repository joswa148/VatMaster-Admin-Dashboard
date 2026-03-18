import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";
import AdminModal from "../CommonDasboardComponents/AdminModal";

const CategoriesDashboard = () => {
    const initialData = [
        { name: "Legal Updates", slug: "legal-updates", count: 12, status: "Active" },
        { name: "Tax Tutorials", slug: "tax-tutorials", count: 8, status: "Active" },
        { name: "Business Growth", slug: "business-growth", count: 15, status: "Active" },
        { name: "Uncategorized", slug: "uncategorized", count: 7, status: "Hidden" },
    ];

    const [categories, setCategories] = useState(() => {
        const saved = localStorage.getItem('vat_masters_categories');
        return saved ? JSON.parse(saved) : initialData;
    });

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCat, setEditingCat] = useState(null);
    const [formData, setFormData] = useState({ name: "", status: "Active" });

    useEffect(() => {
        localStorage.setItem('vat_masters_categories', JSON.stringify(categories));
    }, [categories]);

    const handleOpenModal = (cat = null) => {
        if (cat) {
            setEditingCat(cat);
            setFormData({ name: cat.name, status: cat.status });
        } else {
            setEditingCat(null);
            setFormData({ name: "", status: "Active" });
        }
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!formData.name) return alert("Please enter a name");

        if (editingCat) {
            setCategories(categories.map(c => c.name === editingCat.name ? { ...c, ...formData, slug: formData.name.toLowerCase().replace(/ /g, '-') } : c));
        } else {
            const newCat = {
                ...formData,
                slug: formData.name.toLowerCase().replace(/ /g, '-'),
                count: 0
            };
            setCategories([...categories, newCat]);
        }
        setIsModalOpen(false);
    };

    const deleteCategory = (name) => {
        if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
            setCategories(categories.filter(c => c.name !== name));
        }
    };

    return (
        <ModernLayout activeTitle="Categories">
            <style>{`
                .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
                .header-left h1 { margin: 0; font-size: 28px; font-weight: 800; color: var(--neutral-800); }
                
                .add-btn { background: var(--primary-dark); color: white; border: 1px solid var(--primary); padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
                .add-btn:hover { background: var(--primary); color: var(--primary-dark); }

                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
                .category-card { 
                    background: white; 
                    padding: 24px; 
                    border-radius: 20px; 
                    border: 1px solid var(--neutral-100);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                }
                .cat-info h3 { margin: 0; font-size: 18px; color: var(--neutral-800); }
                .cat-info p { margin: 4px 0 0; color: var(--neutral-400); font-size: 13px; font-weight: 600; }
                
                .count-badge { 
                    background: var(--neutral-50); 
                    color: var(--primary-dark);
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    display: grid;
                    place-items: center;
                    font-weight: 800;
                    border: 1px solid var(--neutral-100);
                }

                .card-actions { position: absolute; top: 12px; right: 12px; display: flex; gap: 8px; opacity: 0; transition: opacity 0.2s; }
                .category-card:hover .card-actions { opacity: 1; }
                .action-btn { background: white; border: 1px solid #e2e8f0; width: 28px; height: 28px; border-radius: 8px; cursor: pointer; display: grid; place-items: center; font-size: 14px; }
                .action-btn:hover { background: #f8fafc; border-color: #cbd5e1; }

                .form-group { margin-bottom: 20px; }
                .form-group label { display: block; font-size: 13px; font-weight: 700; color: #64748b; margin-bottom: 8px; }
                .form-group input, .form-group select { 
                    width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; outline: none; font-size: 14px;
                }
            `}</style>

            <header className="content-header">
                <div className="header-left">
                    <h1>Content Categories</h1>
                </div>
                <button className="add-btn" onClick={() => handleOpenModal()}>+ Add Category</button>
            </header>

            <div className="grid">
                {categories.map((cat, idx) => (
                    <div key={idx} className="category-card">
                        <div className="cat-info">
                            <h3>{cat.name}</h3>
                            <p>/{cat.slug} • {cat.status}</p>
                        </div>
                        <div className="count-badge">
                            {cat.count}
                        </div>
                        <div className="card-actions">
                            <button className="action-btn" onClick={() => handleOpenModal(cat)}>✏️</button>
                            <button className="action-btn" onClick={() => deleteCategory(cat.name)}>🗑️</button>
                        </div>
                    </div>
                ))}
            </div>

            <AdminModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                title={editingCat ? "Edit Category" : "Add New Category"}
                onConfirm={handleSave}
                confirmText={editingCat ? "Update Category" : "Add Category"}
            >
                <div className="form-group">
                    <label>Category Name</label>
                    <input 
                        type="text" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Legal Updates"
                    />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                        <option>Active</option>
                        <option>Hidden</option>
                    </select>
                </div>
            </AdminModal>
        </ModernLayout>
    );
};

export default CategoriesDashboard;
