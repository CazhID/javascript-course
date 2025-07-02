// Penjelasan
// Browser memiliki 2 jenis utama penyimpanan lokal:
// - localStorage: Data disimpan permanen (sampai dihapus secara manual).
// - sessionStorage: Data hanya bertahan selama tab browser dibuka.

function runExample() {
  const output = document.getElementById('output');
  output.textContent = `
localStorage tersedia: ${typeof localStorage !== 'undefined'}
sessionStorage tersedia: ${typeof sessionStorage !== 'undefined'}
IndexedDB tersedia: ${typeof indexedDB !== 'undefined'}
document.cookie tersedia: ${typeof document.cookie !== 'undefined'}
  `;
}
