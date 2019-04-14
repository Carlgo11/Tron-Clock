document.addEventListener("DOMContentLoaded", function() {
    startTime();
});

function startTime() {
    let date = new Date();

    let y = parse(date.getFullYear().toString().slice(2,4));
    let m = parse(date.getMonth());
    let d = parse(date.getDate());
    let h = parse(date.getHours());
    let i = parse(date.getMinutes());
    let s = parse(date.getSeconds());

    document.getElementById('clock').innerHTML = y + ":" + m + ":" + d + ":" + h + ":" + i + ":" + s;
    setTimeout(startTime, 1000); // Update every second (1000 ms)
}

function parse(value) {
    return value.toString().padStart(2, '0'); // Add a leading zero to numbers less than ten.
}