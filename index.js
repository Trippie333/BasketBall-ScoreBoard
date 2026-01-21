let homeScore = 0;
let awayScore = 0;

const homeScoreEl = document.getElementById('home-score');
const awayScoreEl = document.getElementById('away-score');

const homeAdd1Btn = document.getElementById('home-add-1');
const homeAdd2Btn = document.getElementById('home-add-2');
const homeAdd3Btn = document.getElementById('home-add-3');
const awayAdd1Btn = document.getElementById('away-add-1');
const awayAdd2Btn = document.getElementById('away-add-2');
const awayAdd3Btn = document.getElementById('away-add-3');
const homeRemove1Btn = document.getElementById('home-remove-1')
const awayRemove1Btn = document.getElementById("away-remove-1");

const resetBtn = document.getElementById('reset');

function updateScore() {
    homeScoreEl.textContent = homeScore;
    awayScoreEl.textContent = awayScore;
}

homeAdd1Btn.addEventListener('click', () => {
    homeScore += 1;
    updateScore();
});

homeAdd2Btn.addEventListener('click', () => {
    homeScore += 2;
    updateScore();
});

homeAdd3Btn.addEventListener('click', () => {
    homeScore += 3;
    updateScore();
});

homeRemove1Btn.addEventListener('click', () => {
    homeScore += -1;
    updateScore();
});



awayAdd1Btn.addEventListener('click', () => {
    awayScore += 1;
    updateScore();
});

awayAdd2Btn.addEventListener('click', () => {
    awayScore += 2;
    updateScore();
});

awayAdd3Btn.addEventListener('click', () => {
    awayScore += 3;
    updateScore();
});

awayRemove1Btn.addEventListener("click", () => {
  awayScore += -1;
  updateScore();
});

resetBtn.addEventListener('click', () => {
    homeScore = 0;
    awayScore = 0;
    updateScore();
});

// Initialize the score display
updateScore();