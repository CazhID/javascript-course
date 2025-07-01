function hitungBMI() {
  // 1. Ambil nilai dari input HTML
  const berat = document.getElementById('berat').value;
  const tinggiCm = document.getElementById('tinggi').value;

  // 2. Validasi input: pastikan tidak kosong
  if (berat === '' || tinggiCm === '') {
    alert('Mohon isi berat dan tinggi badan!');
    return;
  }

  // 3. Lakukan kalkulasi BMI
  const tinggiM = parseFloat(tinggiCm) / 100; // Konversi cm ke meter
  const bmi = parseFloat(berat) / (tinggiM * tinggiM);
  const hasilBmi = bmi.toFixed(2); // Ambil 2 angka di belakang koma

  // 4. Tentukan kategori BMI menggunakan if-else
  let kategori;
  if (bmi < 18.5) {
    kategori = 'Kekurangan berat badan';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = 'Berat badan ideal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    kategori = 'Kelebihan berat badan';
  } else {
    kategori = 'Obesitas';
  }

  // 5. Tampilkan hasil ke elemen HTML
  document.getElementById('hasil').innerText = 'BMI Anda: ' + hasilBmi;
  document.getElementById('kategori').innerText = 'Kategori: ' + kategori;
}
