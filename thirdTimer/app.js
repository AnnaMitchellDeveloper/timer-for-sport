const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", function () {
  document.querySelector("#player").play();
  document.querySelector("#myVideo").play();
});

let timerMinutes = 20;
let timerSeconds = timerMinutes * 60;

function calculateTime() {
  const countdown = document.querySelector("#countdown");
  let minutes = Math.floor(timerSeconds / 60);
  let seconds = timerSeconds % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  countdown.textContent = `${minutes}:${seconds}`;
  timerSeconds--;

  if (timerSeconds < 0) {
    stopTimer();
    timerSeconds = 0;
  }
  function stopTimer() {
    clearInterval(timerID);
  }
}
let timerID = setInterval(calculateTime, 1000);
