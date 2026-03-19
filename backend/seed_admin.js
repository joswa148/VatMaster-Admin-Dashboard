// Run once:  node seed_admin.js
// Creates admin user with password: 2020@Global

import 'dotenv/config';
import bcrypt from 'bcrypt';
import pool   from './db.js';

(async () => {
    const hash = await bcrypt.hash('2020@Global', 10);
    await pool.execute(
        'INSERT INTO admin_users (username, password_hash, role) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE password_hash=?',
        ['admin', hash, 'admin', hash]
    );
    console.log('✅ Admin user created: admin / 2020@Global');
    process.exit(0);
})();
