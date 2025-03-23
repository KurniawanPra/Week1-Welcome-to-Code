// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

// Algoritma:

// Fungsi menerima dua parameter: nama dan peran
// Pertama, cek apakah nama kosong atau undefined

// Jika iya, tampilkan pesan "nama wajib diisi" dan hentikan fungsi


// Kemudian, cek apakah peran kosong atau undefined

// Jika iya, tampilkan pesan "Pilih Peranmu untuk memulai game" dan hentikan fungsi


// Selanjutnya, cek nilai dari peran:

// Jika "Ksatria", tampilkan pesan untuk Ksatria
// Jika "Tabib", tampilkan pesan untuk Tabib
// Jika "Penyihir", tampilkan pesan untuk Penyihir
// Jika bukan salah satu dari ketiga peran tersebut, tampilkan pesan default untuk bot


//code disini gunakan console.log untuk outputnya

function Proxytia(nama, peran){

    if(nama === "" || nama === undefined){
        console.log("nama wajib diisi");
        return;
    }

    if(peran === "" || peran === undefined){
        console.log("nama wajib diisi");
        return;
    }

    if(peran === "Ksatria"){
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }else if(peran === "Tabib"){
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    }else if(peran === "Penyihir"){
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }else{
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }

}

Proxytia("John", "Ksatria");    