<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Star Wars Quiz Game With Sass Styling</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./CSS/style.css" />
  </head>
  <body>
    <img
      class="hide"
      src="./assets/StarWars Galaxys Edge Pexels.jpg"
      alt="Disney Galaxy's Edge Storm Trooper by Craig Adderley from Pexels"
    />

    <div class="container">
  
      <div class="start-screen">
        <h1 class="heading">Star Wars Quiz With Sass</h1>
        <div class="settings">
 
          <button class="btn start">Start Quiz!</button>


          <div class="instruct-cont">
            <ul>
              <li class="instruct-list">
                Click on the answer you think is correct.
              </li>
              <li class="instruct-list">
                Once an answer is selected, click "Next" to move on.
              </li>
              <li class="instruct-list">
                * You cannot continue if you haven't chosen an answer.
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div class="question-wrapper hide">
        <div class="number">
          Question <span class="current">1</span> of <span class="total">6</span>
        </div>
        <div class="question">This is a question</div>
      </div>


      <div class="answer-wrapper hide">
        <div class="answer">
          <span class="text">Answer 1</span>
          <span class="checkbox">
            <span class="icon">✓</span>
          </span>
        </div>
        <div class="answer">
          <span class="text">Answer 2</span>
          <span class="checkbox">
            <span class="icon">✓</span>
          </span>
        </div>
        <div class="answer">
          <span class="text">Answer 3</span>
          <span class="checkbox">
            <span class="icon">✓</span>
          </span>
        </div>
      </div>


      <button class="btn next hide">Next</button>


      <div class="end-screen hide">
        <h1 id="heading-2" class="heading">The End!</h1>
        <div class="score-cont">
          <div class="score">
            <span class="score-text">Your Score:</span>
            <div>
              <span class="final-score">0</span>
              <span class="total-score">/10</span>
            </div>
          </div>
        </div>
        <button class="btn restart hide">Restart Quiz</button>
      </div>
    </div>

    <script src="./index.js"></script>
  </body>
</html>
