// Questions and answers
const questionsAndAnswers = [
    {
        question: "Who is Count Dooku?",
        answers: ["Sith Lord", "Leader of the Separatist movement", "Former Jedi"],
        correctAnswer: "Sith Lord"
    },
    {
        question: "Who is Master Yoda?",
        answers: ["Jedi Master", "Grand Master of the Jedi Order", "Skilled in the Force"],
        correctAnswer: "Jedi Master"
    },
    {
        question: "What is the Tantive IV?",
        answers: ["Corellian corvette", "Diplomatic vessel", "Captured by the Empire in A New Hope"],
        correctAnswer: "Corellian corvette"
    }
];

// Function to select a random question
function selectRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    return questionsAndAnswers[randomIndex];
}

// Function to start the quiz
function startQuiz() {
    // Selecting a random question
    const question = selectRandomQuestion();

    // Displaying the question and answers
    document.querySelector('.question').textContent = question.question;
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach((answerElement, index) => {
        answerElement.querySelector('.text').textContent = question.answers[index];
    });

    // DOM for the hide class functionality when click start
    document.querySelector(".question-wrapper").classList.remove("hide");
}

// Event listener for the start button
document.querySelector('.start').addEventListener('click', () => {
    startQuiz();
    document.querySelector(".end-screen").classList.remove("hide");
    document.querySelector("#heading-2").classList.add("hide");
    document.querySelector(".score").classList.add("hide");
    document.querySelector(".restart").classList.remove("hide");
    
    // Add code to show the timer and quiz question wrapper here
});

// The restart button functionality 
document.querySelector('.restart').addEventListener('click', () => {
    startQuiz();
    document.querySelector(".question-wrapper").classList.add("hide");
    document.querySelector(".restart").classList.add("hide");
});