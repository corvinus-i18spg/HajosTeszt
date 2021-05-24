window.onload = function () {
    let hova = document.getElementById("adat");
    for (var s = 1; s < 10; s++) {
        let sor = document.createElement("div");
        let szoveg = document.createElement("p");
        sor.classList.add("sor")
        szoveg.classList.add("p")
        hova.appendChild(sor);
        hova.appendChild(szoveg);
}