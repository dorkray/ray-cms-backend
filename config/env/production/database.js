// Path: backend/config/env/production/database.js
// KODE BARU YANG LEBIH SIMPEL

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'), // Langsung pakai URL dari Render
      ssl: {
        rejectUnauthorized: false // Wajib untuk Neon
      },
    },
    debug: false,
  },
});