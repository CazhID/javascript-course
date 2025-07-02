### Tugas: Permainan Gunting-Batu-Kertas (Suit Jawa)

Permainan klasik ini adalah latihan yang sangat baik untuk mengelola kondisi, input pengguna, dan status permainan sederhana.

#### 🎯 Deskripsi Tugas

Buatlah permainan Gunting-Batu-Kertas melawan komputer.

1.  Halaman akan menampilkan tiga tombol pilihan untuk pemain: "Gunting", "Batu", dan "Kertas".
2.  Di bawahnya, ada area untuk menampilkan pilihan pemain, pilihan komputer, dan hasil pertandingan (Menang, Kalah, atau Seri).
3.  Setiap kali pemain mengklik salah satu tombol, komputer akan secara acak memilih opsinya, dan hasilnya akan langsung ditampilkan.
4.  (Opsional) Tambahkan papan skor untuk melacak skor pemain dan komputer.
5.  Tambahkan riwayat pertandingan dalam bentuk daftar (`<ol>`) di halaman. Setiap kali pemain menyelesaikan satu pertandingan:

- Buatlah elemen `<li>` baru dengan isi: pilihan pemain, pilihan komputer, dan hasilnya.
- Tambahkan elemen tersebut ke dalam `<ol>` menggunakan `appendChild`.
- Contoh tampilan riwayat:
  `Anda: batu, Komputer: gunting, Hasil: MENANG`

#### 🧠 Fokus Logika Utama

- **Pembangkitan Acak (Randomization):** Menggunakan `Math.random()` untuk membuat pilihan komputer yang tidak dapat diprediksi.
- **Logika Kondisional Kompleks:** Membuat serangkaian `if/else if/else` atau `switch` untuk menentukan pemenang berdasarkan semua kemungkinan kombinasi (misal: Batu mengalahkan Gunting, Kertas mengalahkan Batu, dst.).
- **Manajemen Status:** Menyimpan dan memperbarui data (seperti pilihan saat ini dan skor) dalam variabel JavaScript.
- **Manipulasi DOM:** Menggunakan `document.createElement()` dan `appendChild()` untuk menampilkan riwayat pertandingan ke dalam elemen `<ol>`.
- **Pemisahan Fungsi:** Memecah logika menjadi fungsi-fungsi kecil yang bisa dikelola (misal: `fungsiPilihanKomputer()`, `fungsiTentukanPemenang()`, `fungsiUpdateTampilan()`).

#### 🏗️ Kerangka HTML

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gunting Batu Kertas</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Gunting Batu Kertas</h1>
    <p>Pilih salah satu:</p>

    <div class="pilihan">
      <button onclick="main('gunting')">Gunting ✂️</button>
      <button onclick="main('batu')">Batu 🗿</button>
      <button onclick="main('kertas')">Kertas 📄</button>
    </div>

    <div id="hasil-pertandingan">
      <h2>Hasil:</h2>
      <p>Anda memilih: <strong id="pilihan-anda">-</strong></p>
      <p>Komputer memilih: <strong id="pilihan-komputer">-</strong></p>
      <h3 id="hasil-akhir">-</h3>
    </div>

    <div id="riwayat-pertandingan">
      <h2>Riwayat Pertandingan:</h2>
      <ol id="riwayat-list"></ol>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

#### 🏗️ Template script.js

```js
function main(pilihanPemain) {}

function getPilihanKomputer() {}

function tentukanPemenang(pemain, komputer) {}

function tampilkanHasil(pemain, komputer, hasil) {}

function tambahRiwayat(pemain, komputer, hasil) {}
```

#### 📝 Alur Logika JavaScript (`script.js`)

1.  **Buat fungsi utama `main(pilihanPemain)`** yang akan dipanggil saat tombol diklik.
2.  **Di dalam `main()`:**
    - Panggil fungsi `getPilihanKomputer()` untuk mendapatkan pilihan acak ("gunting", "batu", atau "kertas").
    - Panggil fungsi `tentukanPemenang(pilihanPemain, pilihanKomputer)` yang mengembalikan string hasil ('MENANG', 'KALAH', atau 'SERI').
    - Panggil fungsi `tampilkanHasil()` untuk memperbarui semua elemen `<strong>` dan `<h3>` di HTML dengan pilihan dan hasil akhir.
3.  **Implementasi `getPilihanKomputer()`:**
    - Buat array `['gunting', 'batu', 'kertas']`.
    - Gunakan `Math.random()` untuk menghasilkan indeks acak dari 0 sampai 2.
    - Return elemen array pada indeks acak tersebut.
4.  **Implementasi `tentukanPemenang()`:**
    - Ini adalah inti logikanya. Gunakan `if/else if`.
    - Kondisi pertama: Cek jika hasilnya "SERI" (`pilihanPemain === pilihanKomputer`).
    - Kondisi berikutnya: Cek semua kemungkinan pemain "MENANG". Contoh: `(pilihanPemain === 'batu' && pilihanKomputer === 'gunting') || (pilihanPemain === 'kertas' && pilihanKomputer === 'batu') || ...`
    - `else`: Jika tidak seri dan tidak menang, berarti pemain "KALAH".
    - Return string yang sesuai.
