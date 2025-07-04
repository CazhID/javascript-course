function main(pilihanPemain) {
  const pilihanKomputer = getPilihanKomputer();
  const hasil = tentukanPemenang(pilihanPemain, pilihanKomputer);

  tampilkanHasil(pilihanPemain, pilihanKomputer, hasil);
  tambahRiwayat(pilihanPemain, pilihanKomputer, hasil);
}

function getPilihanKomputer() {
  const pilihan = ['gunting', 'batu', 'kertas'];
  const index = Math.floor(Math.random() * pilihan.length);
  return pilihan[index];
}

function tentukanPemenang(pemain, komputer) {
  if (pemain === komputer) return 'SERI';

  const menang =
    (pemain === 'gunting' && komputer === 'kertas') ||
    (pemain === 'batu' && komputer === 'gunting') ||
    (pemain === 'kertas' && komputer === 'batu');

  return menang ? 'MENANG' : 'KALAH';
}

function tampilkanHasil(pemain, komputer, hasil) {
  document.getElementById('pilihan-anda').textContent = pemain;
  document.getElementById('pilihan-komputer').textContent = komputer;
  document.getElementById('hasil-akhir').textContent = hasil;
}

function tambahRiwayat(pemain, komputer, hasil) {
  const list = document.getElementById('riwayat-list');
  const item = document.createElement('li');
  item.textContent = `Anda: ${pemain}, Komputer: ${komputer}, Hasil: ${hasil}`;
  list.appendChild(item);
}
