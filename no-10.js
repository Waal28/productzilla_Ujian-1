// SOAL NOMOR 10
function tahunKabisat(tahun) {
  if (tahun % 400 === 0) {
    return true;
  } else if (tahun % 100 === 0) {
    return false;
  } else if (tahun % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(tahunKabisat(1990));
