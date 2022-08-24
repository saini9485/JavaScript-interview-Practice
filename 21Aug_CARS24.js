//three round interview
//1. javascript 2 . react.js 3 . HR


question: -1;
//Based on Hosting
// function abc() {
//   console.log(a);
//   var a = 10;
// }
// abc(); //undefine


question: -2;
// function abc() {
//   console.log(a, b, c);
//   let b = 15; //error
//   const c = 20; //error
//   var a = 10; //undefine
// }
// abc();


question: -3;
//output base question
// console.log("a");
// setTimeout(() => console.log("set"), 0);
// Promise.resolve(() => console.log("pro")).then((resolve) => resolve());
// console.log("b");

//a->b->pro->set 


question:- 4 
//infinite currying 
// function add (a) {

// }
// console.log(add(5)(2)(4)(6)()) 

answer :-4
// function add (a){
//     return function (b){
//         if(b)return add (a+b)
//     }
// }
// console.log(add(5)(2)(4)(5)()) //undefine

//why it is coming undefine


question:-5
//implement this code 
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total)
solution :-5
const calc = {
    total:0,
    add(a){
        this.total +=a;
        return this ;
    },
    multiply (a){
        this.total *=a;
        return this;
    },
    subtract (a){
        this.total -=a;
        return this;
    },
};
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total)
