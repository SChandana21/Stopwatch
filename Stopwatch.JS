let starttime;
let runningstatus = false;

function startwatch() {
 if (!runningstatus) {
    starttime = new Date();
    runningstatus = true;
    Stopwatchmain();
  }
}

function Stopwatch() {
  runningstatus = false;
}

function resetbutton() {
  runningstatus = false;
  document.querySelector('.js-div').innerHTML = "0:00:00";
};




function Stopwatchmain() {
  if (runningstatus) {

  let currenttime = new Date();
  let elapsedtime = new Date(currenttime - starttime);
  let hours = elapsedtime.getUTCHours();
  let minutes = elapsedtime.getUTCMinutes();
  let seconds = elapsedtime.getUTCSeconds();

  hours = hours < 10 ? "0" + hours: hours;
  minutes = minutes < 10 ? "0" + minutes: minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let Time = hours + ":" + minutes + ":" + seconds;

  document.querySelector('.js-div').innerHTML = Time;

  setTimeout(() => {
    Stopwatchmain();

  },1000)


}
}

