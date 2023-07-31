const clockTitle = document.querySelector(".js-clock");

const christmasEveDate = new Date("December 24, 2023 00:00:00").getTime();

const updateClock = () => {
  const now = new Date().getTime();
  const distance = christmasEveDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

updateClock();
const clockInterval = setInterval(updateClock, 1000);