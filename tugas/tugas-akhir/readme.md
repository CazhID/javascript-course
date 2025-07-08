### 📌 **Proyek: Aplikasi Pencarian Film (dengan Login/Registrasi & Favorit)**

---

### 🎯 **Fitur Utama**

1. ✅ **Registrasi & Login**
2. 🏠 **Beranda (setelah login)**
3. 🔍 **Pencarian & Filter Film (berbasis API TMDB)**
4. ⭐ **Tambah ke Favorit (disimpan per pengguna di `localStorage`)**
5. 🎬 **Halaman Detail Film**

---

### 🧱 **Struktur Halaman Aplikasi**

| Halaman          | Deskripsi                                                            |
| ---------------- | -------------------------------------------------------------------- |
| `register.html`  | Formulir pendaftaran pengguna baru (data disimpan ke `localStorage`) |
| `login.html`     | Formulir login (validasi dari data `localStorage`)                   |
| `home.html`      | Halaman utama/beranda (hanya bisa diakses jika sudah login)          |
| `search.html`    | Halaman pencarian & filter film (menggunakan TMDB API)               |
| `movie.html`     | Tampilan detail film yang dipilih                                    |
| `favorites.html` | Daftar film favorit pengguna yang tersimpan                          |

---

### 🧠 **Alur Aplikasi**

1. **Registrasi**
   → Simpan `{username, password, favorites: []}` ke `localStorage.users`

2. **Login**
   → Cek apakah kombinasi username dan password cocok
   → Jika cocok, simpan `localStorage.currentUser = username`
   → Arahkan ke `home.html`

3. **Beranda**
   → Tampilkan sambutan dan navigasi ke Pencarian & Favorit

4. **Pencarian Film**
   → Gunakan API TMDB (`/search/movie?query=`)
   → Filter & tampilkan hasil pencarian
   → Klik tombol untuk melihat detail atau tambahkan ke favorit

5. **Detail Film**
   → Ambil data lengkap film dari TMDB berdasarkan ID
   → Tampilkan informasi & tombol untuk tambah/hapus favorit

6. **Favorit**
   → Ambil daftar ID film favorit dari user yang login
   → Ambil detail dari masing-masing ID & tampilkan

---

### 🗂️ **Struktur Folder & File**

```
movie-app/
│
├── index.html         -> redirect otomatis ke login atau home berdasarkan status login
├── login.html
├── register.html
├── home.html
├── search.html
├── movie.html
├── favorites.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── config.js         -> menyimpan API key dan URL TMDB
│   ├── auth.js           -> logika login & registrasi
│   ├── storage.js        -> helper untuk akses `localStorage`
│   ├── movies.js         -> logika pencarian & detail film via TMDB
│   ├── favorites.js      -> logika favorit
│   ├── app.js            -> utilitas umum
```
