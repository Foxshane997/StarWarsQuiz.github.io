// Questions and answers
const questionsAndAnswers = [
    {
        question: "Who took Anakin's hand?",
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
    }
];

let currentQuestionIndex = 0;

// Function to display the current question and answers
function displayQuestion() {
    const question = questionsAndAnswers[currentQuestionIndex];
    document.querySelector('.question').textContent = question.question;
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach((answerElement, index) => {
        answerElement.querySelector('.text').textContent = question.answers[index];
    });
    document.querySelector('.current').textContent = currentQuestionIndex + 1; // Update current question number
}

// Function to handle when the "Next" button is clicked
function onNextButtonClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsAndAnswers.length) {
        displayQuestion();
    } else {
        // Quiz is over, show end screen or handle accordingly
        document.querySelector('.end-screen').classList.remove('hide');
        document.querySelector('.question-wrapper').classList.add('hide');
        document.querySelector(".restart").classList.remove('hide')
    }
}

// Event listener for the "Next" button
document.querySelector('.next').addEventListener('click', onNextButtonClick);

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    const question = selectRandomQuestion(); // Selecting a random question
    displayQuestion();

    // Show the question wrapper and hide start screen
    document.querySelector('.question-wrapper').classList.remove('hide');
    document.querySelector('.start-screen').classList.add('hide');
}

// Event listener for the start button
document.querySelector('.start').addEventListener('click', () => {
    startQuiz();
    document.querySelector(".submit").classList.add("hide");
});

// The restart button functionality 
document.querySelector('.restart').addEventListener('click', () => {
    startQuiz();
    document.querySelector('.end-screen').classList.add('hide');
});

// Function to select a random question
function selectRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    return questionsAndAnswers[randomIndex];
}
