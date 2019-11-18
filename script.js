const pomodoroTimer = document.querySelector('#pomodoro-timer');
const startButton = document.querySelector('#pomodoro-start');
const pauseButton = document.querySelector('#pomodoro-pause');
const stopButton = document.querySelector('#pomodoro-stop');

startButton.addEventListener('click', button => {
    toggleClock();
});

pauseButton.addEventListener('click', button => {
    toggleClock();
});

stopButton.addEventListener('click', button => {
    toggleClock(true);
});

let isClockRunning = false;
let workSessionDuration = 1500; //25 minutes
let currentTimeLeftInSession = 1500; //25 minutes
let breakSessionDuration = 300; //5 minutes


