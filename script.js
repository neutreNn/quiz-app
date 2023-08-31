// Data array for questions
const quizData = [
    {
        title: "What does HTML stand for?",
        a: "Helicopters Terminal Motorboats Lamborginis",
        b: "Hypertext Markup Language",
        c: "Hyperloop Machine Language",
        correct: "b",
    }, 
    {
        title: "What year did JS appear?",
        a: "1899",
        b: "2005",
        c: "1995",
        correct: "c",
    },
    {
        title: "Who is the author of the JS language?",
        a: "Bill Gates",
        b: "Brendan Eich",
        c: "Steve Jobs",
        correct: "b",
    },
    {
        title: "What does HTML stand for?",
        a: "Helicopters Terminal Motorboats Lamborginis",
        b: "Hypertext Markup Language",
        c: "Hyperloop Machine Language",
        correct: "b",
    },
    {
        title: "What language is this project written in?",
        a: "JS",
        b: "Ruby",
        c: "C++",
        correct: "a",
    },
    {
        title: "Why so JavaScript and Java have similar name?",
        a: "JavaScript is a stripped-down version of Java",
        b: "JavaScript’s syntax is loosely based on Java’s",
        c: "They both originated on the island of Java",
        correct: "b",
    },
    {
        title: "______ JavaScript is also called client-side JavaScript.",
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire",
        correct: "b",
    },
    {
        title: "What are variables used for in JavaScript Programs?",
        a: "Storing numbers, dates, or other values",
        b: "Varying randomly",
        c: "Causing high-school algebra flashbacks",
        correct: "a",
    },
    {
        title: "Which of the following can’t be done with client-side JavaScript?",
        a: "Validating a form",
        b: "Sending a form’s contents by email",
        c: "Storing the form’s contents to a database file on the server",
        correct: "c"
    },
    {
        title: "Which of the following are capabilities of functions in JavaScript?",
        a: "Return a value",
        b: "Accept parameters and Return a value",
        c: "Accept parameters",
        correct: "c",
    },
];

// Question number
let currentQuiz = 0;
// Quiz score
let score = 0;
// Width progress
let width = 0;

// In this area we upload our question number and its text
const questions__info = document.getElementById('questions__info');

// We upload answer options to this area
const questions__choice = document.getElementById('questions__choice');

// The area that includes both the question number and its text, 
// as well as answer options. We then upload our score and the 
// result of the responses here
const questions = document.getElementById('questions');

// We collect all inputs so that we can then select from them with the checked attribute
const answers = document.querySelectorAll('.answer');

// Viewing the button
const next_btn = document.getElementById('next_btn');

// Viewing the progress line
let elem = document.getElementById('progress__line');

// Looking at the percentages under the progress line
let text = document.querySelector('.progress__text');

// We load the first question so that it is displayed on the screen
loadQuizData();

// Loads data from an array
function loadQuizData () {
    const currentQuizData = quizData[currentQuiz];

    questions__info.innerHTML = `
    <div class="questions__info-number" id="questions__info-number">
        <h1>Question №${currentQuiz + 1}</h1>
    </div>
    <div class="questions__info-title" id="questions__info-title">
        <p>${currentQuizData.title}</p>
    </div>
    `;

    questions__choice.innerHTML = `
    <ul>
        <li>
            <input type="radio" name="answer" class="answer" id="a" checked>
            <label for="a" id="a_text">${currentQuizData.a}</label>
        </li>
        <li>
            <input type="radio" name="answer" class="answer" id="b" >
            <label for="b" id="b_text">${currentQuizData.b}</label>
        </li>
        <li>
            <input type="radio" name="answer" class="answer" id="c" >
            <label for="c" id="c_text">${currentQuizData.c}</label>
        </li>
    </ul>
    `;
};

// Changes the question when pressing the button
function changeQuestion () {

    let stats = document.getElementById('stats');

    if (currentQuiz < quizData.length - 1) {
        let checked = document.querySelector('input[name="answer"]:checked');

        if (checked.id == quizData[currentQuiz].correct) {
            score++;
        }
        
        currentQuiz += 1;

        loadQuizData();
    }
    else if (currentQuiz == quizData.length - 1){
        let checked = document.querySelector('input[name="answer"]:checked');

        if (checked.id == quizData[currentQuiz].correct) {
            score++;
        }

        showResult();
        stats.style.display = 'none';
    }

};

// When passing the last question displays the 
// final screen with the score
function showResult () {
    if (score < 4) {
        questions.innerHTML = `
        <div class="result" id="result">
            <div class="result__img">
                <img src="./images/bad.png">
                <div class="result__img-text">
                    <p style="color:red">Not good</p>
                    <p>Score: ${score}</p>
                </div>
            </div>
        </div>
        `;
    }

    if (score >= 5 && score < 8) {
        questions.innerHTML = `
        <div class="result" id="result">
            <div class="result__img">
                <img src="./images/good.png">
                <div class="result__img-text">
                    <p style="color:orange">Good</p>
                    <p>Score: ${score}</p>
                </div>
            </div>
        </div>
        `;
    }

    if (score >= 8) {
        questions.innerHTML = `
        <div class="result" id="result">
            <div class="result__img">
                <img src="./images/perfect.png">
                <div class="result__img-text">
                    <p style="color:green">Perfect</p>
                    <p>Score: ${score}</p>
                </div>
            </div>
        </div>
        `;
    }
};

// Changes the progress line when passing a question
function progress () {
    width += 10;
    elem.style.width = width + '%';
    text.innerHTML = width + '%';
}

// Listener on the button to change the question
next_btn.addEventListener('click', () => {
    changeQuestion();
    progress ();
});
