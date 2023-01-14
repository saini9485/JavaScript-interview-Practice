const counter = document.querySelector(".Counter")
const increment = document.querySelector(".Increment")
const decrement = document.querySelector(".Decrement")

let count = 0;
let interval;

const handleIncrement = () =>{
  interval = setInterval(() => {
    count+= 1;
    counter.innerHTML = count
  },1000);
    
 }
setInterval(()=>{
  let time = new Date().toLocaleTimeString()
  counter.innerHTML = time
},1000)


const handleDecrement = () =>{
  clearInterval(interval)
    count-= 1;
    counter.innerHTML = count
}

 increment.addEventListener("click",handleIncrement)
decrement.addEventListener("click",handleDecrement)