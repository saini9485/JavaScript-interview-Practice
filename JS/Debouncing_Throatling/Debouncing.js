// //Without Debouncing..
// let counter = 0;
// function getData (){
//     console.log("FetchData"+counter++)
// }
// getData() 

//with Debouncing ......
let counter = 0;
function getData (){
    console.log("FetchData"+counter++)
}
// getData()

function Debouncing (callB,delay){
let  timer;
return function (...args){
    if(timer)clearTimeout(timer)
   timer= setTimeout(()=>{
        callB();
    },delay)
}
}
const BetterFunction = Debouncing(getData,2000)