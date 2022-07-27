var username = document.getElementById("username");
var saveScoreButton = document.getElementById("saveScoreButton");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const maxHighScores = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreButton.disabled = (username.value.length < 3); 
});

saveHighScore = e => {
    console.log("Save clicked");
    e.preventDefault();

    var score = {
        name: username.value,
        score: mostRecentScore
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");
};