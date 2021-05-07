var kerdesek;

fetch('/question.json').then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
window.onload = function () {
    function kerdesMegjelenites(kerdes) {
        console.log("Sikeres letöltés")
        console.log(kerdes)
        kérdések = kerdes
    };
}
window.onload = function () {
    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d
    };
}