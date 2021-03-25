var kerdesek;

fetch('/question.json').then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
window.onload = function() {
    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d
    };
}



