function runExample() {
  const output = document.getElementById('output');

  localStorage.setItem('nama', 'Eko');
  const nama = localStorage.getItem('nama');

  output.textContent = `
✔️ Data disimpan ke localStorage
Nama: ${nama}
  `;
}
