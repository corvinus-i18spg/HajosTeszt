window.onload = function () {
    consol.log("Start!");
    let hova = document.getElementById("ide");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        hova.appendChild(sor);

        for (var o = 0; o < 10; o++) {
            let szam = document.createElement("div");
            szam.innerText = (s + 1) * (o + 1);
            sor.appendChild(szam);
        }
    }
}