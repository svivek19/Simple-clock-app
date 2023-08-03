const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.getElementById('sec');
const ampmEl = document.querySelector('.ampm');



function clock() {
    let time = new Date()
    let hr = zero(time.getHours());
    let min = zero(time.getMinutes());
    let sec = zero(time.getSeconds());
    if (hr > 12) {
        hr = hr - 12
        ampmEl.innerHTML = 'PM'
    }
    hourEl.textContent = `${hr}:`;
    minEl.textContent = `${min} :`;
    secEl.textContent = `${sec}`;
}
function zero(num) {
    return num < 10 ? "0" + num : num;
}
setInterval(clock, 500)
