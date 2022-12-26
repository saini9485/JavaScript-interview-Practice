const timer = document.querySelector(".Timer")
const start = document.querySelector(".Start")
const stope = document.querySelector(".Stop")

let time =0;
let interval;
const handleStart = () =>{
interval = setInterval(() => {
  time+= 1;
timer.innerHTML = time;
},1000);

}
const handleStop = () =>{
clearInterval(interval)
}

start.addEventListener("click", handleStart)
stope.addEventListener("click", handleStop)
