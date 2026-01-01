let score = 0;
let time = 10;

const btn = document.getElementById("btn");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

btn.addEventListener("click", () => {
  score++;
  scoreText.textContent = score;
});

const timer = setInterval(() => {
  time--;
  timeText.textContent = time;

  if (time === 0) {
    clearInterval(timer);
    btn.disabled = true;
    alert("Oyun bitdi! Xalın: " + score);
  }
}, 1000);
