import 'dotenv/config';
import pool from './db.js';

(async () => {
    try {
        const [rows] = await pool.execute('SELECT id, username, role FROM admin_users');
        console.log('--- ADMIN USERS ---');
        console.table(rows);
    } catch (e) {
        console.error('Error fetching users:', e.message);
    } finally {
        process.exit(0);
    }
})();
