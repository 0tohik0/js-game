const timer = () => {
    
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    window.onload = () => {
        let fiveMinutes = 60 * 1,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    }

}

export default  timer



// timer-minutes
// timer-second