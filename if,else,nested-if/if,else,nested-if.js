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
