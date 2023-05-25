const clockTitle = document.querySelector(".js-clock");
const xmasDate = new Date("2023-12-25");


function getClock() {
    const todayDate = new Date();
    const check = xmasDate - todayDate;
    const checkDay = Math.floor(check / (1000*60*60*24));
    const checkHour = Math.floor((check / (1000*60*60)) % 24);
    const checkMinute = Math.floor((check / (1000*60)) % (60));
    const checkSecond = Math.floor((check / 1000) % 60);
    clockTitle.innerText = `${checkDay}d ${checkHour}h ${checkMinute}m ${checkSecond}s`;
}

getClock();
setInterval(getClock, 1000);
