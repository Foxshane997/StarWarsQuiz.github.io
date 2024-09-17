// Define types and interfaces for the quiz data
interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

// The array for the questionsAndAnswers, Answers & the Correct Answers.
const questionsAndAnswers: Question[] = [
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
let currentQuestionIndex: number = 0;
let correctAnswers: number = 0;

// Function to display the current question and answers.
function displayQuestion(): void {
    const question = questionsAndAnswers[currentQuestionIndex];
    const questionElement = document.querySelector('.question') as HTMLElement;
    const answerElements = document.querySelectorAll('.answer') as NodeListOf<HTMLElement>;

    if (questionElement) {
        questionElement.textContent = question.question;
    }

    answerElements.forEach((answerElement, index) => {
        const textElement = answerElement.querySelector('.text') as HTMLElement;
        if (textElement) {
            textElement.textContent = question.answers[index];
        }
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

    const currentElement = document.querySelector('.current') as HTMLElement;
    const totalElement = document.querySelector('.total') as HTMLElement;

    if (currentElement) {
        currentElement.textContent = (currentQuestionIndex + 1).toString(); // Update current question number after clicking next.
    }

    if (totalElement) {
        totalElement.textContent = questionsAndAnswers.length.toString(); // Update total number of questions that are displayed above and at the end.
    }
}

// Function to handle when the "Next" button is clicked.
function onNextButtonClick(): void {
    // This is pulling the questions & answers.
    const question = questionsAndAnswers[currentQuestionIndex];
    const selectedAnswerElement = document.querySelector('.answer.selected .text') as HTMLElement;
    const selectedAnswer = selectedAnswerElement?.textContent;

    if (selectedAnswer === question.correctAnswer) {
        correctAnswers++;
    }

    // iterating through the question & answer array length
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsAndAnswers.length) {
        displayQuestion();
    } else {
        // Quiz is over, show end screen after clicking the final next button.
        const endScreen = document.querySelector('.end-screen') as HTMLElement;
        const questionWrapper = document.querySelector('.question-wrapper') as HTMLElement;
        const finalScore = document.querySelector('.final-score') as HTMLElement;
        const totalScore = document.querySelector('.total-score') as HTMLElement;
        const restartButton = document.querySelector(".restart") as HTMLElement;

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

        if (restartButton) {
            restartButton.classList.remove('hide');
        }
    }
}

// Event listener for the "Next" button.
const nextButton = document.querySelector('.next') as HTMLElement;
if (nextButton) {
    nextButton.addEventListener('click', onNextButtonClick);
}

// Function to start the quiz.
function startQuiz(): void {
    currentQuestionIndex = 0;
    correctAnswers = 0; // Resets correct answers count.
    displayQuestion();

    // Adding the correct answers in the console when you start the game.
    questionsAndAnswers.forEach((item, index) => {
        console.log(`Question ${index + 1}: ${item.question}`);
        console.log(`Correct Answer: ${item.correctAnswer}`);
        console.log(); // Empty line for separation in the order they are written.
    });

    // Show the question wrapper and hide start screen.
    const questionWrapper = document.querySelector('.question-wrapper') as HTMLElement;
    const startScreen = document.querySelector('.start-screen') as HTMLElement;

    if (questionWrapper) {
        questionWrapper.classList.remove('hide');
    }

    if (startScreen) {
        startScreen.classList.add('hide');
    }
}

// Event listener for the start button to start the game.
const startButton = document.querySelector('.start') as HTMLElement;
if (startButton) {
    startButton.addEventListener('click', () => {
        startQuiz();
    });
}

// The restart button functionality.
const restartButton = document.querySelector('.restart') as HTMLElement;
if (restartButton) {
    restartButton.addEventListener('click', () => {
        // When you click Restart it hides the "end screen".
        const endScreen = document.querySelector('.end-screen') as HTMLElement;
        const startScreen = document.querySelector('.start-screen') as HTMLElement;

        if (endScreen) {
            endScreen.classList.add('hide');
        }

        if (startScreen) {
            startScreen.classList.remove('hide');
        }
    });
}
