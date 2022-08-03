/*
 * DOTS: Level One
 *
 */
let score = 0;
const ball = document.querySelector(".js-ball");
console.log(ball);
const scoreDisplay = document.querySelector(".js-score");
console.log(scoreDisplay);
const levelWinner = document.querySelector(".level-winner");
console.log(levelWinner);
ball.addEventListener("click", () => {
  score += 10;
  scoreDisplay.innerText = score;
  if (score >= 100) {
    // console.log("Congrats!You have beaten level 1.");
    levelWinner.style.opacity = 1;
  }
});
