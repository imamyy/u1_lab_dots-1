/*
 * DOTS: Level Two
 *
 */
let score = 0;
const ball = document.querySelectorAll(".js-ball");
console.log(ball);
const scoreDisplay = document.querySelector(".js-score");
console.log(scoreDisplay);
const levelWinner = document.querySelector(".level-winner");
console.log(levelWinner);
for (let i = 0; i < ball.length; i++) {
  ball[i].addEventListener("click", () => {
    score += 10;
    scoreDisplay.innerText = score;
    if (score >= 100) {
      levelWinner.style.opacity = 1;
    }
  });
}
