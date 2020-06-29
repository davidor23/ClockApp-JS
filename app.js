
timer();

function timer(){
    const now = new Date,
        hours = now.getHours(),
        ampm = hours <= 11 ? ' AM' : ' PM';
    minutes = now.getMinutes(),
        seconds = now.getSeconds(),
        t_str = [hours-12,
            (minutes < 10 ? "0" + minutes : minutes),
            (seconds < 10 ? "0" + seconds : seconds)]
            .join(':') + ampm;
    document.getElementById('time_span').innerHTML = t_str;
    setTimeout(timer,1000);
}

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
const now = new Date();
const mins = now.getMinutes();
const minsDegrees = ((mins / 60) * 360) + 90;
const hours = now.getHours();
const hourDegrees = 0.5 * (hours * 60 + mins) + 90;
const seconds = now.getSeconds();
const secondDegrees = ((seconds / 60) * 360) + 90;


secondHand.style.transform = `rotate(${secondDegrees}deg)`;
minsHand.style.transform = `rotate(${minsDegrees}deg)`;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

// Hands won't reset back instead move forward and continue on.
const hands = document.querySelectorAll('.hand');

    if (seconds === 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
        hands.forEach(hand => hand.style.transitionDuration = '0.05s');
    }

}

setInterval(setDate,1000);