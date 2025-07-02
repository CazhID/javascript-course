// PRIVATE CLASS FIELD
// Field privat hanya dapat diakses di dalam class menggunakan tanda #

class BankAccount {
  #saldo = 0;

  constructor(nama) {
    this.nama = nama;
  }

  setor(uang) {
    this.#saldo += uang;
  }

  lihatSaldo() {
    console.log(`Saldo ${this.nama}: ${this.#saldo}`);
  }
}

const akun = new BankAccount('Eko');
akun.setor(100000);
akun.lihatSaldo();
// akun.#saldo; // Error: private field
