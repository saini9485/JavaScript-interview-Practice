// let counter = 0;
// function getData (){
//     console.log("FetchData"+counter++)
// }

// getData()
// const BetterFunction = (getData,1000);

let counter = 0;
function getData (){
    console.log("FetchData"+counter++)
}
// getData()

function Debouncing (callB,delay){
let  timer;
return function (...args){
    if(timer)clearTimeout(timer)
    setTimeout(()=>{
        callB();
    },delay)
}
}
const BetterFunction = Debouncing(getData,1000)