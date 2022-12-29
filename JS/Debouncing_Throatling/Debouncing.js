//Without Debouncing..  
let counter = 0;
function getData (){
    console.log("FetchData"+counter++)
}
 getData() 
 
// function Debouncing(call, wait){
// let timer;
// return function (){
//     if(timer)clearTimeout(timer) // clear 
//     timer =setTimeout(()=>{
//         call()
//     },wait)
// }
// }
// const BetterFunction = Debouncing(getData,2000)







//with Debouncing ......
// let counter = 0;
// function getData (){
//     console.log("FetchData"+counter++)
// }
// // getData()

// function Debouncing (callB,delay){
// let  timer;
// return function (...args){
//     if(timer)clearTimeout(timer)
//    timer= setTimeout(()=>{
//         callB();
//     },delay)
// }
// }
// const BetterFunction = Debouncing(getData,2000)
