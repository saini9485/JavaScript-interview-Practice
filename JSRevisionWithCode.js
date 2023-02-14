// Topic:-1 // Closure 

// function outerFun (a){
//     let b = 10;
//     function innerFun (){
//         let  sum = a+b;
//         console.log("sum", sum)

//     }
//     innerFun()
// }
// outerFun(5) // sum 15


// closure second example 

// function outerFun (a){
//     let b = 10; 
//     function innerFun (){
//        let sum = a+b; 
//        console.log(sum)
//     }
//     innerFun()
// }
// outerFun(20)

Topic:-2 // Deep copy and shallow copy 

// 1. Shallow copy 

Topic:-3 // way to  copy the object 

const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
// let p1 = {
//     ...person
// };

// // using  Object.assign() method
// let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));
console.log(p3)


