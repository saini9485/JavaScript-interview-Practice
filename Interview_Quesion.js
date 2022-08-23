question:-1
//we have to it is false or true
// let sum = 0.1+0.2;
// if(sum==0.3){
//   console("True")
// }else {
//   console.log("false")
// }//false=> because all floating value when we compare it will return false 

question:-2
//we have to check it is false ot true
// let sum = 0.1+0.5;  //we have to c
// if(sum==0.6){
//   console("True")
// }else {
//   console.log("false")  // 
//} 
// why here is coming error 

question:-3
// // (function immediateA (a){
// //   (function immediateA (b){
// //     console.log(a)
// //   }) (1)
// // }) (0) //0 

question:-4
// // function multiply (num1,num2){
// //   console.log(num1*num2)
// //   return num1*num2
// // }
// // const triple = multiply(3)  // NaN 
// // triple(5) // error

question:-5
// // we want to achive 15 to this code how can achive 
// // function multiply (num1,num2){
// // }
// // const triple = multiply (5)
// // triple (3)
solution:-5
// function multiply (num1, num2 ){
//   return function triple (num3){
//     console.log(num3*num1)
//   }
//   }
//   const triple = multiply (5)
//   triple (3) //15

  question:-6
//if we want to achieve  200 and 15 with the help of this code 
// function multiply (num1,num2){
// if(num2==undefined){
//   return function triple(num3){
//     console.log(num3*num1)
//   }
// }else  {
// console.log(num1*num2)
// }
// }
// multiply (10,20)//200
// const triple = multiply (3) //num1 = 3 , num2 = undefine 
// triple (5) //15

question:-7
// //what will be output 
// function createIncreament (){
//     let count = 0;
//     function increament (){
//       count++;
//     }
//     let = massege = `Count is ${count}`
//     function log(){
//     console.log(massege)
//   }
//   return [increament,log]
//   }
//   const [increament , log ] = createIncreament ();
//   increament();
//   increament();
//   increament();
//   log();//0
  
question:-8
  /*we wanted to print 1 to 5 in  a interval of 1 second  */ 
  // for (let i=1;i<=5;i++)
  // setTimeout (()=>{   
  // console.log(i)
  // },i*1000) //1,2,3,4,5 , after one second
  
  question:-9
  let count = 0;
  (function immediate() {
    if (count === 0) {
      let count = 1;
      console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
  })();
