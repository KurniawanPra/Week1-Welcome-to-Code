// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is s o cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('Kata Pertama: ' + exampleFirstWord);
//lanjutkan dengan struktur log diatas

let secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
console.log('Kata Kedua: ' + secondWord);

// Kata ketiga: is
let thirdWord = word[15] + word[16];
console.log('Kata Ketiga: ' + thirdWord);

// Kata keempat: s
let fourthWord = word[18];
console.log('Kata Keempat: ' + fourthWord);

// Kata kelima: o
let fifthWord = word[20];
console.log('Kata Kelima: ' + fifthWord);

// Kata keenam: cool
let sixthWord = word[22] + word[23] + word[24] + word[25];
console.log('Kata Keenam: ' + sixthWord);