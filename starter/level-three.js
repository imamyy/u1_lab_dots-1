/*
 * DOTS: Level Three
 *
 */
let score = 0;
const ball = document.querySelectorAll(".js-ball");
console.log(ball);
const scoreDisplay = document.querySelector(".js-score");
console.log(scoreDisplay);
const levelWinner = document.querySelector(".level-winner");
console.log(levelWinner);

ball[0].addEventListener("click", () => {
  let scoreIncrement = parseInt(ball[0].getAttribute("data-increment"), 10);
  score += scoreIncrement;
  scoreDisplay.innerText = score;
  if (score >= 100) {
    levelWinner.style.opacity = 1;
  }
});
ball[1].addEventListener("click", () => {
  let scoreIncrement = parseInt(ball[1].getAttribute("data-increment"), 10);
  score += scoreIncrement;
  scoreDisplay.innerText = score;
  if (score >= 100) {
    levelWinner.style.opacity = 1;
  }
});
ball[2].addEventListener("click", () => {
  let scoreIncrement = parseInt(ball[2].getAttribute("data-increment"), 10);
  score += scoreIncrement;
  scoreDisplay.innerText = score;
  if (score >= 100) {
    levelWinner.style.opacity = 1;
  }
});
