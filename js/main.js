let timer;
let sec = 0;
let isPaused = true; // Start with the timer paused
let element = document.getElementById('timer');

function startTimer() {
    timer = setInterval(() => {
        if (!isPaused) {
            let minutes = Math.floor(sec / 60);
            let seconds = sec % 60;

            let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
            let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

            element.innerHTML = displayMinutes + ':' + displaySeconds;
            sec++;
        }
    }, 1000); // each 1 second
}

function pause() {
    clearInterval(timer);
    isPaused = true;
}

function play() {
    isPaused = false;
    startTimer(); // Start or resume the timer when Play is clicked
}

function reset() {
    clearInterval(timer);
    isPaused = true; // Pause the timer when resetting
    sec = 0;
    element.innerHTML = '00:00';
}
