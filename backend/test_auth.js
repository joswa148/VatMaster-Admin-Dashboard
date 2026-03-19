import bcrypt from 'bcrypt';
import pool from './db.js';
import 'dotenv/config';

(async () => {
    try {
        const [rows] = await pool.execute('SELECT * FROM admin_users WHERE username=?', ['admin']);
        if (rows.length === 0) {
            console.log('❌ User "admin" not found in database.');
        } else {
            const user = rows[0];
            console.log('✅ User "admin" found.');
            const match = await bcrypt.compare('2020@Global', user.password_hash);
            console.log(`Password "2020@Global" match: ${match}`);
        }
    } catch (e) {
        console.error('❌ Error testing credentials:', e.message);
    } finally {
        process.exit(0);
    }
})();
