function countdown(time) {
    if (time < 60) return time + "s";

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (minutes < 60) return minutes + "m " + seconds + "s";

    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (hours < 24) return hours + "h " + minutes + "m " + seconds + "s";

    let days = Math.floor(hours / 24);
    hours = hours % 24;

    if (days < 7) return days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    let weeks = Math.floor(days / 7);
    days = days % 7;

    return weeks + "w " +  days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

let seconds = 12;
let id = setInterval(() => {
    seconds--;
    let output = countdown(seconds);

    console.log(output);

    if (seconds === 0) {
        console.log("Countdown completed!");
        clearInterval(id);
    }
}, 1000)