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
