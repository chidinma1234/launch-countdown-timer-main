'use strict';
const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const dayText = document.querySelector('.s-d');
const hourText = document.querySelector('.s-h');
const minuteText = document.querySelector('.s-m');
const secondText = document.querySelector('.s-s');
const Welcome = document.querySelector('.notice');
const CardContainer = document.querySelector('.cards-content');

//setting my coundown time
// const countdownDate = Date.parse('2024-01-01T00:00:00');
// let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10);
let countdownDate = new Date().setMinutes(new Date().getMinutes() + 2);
// let countdownDate = new Date().setHours(new Date().getHours() + 1);

let timeInterVal = null;
//setting the countdown function
const startCountdown = () => {
  const now = new Date().getTime();

  const differenceTime = (countdownDate - now) / 1000;

  const days = toGetNoOfDays(differenceTime);
  const hours = toGetNoOfHours(differenceTime);
  const minutes = toGetNoOfMinutes(differenceTime);
  const seconds = toGetNoOfSeconds(differenceTime);

  if (differenceTime < 1) {
    endCountdown();
    Welcome.textContent = 'Welcome 🎉😊';
  }

  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;

  dayText.textContent = formatTimeText(days, 'Day');
  hourText.textContent = formatTimeText(hours, 'Hour');
  minuteText.textContent = formatTimeText(minutes, 'Minute');
  secondText.textContent = formatTimeText(seconds, 'Second');
};

function toGetNoOfDays(time) {
  return Math.floor(time / (60 * 60 * 24));
}
function toGetNoOfHours(time) {
  return Math.floor((time % (60 * 60 * 24)) / (60 * 60));
}
function toGetNoOfMinutes(time) {
  return Math.floor((time % (60 * 60)) / 60);
}
function toGetNoOfSeconds(time) {
  return Math.floor(time % 60);
}
function formatTimeText(value, unit) {
  return value <= 1 ? unit : unit + 's';
}
function endCountdown() {
  clearInterval(timeInterVal);
  CardContainer.remove();
}
window.addEventListener('load', () => {
  startCountdown();
  timeInterVal = setInterval(startCountdown, 1000);
});
