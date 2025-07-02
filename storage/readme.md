### 🗃️ 1. **localStorage**

**Apa itu?**
Penyimpanan data permanen di browser. Data tetap ada meskipun pengguna menutup tab atau browser.

**Contoh penggunaannya:**
Menyimpan nama pengguna, preferensi tema (gelap/terang), atau data lain yang ingin diingat saat pengguna kembali.

**Ciri-ciri:**

- Kapasitas: \~5–10 MB
- Data disimpan sebagai string
- Bisa diakses dari semua tab dengan domain yang sama

```js
localStorage.setItem('nama', 'Eko');
let nama = localStorage.getItem('nama'); // "Eko"
```

---

### 🕓 2. **sessionStorage**

**Apa itu?**
Mirip seperti localStorage, tapi datanya **hanya bertahan selama tab aktif**. Setelah tab ditutup, datanya hilang.

**Contoh penggunaannya:**
Menyimpan status login sementara di satu tab, progress kuis, atau form yang belum selesai.

**Ciri-ciri:**

- Kapasitas mirip localStorage
- Hanya bisa diakses oleh tab yang menyimpannya
- Data hilang saat tab/browser ditutup

```js
sessionStorage.setItem('sessionId', 'abc123');
let sessionId = sessionStorage.getItem('sessionId'); // "abc123"
```

---

### 📡 3. **Cookies**

**Apa itu?**
Data kecil yang disimpan di browser dan **bisa dikirim ke server setiap kali halaman dimuat**.

**Contoh penggunaannya:**
Menyimpan token login, pengaturan bahasa, atau pelacakan aktivitas pengguna (misalnya di e-commerce).

**Ciri-ciri:**

- Kapasitas kecil (\~4KB)
- Bisa diatur masa berlakunya
- Bisa diakses dari server (opsional)

```js
document.cookie = 'username=Eko; expires=Sun, 07 Jul 2025 12:00:00 UTC; path=/';
```

---

### 🧱 4. **IndexedDB**

**Apa itu?**
Database lokal di browser. Cocok untuk menyimpan **data besar dan kompleks**, seperti objek JSON, file gambar, dan lainnya.

**Contoh penggunaannya:**
Aplikasi offline seperti note app, game lokal, atau aplikasi PWA yang menyimpan data dalam jumlah besar.

**Ciri-ciri:**

- Kapasitas besar (hingga ratusan MB)
- Bisa menyimpan objek langsung (tidak harus string)
- Aksesnya bersifat asinkron (pakai event/callback/promise)

```js
let request = indexedDB.open('MyDatabase', 1);
request.onupgradeneeded = function (event) {
  let db = event.target.result;
  db.createObjectStore('users', { keyPath: 'id' });
};
```

---

### 🧩 Perbandingan Singkat

| Fitur             | `localStorage`  | `sessionStorage`  | `cookies`        | `IndexedDB`      |
| ----------------- | --------------- | ----------------- | ---------------- | ---------------- |
| Persisten         | ✅              | ❌                | ✅ (bisa diatur) | ✅               |
| Kapasitas         | 5–10 MB         | 5–10 MB           | \~4 KB           | Ratusan MB       |
| Akses antar tab   | ✅              | ❌                | ✅               | ✅               |
| Dikirim ke server | ❌              | ❌                | ✅               | ❌               |
| Format data       | String saja     | String saja       | String           | Objek/data besar |
| Cocok untuk       | Preferensi user | Data sesi singkat | Autentikasi      | App offline      |
