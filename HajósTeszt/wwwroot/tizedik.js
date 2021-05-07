var hotList = [];
var questionInHotList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;


function init() {
    for (let i = 0; i < questionInHotList; i++) {
        hotList[i] = {
            question: {},
            goodAnswers: 0
        }
    }

    for (let i = 0; i < questionInHotList; i++) {
        kerdesBetoltes(nextQuestion, i);
        nextQuestion++;
    }
}

function kerdesBetoltes(questionNumber, destination) {
    fetch('questions/${questionNumber}')
}

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