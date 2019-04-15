document.addEventListener("DOMContentLoaded", function () {
    startTime();
});

function startTime() {
    const date = new Date();

    const y = parse(date.getFullYear().toString().slice(2, 4));
    const m = parse(date.getMonth());
    const d = parse(date.getDate());
    const h = parse(date.getHours());
    const i = parse(date.getMinutes());
    const s = parse(date.getSeconds());

    document.getElementById('clock').innerHTML = y + ":" + m + ":" + d + ":" + h + ":" + i + ":" + s;
    // Update every 0.5 seconds (500 ms)
    setTimeout(startTime, 500);
}

function parse(value) {
    // Add a leading zero to numbers less than ten.
    return value.toString().padStart(2, '0');
}