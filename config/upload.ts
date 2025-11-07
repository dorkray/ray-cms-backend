// Path: backend/config/upload.ts

export default ({ env }) => ({
  // Ini memberitahu Strapi cara membuat URL publiknya
  // Kita pastikan URL yang disimpan di database adalah URL Cloudinary yang ABSOLUT
  // Format ini wajib ada jika menggunakan provider Cloud
  baseUrl: env('CLOUDINARY_DELIVERY_URL', 'https://res.cloudinary.com/dh8ewig2t/'),
  
  // URL untuk file yang di-upload
  uploadUrl: env('CLOUDINARY_UPLOAD_URL', 'https://api.cloudinary.com/v1_1/dh8ewig2t/upload'),

  // Pastikan Anda mengubah 'dh8ewig2t' di atas sesuai dengan Cloud Name Anda.
});