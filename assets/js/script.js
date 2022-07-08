let time = 5;
let timerId;

const runTimer = () => {
    time--;
    if(time<1) {
        clearInterval(timerId);
        time = 0;
    }
    document.querySelector('span.time').innerText = time;
};

timerId = setInterval(runTimer, 1000);
// clearInterval
