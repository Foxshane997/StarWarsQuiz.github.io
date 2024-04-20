// The array for the questionsAndAnswers, Answers & the Correct Answers.
// Used "" type of quotations incase there was an apostrophe present.
const questionsAndAnswers = [
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

// Declaring these globally.
let currentQuestionIndex = 0;
let correctAnswers = 0;

// Function to display the current question and answers.
function displayQuestion() {
    const question = questionsAndAnswers[currentQuestionIndex];
    document.querySelector('.question').textContent = question.question;
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach((answerElement, index) => {
        answerElement.querySelector('.text').textContent = question.answers[index];
        // Remove the 'selected' class from all answer elements.
        answerElement.classList.remove('selected');
        // Add event listener for when you choose an answer or when you pick a different answer.
        answerElement.addEventListener('click', () => {
            // Remove the coloring for when you choose a different answer.
            answerElements.forEach((element) => {
                element.classList.remove('selected');
            });
            // Add the coloring for when you choose your answer.
            answerElement.classList.add('selected');
        });
    });
    document.querySelector('.current').textContent = currentQuestionIndex + 1; // Update current question number after clicking next.
    document.querySelector('.total').textContent = questionsAndAnswers.length; // Update total number of questions that are displayed above and at the end.
}

// Function to handle when the "Next" button is clicked.
function onNextButtonClick() {
    const question = questionsAndAnswers[currentQuestionIndex];
    const selectedAnswer = document.querySelector('.answer.selected .text').textContent;
    if (selectedAnswer === question.correctAnswer) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questionsAndAnswers.length) {
        displayQuestion();
    } else {
        // Quiz is over, show end screen or handle accordingly.
        document.querySelector('.end-screen').classList.remove('hide');
        document.querySelector('.question-wrapper').classList.add('hide');
        document.querySelector('.final-score').textContent = correctAnswers;
        document.querySelector('.total-score').textContent = '/ ' + questionsAndAnswers.length; // Add slash here
        document.querySelector(".restart").classList.remove('hide')
    }
}

// Event listener for the "Next" button.
document.querySelector('.next').addEventListener('click', onNextButtonClick);

// Function to start the quiz.
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0; // Reset correct answers count.
    const question = selectRandomQuestion(); // Selecting a random question.
    displayQuestion();

    //  Adding the correct answers in the console when you start the game.
    questionsAndAnswers.forEach((item, index) => {
        console.log(`Question ${index + 1}: ${item.question}`);
        console.log(`Correct Answer: ${item.correctAnswer}`);
        console.log(); // Empty line for separation in the order they are written.
    });

    // Show the question wrapper and hide start screen.
    document.querySelector('.question-wrapper').classList.remove('hide');
    document.querySelector('.start-screen').classList.add('hide');
}

// Event listener for the start button to start the game.
document.querySelector('.start').addEventListener('click', () => {
    startQuiz();
});

// The restart button functionality.
document.querySelector('.restart').addEventListener('click', () => {
    // When you click Restart it hides the "end screen".
    document.querySelector('.end-screen').classList.add('hide');
    // When you click Restart it removes the Class hide from the "Start Screen".
    document.querySelector('.start-screen').classList.remove('hide');
});

// Function for a question randomizer.
function selectRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    return questionsAndAnswers[randomIndex];
}
