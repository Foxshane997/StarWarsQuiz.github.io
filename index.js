// const progressBar =  document.querySelector(".progress-bar"),
//     progressText = document.querySelector(".progress-text");

// // Making the prgress bar dynamic
//     const progress = (value) => {
//         const percentage = (value / time ) * 100;
//         progressBar.computedStyleMap.width = `${percentage}%`;
//         progressText.innerHTML = `${value}`;
//     }

//     let question = [],
//     time = 30,
//     score = 0,
//     currentQuestion,
//     timer;

//     const startBtn = document.querySelector(".start"),
//         numQuestions = document.querySelector("#num-questions"),
//         timePerQuestions = document.querySelector("#time"),
//         quiz = document.querySelector(".quiz"),
//         startscreen = document.querySelector(".start-screen");

//     const startQuiz = () => {
//         const num = numQuestions.value;
       
//     };

//      // Array for answers
//     //  let answer = [
            
//     //  ];

//     startBtn.addEventListener("click", )  // didnt add the startQuiz function
    
//     const showQuestion = (question) => {
//         const questionText = document.querySelector(".question"),
//             answerWrapper = document.querySelector(".answer-wrapper"),
//             questionNumber = document.querySelector("number");

//         questionText.innerHTML = question.question;

//         // correct amd wrong answers are mixed 
//         const answers = [...question.incorrect_answers, question.correct_answers.toString()];

//         answers.sort(() => Math.random() - 0.5);
//         answerWrapper.innerHTML = "";
//         answers.forEach((answer) => {
//             answerWrapper.innerHTML += `<div class="answer selected">
//             <span class="text">${answer}</span>
//             <span class="checkbox">
//                 <span class="icon">✓</span>
//             </span>
//         </div>`
//         })
//     };