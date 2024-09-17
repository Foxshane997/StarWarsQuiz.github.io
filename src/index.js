// The array for the questionsAndAnswers, Answers & the Correct Answers.
var questionsAndAnswers = [
    {
        question: "Who cut off Anakin's hand?",
        answers: ["Asaj Ventress", "Count Doku", "Darth Vader"],
        correctAnswer: "Count Doku"
    },
    {
        question: "What is Count Doku's Sith name?",
        answers: ["Darth Doku", "Count Doku", "Darth Tyranus"],
        correctAnswer: "Darth Tyranus"
    },
    {
        question: "What planet is Chewbacca from?",
        answers: ["Kashyyk", "Hoth", "Corellia"],
        correctAnswer: "Kashyyk"
    },
    {
        question: "What is Rey's current last name?",
        answers: ["Skywalker", "Palpatine", "Just Rey"],
        correctAnswer: "Skywalker"
    },
    {
        question: "Who created C3PO?",
        answers: ["Luke Skywalker", "Anakin Skywalker", "Mace Window"],
        correctAnswer: "Anakin Skywalker"
    },
    {
        question: "What was Luke Skywalkers original name going to be?",
        answers: ["Master Luke", "Luke Skywalker", "Luke Starkiller"],
        correctAnswer: "Luke Starkiller"
    }
];
// Declaring these globally so they can be updated when needed.
var currentQuestionIndex = 0;
var correctAnswers = 0;
// Function to display the current question and answers.
function displayQuestion() {
    var question = questionsAndAnswers[currentQuestionIndex];
    var questionElement = document.querySelector('.question');
    var answerElements = document.querySelectorAll('.answer');
    if (questionElement) {
        questionElement.textContent = question.question;
    }
    answerElements.forEach(function (answerElement, index) {
        var textElement = answerElement.querySelector('.text');
        if (textElement) {
            textElement.textContent = question.answers[index];
        }
        // Remove the 'selected' class from all answer elements.
        answerElement.classList.remove('selected');
        // Add event listener for when you choose an answer or when you pick a different answer.
        answerElement.addEventListener('click', function () {
            // Remove the coloring for when you choose a different answer.
            answerElements.forEach(function (element) {
                element.classList.remove('selected');
            });
            // Add the coloring for when you choose your answer.
            answerElement.classList.add('selected');
        });
    });
    var currentElement = document.querySelector('.current');
    var totalElement = document.querySelector('.total');
    if (currentElement) {
        currentElement.textContent = (currentQuestionIndex + 1).toString(); // Update current question number after clicking next.
    }
    if (totalElement) {
        totalElement.textContent = questionsAndAnswers.length.toString(); // Update total number of questions that are displayed above and at the end.
    }
}
// Function to handle when the "Next" button is clicked.
function onNextButtonClick() {
    // This is pulling the questions & answers.
    var question = questionsAndAnswers[currentQuestionIndex];
    var selectedAnswerElement = document.querySelector('.answer.selected .text');
    var selectedAnswer = selectedAnswerElement === null || selectedAnswerElement === void 0 ? void 0 : selectedAnswerElement.textContent;
    if (selectedAnswer === question.correctAnswer) {
        correctAnswers++;
    }
    // iterating through the question & answer array length
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsAndAnswers.length) {
        displayQuestion();
    }
    else {
        // Quiz is over, show end screen after clicking the final next button.
        var endScreen = document.querySelector('.end-screen');
        var questionWrapper = document.querySelector('.question-wrapper');
        var finalScore = document.querySelector('.final-score');
        var totalScore = document.querySelector('.total-score');
        var restartButton_1 = document.querySelector(".restart");
        if (endScreen) {
            endScreen.classList.remove('hide');
        }
        if (questionWrapper) {
            questionWrapper.classList.add('hide');
        }
        if (finalScore) {
            finalScore.textContent = correctAnswers.toString();
        }
        if (totalScore) {
            totalScore.textContent = '/ ' + questionsAndAnswers.length; // Add slash here
        }
        if (restartButton_1) {
            restartButton_1.classList.remove('hide');
        }
    }
}
// Event listener for the "Next" button.
var nextButton = document.querySelector('.next');
if (nextButton) {
    nextButton.addEventListener('click', onNextButtonClick);
}
// Function to start the quiz.
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0; // Resets correct answers count.
    displayQuestion();
    // Adding the correct answers in the console when you start the game.
    questionsAndAnswers.forEach(function (item, index) {
        console.log("Question ".concat(index + 1, ": ").concat(item.question));
        console.log("Correct Answer: ".concat(item.correctAnswer));
        console.log(); // Empty line for separation in the order they are written.
    });
    // Show the question wrapper and hide start screen.
    var questionWrapper = document.querySelector('.question-wrapper');
    var startScreen = document.querySelector('.start-screen');
    if (questionWrapper) {
        questionWrapper.classList.remove('hide');
    }
    if (startScreen) {
        startScreen.classList.add('hide');
    }
}
// Event listener for the start button to start the game.
var startButton = document.querySelector('.start');
if (startButton) {
    startButton.addEventListener('click', function () {
        startQuiz();
    });
}
// The restart button functionality.
var restartButton = document.querySelector('.restart');
if (restartButton) {
    restartButton.addEventListener('click', function () {
        // When you click Restart it hides the "end screen".
        var endScreen = document.querySelector('.end-screen');
        var startScreen = document.querySelector('.start-screen');
        if (endScreen) {
            endScreen.classList.add('hide');
        }
        if (startScreen) {
            startScreen.classList.remove('hide');
        }
    });
}
