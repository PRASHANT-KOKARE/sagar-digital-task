var cl = console.log;

const digitalClock = document.getElementById("digitalClock");
let d = new Date();
let hr = d.getHours ();
let min = d.getMinutes ();
let sec = d.getSeconds ();

let session = "AM";

let result = `${hr} : ${min} : ${sec} ${session}`;

digitalClock.innerHTML = result; 