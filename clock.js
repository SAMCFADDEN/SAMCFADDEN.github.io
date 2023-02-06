const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

hours = (hours < 10 ? "0" : "") + hours;
minutes = (minutes < 10 ? "0" : "") + minutes;
seconds = (seconds < 10 ? "0" : "") + seconds;

const time = hours + ":" + minutes + ":" + seconds;

document.getElementById("clock").innerHTML = time;

setInterval(function() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  const time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = time;
}, 1000);
