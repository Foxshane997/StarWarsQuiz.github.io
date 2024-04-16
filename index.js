const progressBar =  document.querySelector(".progress-bar"),
    progressText = document.querySelector(".progress-text");

// Making the prgress bar dynamic
    const progress = (value) => {
        const percentage = (value / time ) * 100;
        progressBar.computedStyleMap.width = `${percentage}%`;
        progressText.innerHTML = `${value}`;
    }

    let question = [],
    time = 30,
    score = 0,
    currentQuestion,
    timer;

    const startBtn = document.querySelector(".start"),
        numQuestions = document.querySelector("#num-questions"),
        timePerQuestions = document.querySelector("#time"),
        quiz = document.querySelector(".quiz"),
        startscreen = document.querySelector(".start-screen");

    // const startQuiz = () => {
    //     const num = numQuestions.value;
    //     cat = category.value;
    //     diff = difficulty.value; 

    //     const url = `https:opentdb.com/api.php?amount`;
    // }

    let answers = [
        "?",
        "?",
        "?",
        "?"
    ];