// SOAL NOMOR 1
var nama = "Productzilla";
function gantiNama() {
  var nama = "Academy";
  console.log(nama);
}
gantiNama();
console.log(nama);

// SOAL NOMOR 2
function cekAngka(a, b) {
  if (a === 0 || b === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(cekAngka(0, 0));

// SOAL NOMOR 3
function cekAkses(penggunaa) {
  switch (pengguna) {
    case "Admin":
      return "Selamat datang, Admin!";
      break;
    case "User":
      return "Anda tidak memiliki akses kehalaman ini!";
      break;
    default:
      return "Inputan Salah!!";
  }
}
var pengguna = "User";
console.log(cekAkses(pengguna));

// SOAL NOMOR 4
const totalBelanja = 75000 * 3 + 120000 * 2 + 250000;
console.log(totalBelanja);

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

// SOAL NOMOR 6
function bilangan(a) {
  if (a % 2 == 0) {
    return a + " adalah bilangan genap";
  } else {
    return a + " adalah bilangan ganjil";
  }
}
console.log(bilangan(3));

// SOAL NOMOR 7
function bandingBilangan(a, b) {
  if (a === b) {
    return a + " sama dengan " + b;
  } else if (a > b) {
    return a + " lebih besar dari " + b;
  } else {
    return a + " lebih kecil dari " + b;
  }
}
console.log(bandingBilangan(9, 10));

// SOAL NOMOR 8
function setSegitiga(a, t) {
  return (a * t * 1) / 2;
}
console.log(setSegitiga(4, 6));

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
