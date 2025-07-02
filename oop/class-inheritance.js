// CLASS INHERITANCE
// Class bisa mewarisi property dan method dari class lain menggunakan keyword 'extends'

class User {
  constructor(nama) {
    this.nama = nama;
  }

  sapa() {
    console.log('Halo, saya ' + this.nama);
  }
}

class Admin extends User {
  constructor(nama, hakAkses) {
    super(nama); // Memanggil constructor dari class induk
    this.hakAkses = hakAkses;
  }

  infoAkses() {
    console.log(`${this.nama} memiliki hak akses: ${this.hakAkses}`);
  }
}

const admin1 = new Admin('Eko', 'Semua');
admin1.sapa();
admin1.infoAkses();
