// SOAL NOMOR 9
var angkaPrima = true;
function bilPrima(n) {
  if (n == 0 || n == 1) {
    angkaPrima = false;
  } else {
    for (i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        angkaPrima = false;
        break;
      }
    }
  }
  if (angkaPrima) {
    return "Bilangan " + n + " adalah bilangan prima";
  } else {
    return "Bilangan " + n + " bukan bilangan prima";
  }
}
console.log(bilPrima(5));
