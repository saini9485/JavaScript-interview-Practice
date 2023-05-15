/*Placement Pre. With Vasanth 
// console.log(10 | 2)  // Output 10
// console.log(2 | 10)  // 10
// console.log(1 | 2)  //  3
// console.log(4 | 3)  //  7
//doubts this is question

Question: -2 // AND Gate
// console.log(10 & 2) // output 2   
// console.log(2 & 10) // output 2   
/* binary => 8 4 2 1
        10=> 1 0 1 0  
        2=>  0 0 1 0 */
                     

Question: -3 //XOR Gate
// console.log(10^2)  // 8
// console.log(10^3)  // 8
/*
 */

Question: -4 //
// console.log(2<<1) //4 =>move one from left 
// console.log(3<<2) // 12 => number * 2^ exponent
// console.log(10<<0) // 10 

/*
* 8 4 2 1
*2-> 0 0 1 0 
3->0 0 1 1  
*/

Question: -5  // 
// console.log(2>>1) //1 =>move one from Right 
// console.log(3>>2) // 0 => number * 2^ exponent
// console.log(10>>0) // 10 number/ 2^exponent
/*
* 8 4 2 1
*2-> 0 0 1 0 
3->0 0 1 1  
*/

Question: -6 // 
// async function  f (){
// let result = "first"
// let Promise = new Promise ((res, rej)={
// setTimeout(()=>res("done!"),1000);

// })
// result = await Promise
// console.log(result)
// }
// f()

Question: -7 //
// function* range (start, end ) {
//         for(let i=start; i<end; i++){
//                 yield Promise.resolve(i)
//         }
// }
// (async () =>{
//         let gen = range(1, 3)
//         for await( const item of gen){
//                 console.log(item)
//         }
// }) ()
//output=> 1 2

Question: -8 //
// const myPromise = () => Promise.resolve("i have completed")
// function firstFunction (){
//         myPromise().then((res)=> console.log(res))
//         console.log("second")
// }
// async function secondFunction (){
// console.log(await myPromise())
// console.log("second")
// }
// firstFunction()
// secondFunction()
//output =>  second, i have completed, i have completed, second 
/*first function will be call and print console then myPromise will be call and print it 
after that second function will be call there await function it will wait until my promise is not 
settel then again myPromise function will be call and print it then console print  */


Question: -9//
// async function getDate (){
//      return  await  Promise.resolve("i am ready")
// }
// getDate().then((res)=>console.log(res))
// output => i am ready 

Question: -10 // Promise.race
// const firstPromise = new Promise((res, rej) => {
//         setTimeout(res, 5000, "one")
// })

// const secondPromise = new Promise((res, rej) => {
//         setTimeout(res, 1000, "two")
// })
//  Promise.race([firstPromise, secondPromise]).then((res) => console.log(res))
//output =>two 
/*Promise.race print only first function whatever resolve first ,  here 
second fuction will resolve first that's why here coming two */


Question: -11 // Promise.all
//  const firstPromise = new Promise((res, rej) => {
//         setTimeout(res, 5000, "one")
// })

// const secondPromise = new Promise((res, rej) => {
//         setTimeout(res, 1000, "two")
// })
//  Promise.all([firstPromise, secondPromise]).then((res) => console.log(res))
//output => [ 'one', 'two' ]
/*Promise.all print all function but it will print line by line it will wait untill function 
does't resolve  here first will be resolve then second will be resolve*/

Question: -12 
// function getSomeData() {
//         return new Promise((res, rej) => {
//                 try {
//                         const fetchData = ("receiveData")
//                         res(fetchData)
//                 }
//                 catch (error) {
//                         rej(error)
//                 }
//                 finally {
//                       console.log("hello")  
//                 }
//         })
// }
// getSomeData().then((res) => console.log(res))
//hello,receiveData

Question:-13 //
