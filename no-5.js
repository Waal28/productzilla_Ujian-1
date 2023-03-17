// SOAL NOMOR 5
function belanjaan(totalBelanja) {
  if (totalBelanja > 500000) {
    const diskon = totalBelanja * (10 * 0.01);
    return "Selamat Anda Mendapatkan diskon sebesar RP. " + diskon;
  } else {
    return "Terima kasih telah berbelanja";
  }
}
console.log(belanjaan(totalBelanja));
