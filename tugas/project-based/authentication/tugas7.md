### Tugas: Aplikasi Registrasi dan Login Sederhana

Tugas ini melatih penggunaan dasar DOM, manipulasi form, serta penyimpanan data menggunakan Web Storage API (`localStorage`) di sisi klien.

#### 🎯 Deskripsi Tugas

Buat sebuah aplikasi registrasi dan login sederhana. Pengguna dapat mendaftar dengan memasukkan username dan password. Data akun akan disimpan di `localStorage`. Setelah berhasil mendaftar, pengguna dapat login dengan data tersebut. Jika login berhasil, pengguna diarahkan ke halaman dashboard sederhana. Sistem ini juga menyediakan tombol logout.

#### 🛠️ Konsep JavaScript yang Diuji

- `localStorage.setItem()` dan `localStorage.getItem()` untuk menyimpan dan mengambil data
- `JSON.stringify()` dan `JSON.parse()` untuk mengelola data objek dalam `localStorage`
- Validasi form input (tidak boleh kosong, username unik, dsb.)
- `document.querySelector()` atau `getElementById()` untuk akses elemen
- Manipulasi halaman menggunakan `location.href` (untuk redirect)
- Struktur data sederhana (array of objects untuk daftar akun)

#### 🏗️ Halaman HTML yang Diperlukan

- **register.html**
  Berisi form registrasi dengan:

  - `<input type="text">` untuk username
  - `<input type="password">` untuk password
  - `<button>` untuk mendaftar

- **login.html**
  Berisi form login dengan:

  - `<input type="text">` untuk username
  - `<input type="password">` untuk password
  - `<button>` untuk login

- **dashboard.html**
  Halaman sambutan sederhana setelah login berhasil, dilengkapi dengan:

  - Pesan sambutan (misalnya: "Halo, \[username]!")
  - `<button>` untuk logout
