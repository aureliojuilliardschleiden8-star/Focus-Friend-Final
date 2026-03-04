// # APPLICATION NAME: FOCUS FRIEND
// #
// # EXPLANATION OF JAVASCRIPT LOGIC:
// # This script manages the 25-minute countdown.
// # - updateDisplay(): This function converts total seconds into minutes 
// #   and seconds, then updates the text on the screen.
// # - startTimer(): This uses 'setInterval' to run every 1 second, 
// #   decreasing the time left until it reaches zero.
// # - resetTimer(): This stops the countdown and sets the clock back 
// #   to the original 25:00 for a new session.

let timeLeft = 25 * 60;
let timer = null;

function updateDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    document.getElementById("timerDisplay").innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Focus session finished! Time for a break.");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateDisplay();
}
