//✨if,else,nested-if
let nilai = 85;

if (nilai >= 90) {
  //if
  console.log("Nilai Anda A");
} else if (nilai > 80) {
  //nested if
  console.log("Nilai Anda B +");
} else if (nilai >= 8) {
  console.log("Nilai Anda B");
} else if (nilai >= 75) {
  console.log("Nilai Anda C +");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  //else
  console.log("Nilai Anda D");
}

//✨ switch case
let buah = "Apel";

switch (buah) {
  case "Mangga":
    console.log("Ini buah Mangga");
    break;
  case "Apel":
    console.log("Ini buah Apel");
    break;
  case "Jeruk":
    console.log("Ini buah Jeruk");
    break;
  default:
    console.log("Ini buah yang tidak ada di list");
}

//✨ for statement
for (let i = 1; i <= 10; i++) {
  console.log("Iterasi ke-" + i);
}

//✨ while, do while
let x = 1;

do {
  console.log("Nilai x: " + x);
  x++;
} while (x <= 10);

//✨ function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 10);
console.log("Hasil penambahan: " + hasil);
