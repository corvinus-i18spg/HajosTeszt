var hotList = [];
var questionInHotList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;

document.addEventListener("DOMContentLoaded", () => {
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

    fetch("questions/count")
        .then(result => result.text())
        .then(n => { numberOfQuestions = parseInt(n) })

    document.getElementById("előre_gomb").addEventListener("click", előre);
    document.getElementById("vissza_gomb").addEventListener("click", vissza);
    

});

function kerdesBetoltes(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(result => {
            if (!result.ok) {
                console.error(`Hibás letöltes: ${result.status}`);
                return null;
            }
            else {
                return result.json();
            }

        })
        .then(q => {
            hotList[destination].question = q;
            hotList[destination].goodAnswers = 0;
            console.log(`A ${questionNumber}. kérdés letöltésre került a hotList ${destination}. helyén.`)

            if (displayedQuestion===undefined && destination===0) {
                displayedQuestion = 0;
                kerdesMegjelenites();
            }
        })

}

function kerdesMegjelenites() {
    let kerdes = hotList[displayedQuestion].question;
    document.getElementById("kérdés_szöveg").innerText = kerdes.questionText;
    document.getElementById("válasz1").innerText = kerdes.answer1;
    document.getElementById("válasz2").innerText = kerdes.answer2;
    document.getElementById("válasz3").innerText = kerdes.answer3;

    if (kerdes.image) {
        document.getElementById("kép").src = kerdes.image;
        document.getElementById("kép").style.display = "block";
    }
    else {
        document.getElementById("kép").style.display = "none";
    }
}

function előre() {
    displayedQuestion++;

    if (displayedQuestion == hotList) displayedQuestion = 0;
    kerdesMegjelenites();
}

function vissza() {
    displayedQuestion--;
    if (displayedQuestion < 0) displayedQuestion == questionInHotList - 1;
    kerdesMegjelenites();
}