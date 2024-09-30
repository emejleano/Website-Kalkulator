let tampilan = document.getElementById("display");
let masukanSaatIni = "";
let operator = "";
let hasilDitampilkan = false;

const tombol = document.querySelectorAll("button");
tombol.forEach(tombol => {
    tombol.addEventListener("click", (e) => {
        const nilai = e.target.innerText;

        
        if (nilai === "C") {
            masukanSaatIni = "";
            operator = "";
            tampilan.value = "";
            hasilDitampilkan = false;
        } 
        else if (nilai === "DEL") {
            masukanSaatIni = masukanSaatIni.slice(0, -1);
            tampilan.value = masukanSaatIni;
        } 
        else if (nilai === "=") {
            try {
                tampilan.value = eval(masukanSaatIni);
                masukanSaatIni = tampilan.value;
                hasilDitampilkan = true;
            } catch (error) {
                tampilan.value = "Error";
            }
        } 
        else if (["+", "-", "*", "/"].includes(nilai)) {
            if (hasilDitampilkan) {
                hasilDitampilkan = false;
            }
            if (masukanSaatIni !== "" && !["+", "-", "*", "/"].includes(masukanSaatIni.slice(-1))) {
                masukanSaatIni += nilai;
                tampilan.value = masukanSaatIni;
            }
        } 
        else {
            if (hasilDitampilkan) {
                masukanSaatIni = "";
                hasilDitampilkan = false;
            }
            masukanSaatIni += nilai;
            tampilan.value = masukanSaatIni;
        }
    });
});
