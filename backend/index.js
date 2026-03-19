import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pool from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// ═══════════════════════════════════════════════════════════
//  WHATSAPP — Global Day Schedule
// ═══════════════════════════════════════════════════════════

// GET all 7 day rows
app.get('/api/whatsapp/global', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM whatsapp_global_schedule ORDER BY FIELD(day,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday")'
        );
        res.json(rows);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// PUT update a day row by id
app.put('/api/whatsapp/global/:id', async (req, res) => {
    const { name, number, message, status } = req.body;
    try {
        await pool.execute(
            'UPDATE whatsapp_global_schedule SET name=?, number=?, message=?, status=? WHERE id=?',
            [name, number, message, status, req.params.id]
        );
        const [[row]] = await pool.execute('SELECT * FROM whatsapp_global_schedule WHERE id=?', [req.params.id]);
        res.json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════
//  WHATSAPP — Page-Specific Overrides
// ═══════════════════════════════════════════════════════════

app.get('/api/whatsapp/overrides', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM whatsapp_overrides ORDER BY id DESC');
        res.json(rows);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/whatsapp/overrides', async (req, res) => {
    const { path, name, number, message, status } = req.body;
    try {
        const [result] = await pool.execute(
            'INSERT INTO whatsapp_overrides (path, name, number, message, status) VALUES (?,?,?,?,?)',
            [path, name, number, message, status || 'active']
        );
        const [[row]] = await pool.execute('SELECT * FROM whatsapp_overrides WHERE id=?', [result.insertId]);
        res.status(201).json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/whatsapp/overrides/:id', async (req, res) => {
    const { path, name, number, message, status } = req.body;
    try {
        await pool.execute(
            'UPDATE whatsapp_overrides SET path=?, name=?, number=?, message=?, status=? WHERE id=?',
            [path, name, number, message, status, req.params.id]
        );
        const [[row]] = await pool.execute('SELECT * FROM whatsapp_overrides WHERE id=?', [req.params.id]);
        res.json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/whatsapp/overrides/:id', async (req, res) => {
    try {
        await pool.execute('DELETE FROM whatsapp_overrides WHERE id=?', [req.params.id]);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET active routing for a given path (used by live site hook)
// e.g. GET /api/whatsapp/routing?path=/vat-registration
app.get('/api/whatsapp/routing', async (req, res) => {
    const path       = req.query.path || '/';
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    try {
        // 1. Page override first
        const [[override]] = await pool.execute(
            'SELECT * FROM whatsapp_overrides WHERE path=? AND status="active" LIMIT 1',
            [path]
        );
        if (override) {
            return res.json({ number: override.number.replace(/\D/g, ''), message: override.message });
        }
        // 2. Day schedule
        const [[day]] = await pool.execute(
            'SELECT * FROM whatsapp_global_schedule WHERE day=? AND status="active" LIMIT 1',
            [currentDay]
        );
        if (day) {
            return res.json({ number: day.number.replace(/\D/g, ''), message: day.message });
        }
        // 3. Hard fallback
        res.json({ number: '971525966056', message: 'Hello, VAT Master, We are looking for VAT Services.' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════
//  BLOG POSTS
// ═══════════════════════════════════════════════════════════

app.get('/api/blog/posts', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM blog_posts ORDER BY id DESC');
        res.json(rows);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/blog/posts', async (req, res) => {
    const { title, author, category, status } = req.body;
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    try {
        const [result] = await pool.execute(
            'INSERT INTO blog_posts (title, author, category, status, date) VALUES (?,?,?,?,?)',
            [title, author, category, status || 'Published', date]
        );
        const [[row]] = await pool.execute('SELECT * FROM blog_posts WHERE id=?', [result.insertId]);
        res.status(201).json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/blog/posts/:id', async (req, res) => {
    const { title, author, category, status } = req.body;
    try {
        await pool.execute(
            'UPDATE blog_posts SET title=?, author=?, category=?, status=? WHERE id=?',
            [title, author, category, status, req.params.id]
        );
        const [[row]] = await pool.execute('SELECT * FROM blog_posts WHERE id=?', [req.params.id]);
        res.json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/blog/posts/:id', async (req, res) => {
    try {
        await pool.execute('DELETE FROM blog_posts WHERE id=?', [req.params.id]);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════
//  CATEGORIES
// ═══════════════════════════════════════════════════════════

app.get('/api/categories', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categories ORDER BY id');
        res.json(rows);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/categories', async (req, res) => {
    const { name, status } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    try {
        const [result] = await pool.execute(
            'INSERT INTO categories (name, slug, count, status) VALUES (?,?,0,?)',
            [name, slug, status || 'Active']
        );
        const [[row]] = await pool.execute('SELECT * FROM categories WHERE id=?', [result.insertId]);
        res.status(201).json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/categories/:id', async (req, res) => {
    const { name, status } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    try {
        await pool.execute(
            'UPDATE categories SET name=?, slug=?, status=? WHERE id=?',
            [name, slug, status, req.params.id]
        );
        const [[row]] = await pool.execute('SELECT * FROM categories WHERE id=?', [req.params.id]);
        res.json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/categories/:id', async (req, res) => {
    try {
        await pool.execute('DELETE FROM categories WHERE id=?', [req.params.id]);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════
//  PRICING
// ═══════════════════════════════════════════════════════════

app.get('/api/pricing', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pricing_services ORDER BY id');
        const config = {};
        rows.forEach(r => {
            config[r.service_id] = {
                price:         r.price,
                originalPrice: r.original_price,
                currency:      r.currency,
                name:          r.name,
                status:        r.status
            };
        });
        res.json({ list: rows, config });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/pricing', async (req, res) => {
    const { service_id, name, price, originalPrice, currency, status } = req.body;
    try {
        const [result] = await pool.execute(
            'INSERT INTO pricing_services (service_id, name, price, original_price, currency, status) VALUES (?,?,?,?,?,?)',
            [service_id, name, price, originalPrice, currency || 'AED', status || 'active']
        );
        const [[row]] = await pool.execute('SELECT * FROM pricing_services WHERE id=?', [result.insertId]);
        res.status(201).json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/pricing/:serviceId', async (req, res) => {
    const { name, price, originalPrice, currency, status } = req.body;
    try {
        await pool.execute(
            'UPDATE pricing_services SET name=?, price=?, original_price=?, currency=?, status=? WHERE service_id=?',
            [name, price, originalPrice, currency, status, req.params.serviceId]
        );
        const [[row]] = await pool.execute('SELECT * FROM pricing_services WHERE service_id=?', [req.params.serviceId]);
        res.json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/pricing/:serviceId', async (req, res) => {
    try {
        await pool.execute('DELETE FROM pricing_services WHERE service_id=?', [req.params.serviceId]);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════
//  META / SEO
// ═══════════════════════════════════════════════════════════

app.get('/api/meta', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM meta_pages ORDER BY id');
        res.json(rows);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/meta/:pageId', async (req, res) => {
    const { title, description, keywords } = req.body;
    try {
        await pool.execute(
            'UPDATE meta_pages SET title=?, description=?, keywords=? WHERE page_id=?',
            [title, description, keywords, req.params.pageId]
        );
        const [[row]] = await pool.execute('SELECT * FROM meta_pages WHERE page_id=?', [req.params.pageId]);
        res.json(row);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// ═══════════════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════════════

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log(`📡 Login attempt for: ${username}`);
        const [[user]] = await pool.execute('SELECT * FROM admin_users WHERE username=?', [username]);
        if (!user) {
            console.log(`❌ User not found: ${username}`);
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            console.log(`❌ Password mismatch for: ${username}`);
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        console.log(`✅ Login successful: ${username}`);
        res.json({ success: true, user: { username: user.username, role: user.role } });
    } catch (e) { 
        console.error(`❌ Auth error: ${e.message}`);
        res.status(500).json({ error: e.message }); 
    }
});

// ═══════════════════════════════════════════════════════════
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ VAT Master API running → http://127.0.0.1:${PORT}`));
