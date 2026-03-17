import React, { useState, useEffect } from "react";
import ModernLayout from "../CommonDasboardComponents/ModernLayout";

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

    useEffect(() => {
        localStorage.setItem('vat_masters_categories', JSON.stringify(categories));
    }, [categories]);

    const addCategory = () => {
        const name = window.prompt("Enter category name:");
        if (name) {
            const newCat = {
                name,
                slug: name.toLowerCase().replace(/ /g, '-'),
                count: 0,
                status: "Active"
            };
            setCategories([...categories, newCat]);
        }
    };

    return (
        <ModernLayout activeTitle="Categories">
            <style>{`
                .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
                .header-left h1 { margin: 0; font-size: 28px; font-weight: 800; color: var(--neutral-800); }
                
                .add-btn { background: var(--primary-dark); color: white; border: 1px solid var(--primary); padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; }

                .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
                .category-card { 
                    background: white; 
                    padding: 24px; 
                    border-radius: 20px; 
                    border: 1px solid var(--neutral-100);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
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
            `}</style>

            <header className="content-header">
                <div className="header-left">
                    <h1>Content Categories</h1>
                </div>
                <button className="add-btn" onClick={addCategory}>+ Add Category</button>
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
                    </div>
                ))}
            </div>
        </ModernLayout>
    );
};

export default CategoriesDashboard;
