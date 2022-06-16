let questions = [
    {
        question: "Which type of JavaScript language is",
        choices: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        answer: 1,
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        choices: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        answer: 3,
    },
    {
        question: "In JavaScript, what is a block of statement?",
        choices: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"],
        answer: 1,
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        choices: ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
        answer: 3,
    },
    {
        question: "The \"function\" and \" var\" are known as:",
        choices: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        answer: 2,
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        choices: ["Global variable", "The local element", "The two of the above", "None of the above"],
        answer: 1,
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        choices: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
        answer: 3,
    },
    {
        question: "Which of the following type of a variable is volatile?",
        choices: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        answer: 0,
    },
    {
        question: "Which of the following option is used as hexadecimal literal beginning?",
        choices: ["00", "0x", "0X", "Both 0x and 0X"],
        answer: 3,
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        choices: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
        answer: 2,
    },
];

let timeRemaining = 75;
let isGameRunning = false;
let isOnRecordingPage = false;
let scores = 0;
let gameInterval;
let currQuestionIndex = 0;
document.querySelector('#start').addEventListener('click', handleClickOnStart);
let answer;

function handleClickOnStart(e) {
    initGame();
    gameInterval = setInterval(function() {
        if (timeRemaining > 0 && isGameRunning) {
            let time = document.querySelector("#time");
            time.textContent = timeRemaining;
            timeRemaining--;
        } else if (timeRemaining === 0) {
            isGameRunning = false;
            timeRemaining = 75;
            endGame();
        }
    }, 1000);
}

function initGame() {
    isGameRunning = true;
    document.querySelector('#title').style.display = 'none';
    document.querySelector('#description').style.display = 'none';
    document.querySelector('#start').style.display = 'none';
    displayQuestions();
}

function endGame() {
    
}

function displayQuestions() {
    let codeQuestion = questions[currQuestionIndex];

    //Create elements
    let questionTitle = document.createElement('h1');
    questionTitle.textContent = codeQuestion.question;
    document.body.appendChild(questionTitle);
    answer = codeQuestion.answer;
    for (let i = 0; i < codeQuestion.choices.length; i++) {
        let choice = codeQuestion.choices[i];
        let choiceEl = document.createElement('button');
        choiceEl.textContent = choice;
        choiceEl.addEventListener('click', handleClickOnChoice);
        choiceEl.setAttribute('id', i);
        document.body.appendChild(choiceEl);
    }
}

function handleClickOnChoice(e) {

}

function handleSubmitName(e) {

}

