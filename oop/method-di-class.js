// METHOD DI CLASS
// Method ditulis di dalam body class dan bisa diakses oleh semua instance.

class Siswa {
  constructor(nama) {
    this.nama = nama;
  }

  kenalan() {
    console.log('Halo, saya ' + this.nama);
  }
}

const s = new Siswa('Eko');
s.kenalan();
