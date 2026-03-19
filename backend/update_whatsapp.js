import 'dotenv/config';
import pool from './db.js';

const schedule = [
    { day: 'Monday',    number: '+971 58 861 7514' },
    { day: 'Tuesday',   number: '+971 52 596 6056' },
    { day: 'Wednesday', number: '+971 58 861 7514' },
    { day: 'Thursday',  number: '+971 52 596 6056' },
    { day: 'Friday',    number: '+971 58 861 7514' },
    { day: 'Saturday',  number: '+971 52 596 6056' },
    { day: 'Sunday',    number: '+971 58 861 7514' },
];

(async () => {
    try {
        console.log('📡 Updating WhatsApp Global Schedule...');
        for (const item of schedule) {
            await pool.execute(
                'UPDATE whatsapp_global_schedule SET number = ? WHERE day = ?',
                [item.number, item.day]
            );
            console.log(`✅ Updated ${item.day}: ${item.number}`);
        }
        console.log('✨ All numbers updated successfully.');
    } catch (e) {
        console.error('❌ Error updating schedule:', e.message);
    } finally {
        process.exit(0);
    }
})();
