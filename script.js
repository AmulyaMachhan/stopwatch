const timer = document.querySelector(".timer-display");
const start = document.getElementById('start-timer');
const pause = document.getElementById('pause-timer');
const reset = document.getElementById('reset-timer');

let [milliseconds , seconds , minutes , hours] = [0 , 0 , 0 , 0];

let timerId = null;
start.addEventListener('click' , () => {
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(displayTimer , 10)
});

pause.addEventListener('click' , () => {
    clearInterval(timerId)
});

reset.addEventListener('click' , () => {
    [milliseconds , seconds , minutes , hours] = [0 , 0 , 0 , 0];
    timer.innerHTML = `00 : 00 : 00 : 000`;
    clearInterval(timerId)
});

function displayTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0
                hours++;
            }
        }
    }

    let h = (hours < 10 ) ? "0" + hours : hours;
    let m = (minutes < 10 ) ? "0" + minutes : minutes;
    let s = (seconds < 10 ) ? "0" + seconds : seconds;

    let mm = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;
    timer.innerHTML = `${h} : ${m} : ${s} : ${mm}`
}
