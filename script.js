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
let type = 'work';

const toggleClock = reset => {
    if(reset){
        //stop timer
        stopClock();
    } else {
        if(isClockRunning === true){
            //pause timer
            clearInterval(clockTimer);
            isClockRunning = false;
        } else {
            //start timer
            isClockRunning = true;
            clockTimer = setInterval(() => {
                currentTimeLeftInSession--;
                displayCurrentTimeLeftInSession();
            }, 1000)
        }
    }
}

const displayCurrentTimeLeftInSession = () => {
    const secondsLeft = currentTimeLeftInSession;
    let result = '';
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);

    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time
    }
    if (hours > 0) result += `${hours}:`
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
    pomodoroTimer.innerText = result.toString();
}

const stopClock = () => {
    clearInterval(clockTimer);
    isClockRunning = false;
    currentTimeLeftInSession = workSessionDuration;
    displayCurrentTimeLeftInSession();
}
