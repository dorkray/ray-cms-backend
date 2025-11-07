// Path: backend/config/database.ts
// KODE YANG SUDAH DIPERBAIKI (FINAL)
import path from 'path';

export default ({ env }) => {
  
  // === KONEKSI PRODUKSI (RENDER + NEON) ===
  // Jika NODE_ENV adalah 'production', paksa gunakan Neon/Postgres.
  if (env('NODE_ENV') === 'production') {
    
    const connectionString = env('DATABASE_URL'); // Ambil URL dari Render

    // Jika DATABASE_URL tidak ada di production, sengaja gagalkan build
    if (!connectionString) {
      throw new Error("FATAL: DATABASE_URL environment variable is not set for production");
    }

    return {
      connection: {
        client: 'postgres', // Paksa client jadi postgres
        connection: {
          connectionString,
          ssl: {
            rejectUnauthorized: false // Wajib untuk Neon
          },
        },
        debug: false,
      },
    };
  }

  // === KONEKSI LOKAL (KOMPUTER ANDA) ===
  // Jika tidak (misal di localhost), gunakan SQLite (kode asli Anda)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};