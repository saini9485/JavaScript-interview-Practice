const counter = document.querySelector(".Counter")
const increment = document.querySelector(".Increment")
const decrement = document.querySelector(".Decrement")

let count = 0;

const handleIncrement = () =>{
    count+= 1;
    counter.innerHTML = count
}

const handleDecrement = () =>{
    count-= 1;
    counter.innerHTML = count
}

increment.addEventListener("click",handleIncrement)
decrement.addEventListener("click",handleDecrement)
