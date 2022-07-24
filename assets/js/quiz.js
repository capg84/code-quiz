const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));

console.log(answers);

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
        question: "What is the purpose of JavaScrip?",
        choice1: "So that the browser can load the page's functionality properly",
        choice2: "To manage the conent of a webpage",
        choice3: "To manage the styles of a webpage",
        choice4: "To manage the behaviour of a webpage",
        answer: 4,
    },
    {
        question: "Which of the following are types of primitive data?",
        choice1: "String, Number, BigInt, Undefined",
        choice2: "Variable, Function, Methods",
        Choice3: "Array, Console, Attribute",
        Choice4: "Number, Boolean, Loop",
        answer: 1,
    },
    {
        question: "What is DOM tree?",
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
    console.log(availableQuesions);
    getNewQuestion();
}

getNewQuestion = () => {
    questionCounter++;
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
        console.log(e.target);
    });
});

startQuiz();