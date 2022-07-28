var question = document.getElementById("question");
var answers = Array.from(document.getElementsByClassName("answerText"));
const resultCorrect = document.getElementById("correct");
const resultIncorrect = document.getElementById("incorrect");
var secondLeft = 100;
var interval = setInterval(countDownSecond,1000);
var questionCount = document.getElementById("questionCounter");
var scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Beside HTML and CSS, what is the thrid language a web developer must learn?",
        choice1: "English",
        choice2: "Programming language",
        choice3: "JavaScript",
        choice4: "VisualScript",
        answer: 3,
    },
    {
        question: "Is the following statement true or false? JavaScript is a programming language.",
        choice1: "True",
        choice2: "False",
        choice3: "I don't know",
        choice4: "Maybe",
        answer: 1,
    },
    {
        question: "Which of the following are types of primitive data?",
        choice1: "String, Number, BigInt, Undefined",
        choice2: "Variable, Function, Methods",
        choice3: "Array, Console, Attribute",
        choice4: "Number, Boolean, Loop",
        answer: 1,
    },
    {
        question: "What is the purpose of JavaScript?",
        choice1: "So that the browser can load the page's functionality properly",
        choice2: "To manage the conent of a webpage",
        choice3: "To manage the styles of a webpage",
        choice4: "To manage the behaviour of a webpage",
        answer: 4,
    },
    {
        question: "What is a DOM tree?",
        choice1: "Document Operation Modal, a programming surface",
        choice2: "Document Object Model, a programming interface",
        choice3: "Document Oracle Model, a programming language",
        choice4: "Disk Operation Management, a system utility",
        answer: 2,
    },
];

//defining constants for the quiz
const maximumQuestion = 4;
const correctAnswerPoint = 25;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    //console.log(availableQuesions);
    getNewQuestion();
    countDownSecond();
}

getNewQuestion = () => {
    //go to the end of the page is 4 maximum questions are answered
    if(availableQuesions.length === 0 || questionCounter >= maximumQuestion) {
        //storing the last score in localStorage
        localStorage.setItem("mostRecentScore", score);
        console.log(score);
        document.getElementById("score").append("Your score is " + score);
        return window.location.assign("end.html");
    }
    
    questionCounter++;

    questionCount.innerText = questionCounter + "/" + maximumQuestion;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    answers.forEach (choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

answers.forEach (choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset["number"];

        var result = "";
        
        if (selectedAnswer == currentQuestion.answer) {
            result = "Correct";
            resultCorrect.style.display = "block";
            resultIncorrect.style.display = "none";
            score = score + correctAnswerPoint; //adding score for correct answer
            } else {
                result = "Incorrect";
                resultCorrect.style.display = "none";
                resultIncorrect.style.display = "block";
                // resultIncorrect.append(currentQuestion.answer);
                secondLeft = secondLeft - 20; //deducting 20 seconds for incorrect answer penalty
        };
        
        scoreText.innerText = score;

        console.log(result);
        console.log(score);

        setTimeout(() => {
            resultCorrect.style.display = "none";
            resultIncorrect.style.display = "none";

            getNewQuestion();
        }, 2000);
    });
});

//set timer
function countDownSecond() {
    document.getElementById("timer").innerHTML = secondLeft + " sec";
    secondLeft--;
    
    if (secondLeft == 0) {
        clearInterval(interval);
        alert("Time's up. Game Over! :-(");
        return window.location.assign("end.html");
    };
};

startQuiz();