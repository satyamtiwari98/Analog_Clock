const HOUR = document.querySelector("#hour");
const MINUTE = document.querySelector("#minute");
const SECOND = document.querySelector("#second");

let date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hours = (hr * 360 / 12 + (min * (360 / 60) / 12)), minutes = ((min * 360 / 60) + (sec * (360 / 60) / 60)), seconds = sec * 360 / 60;

function Clock() {
    seconds += 6;
    minutes += (6 / 60);
    hours += (3 / 360);

    HOUR.style.transform = "rotate(" + hours + "deg)";
    MINUTE.style.transform = "rotate(" + minutes + "deg)";
    SECOND.style.transform = "rotate(" + seconds + "deg)";

}

let interval = setInterval(Clock, 1000);