// METHOD DI CONSTRUCTOR FUNCTION
// Method bisa didefinisikan sebagai fungsi di dalam constructor.

function User(nama) {
  this.nama = nama;
  this.sapa = function () {
    console.log('Halo, saya ' + this.nama);
  };
}

const user = new User('Eko');
user.sapa();
