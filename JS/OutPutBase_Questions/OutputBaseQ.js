QUESTION:-1   //What will be the output of the code below?
x = 5;
var x;
(function fun() { 
    {
        let x = 1;
        x++;
        console.log(x);
    }
    console.log(x);
})();
// output 2 5 


QUESTION:-2 // What will be the output of the code below and why?
// setTimeout(() => {
//     console.log("Hi");
// }, 0)
// console.log("Hello");
// output Hello Hi

// var x = 5;
// x = 0;
// setTimeout(() => {
//     console.log(x);
// })
// console.log("Hello");
// x = x+1;
// output Hello 1

QUESTION:-3 //What will be the output of the code below and why?
// fun2();
// console.log(x);
// console.log(y);
// fun1();
// const fun1 = () => {
//     console.log("fun1")
// }
// function fun2(){
//     console.log("fun2")
// }
// var x = 5;
// let y = 7;
 // output => fun2 undefined 
//ReferenceError: //Cannot access 'y' before initialisation
//ReferenceError: //Cannot access 'fun1' before initialisation

QUESTION:-4 // What will be the output of the following code?
// var Output = (function(X)
// {
// delete X;
// return X;
// }
// )(0);
// console.log(Output);
// output => 0

 QUESTION:-5 //What will be the output of the following code?
// var X = { Foo : 1}; 
// var Output = (function() 
// { 
// delete X.foo; 
// return X.foo; 
// } 
// )(); 
// console.log(Output);
// output => undefined

QUESTION:-6 //the output of the given JavaScript code?
// let x = 10;
// const y = x++ + ++x - ++x;
// console.log(x++, ++x, --x, y); // 9
//x++ = 13 , ++x = 15 , ++x = 14 => 13+15-14 => 9

QUESTION:-6 // the output of the given JavaScript code?
// function* greetGenerator() {
//     yield 'Hi';
//     yield 'Hello';
//   }
//   const greet = greetGenerator();
//   console.log(greet.next().value); // Hi 
//   console.log(greet.next().value); // Hello
//   console.log(greet.next().value); // undefine

QUESTION:-7 //the output of the given JavaScript code?
// function greet(message) {
//     return new Promise((resolve, reject) => {
//         if (message === 'Hi') resolve(message);
//         else reject('Hmm');
//     })
//   }
//    const result = greet('Hello').then((data) => {
//     console.log(data)
//   }).catch((data) => {
//     console.log(data);
//   }) //Hmm

  QUESTION:-8 //the output of the given JavaScript code?
//   const arr = [...'codedamn'];

// console.log(arr); //[‘ c’, ‘o’, ‘d’, ‘e’, ‘d’, ‘a’, ‘m’, ‘n’]

QUESTION:-9 //Write a function that removes duplicates from an array without using Set.
// function removeDuplicates(arr) {
//     return arr.filter((x, i) => arr.indexOf(x) === i);
//   }
// console.log(removeDuplicates([1,2,3,1,4])) // [ 1, 2, 3, 4 ]

   QUESTION:-10 // output 

// var a = 1;

// var func = function(){
//     console.log(a)
//     var a = 2 
// };

// func() 

QUESTION:-11
let arr = [1,2,3]
arr[100] = 4
console.log(arr.length) //101

QUESTION:-12
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

//model, color, year, country

QUESTION:-13//
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3)); //Error

QUESTION:-14//
console.log(10 + "10"); //1010
console.log(10 - "10"); //0

QUESTION:-15//
let user1 = {
  name: 'John',
  age: 27
};

let user2 = user1;
user2.age = 30;

console.log(user1.age, user2.age); //30 30 

QUESTION:-16//
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main(); //A,C,B

QUESTION:-17//
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);//[empty, "b", "c", "d"]
console.log(myChars[0]);//undefined
console.log(myChars.length);//4

QUESTION:-18
var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})();

QUESTION:-19
let a=[1,2,3,4]
let b=[5,6,7,8];
let newArr = []

for(let i=0;i<a.length;i++){
    newArr.push(a[i])
    newArr.push(b[i])
}
console.log(newArr) //[1,5,2,6,3,7,4,8];


console.log(null); //null;
console.log(+null); //0;
console.log(undefined); //undefined;
console.log(+undefined); //NaN
console.log(["a"] + ["b"] + ["c"]); // "ab"
console.log([] + []); // ""
console.log(![] + []); // "false", because ![] returns false.
console.log(+false); //0
console.log(NaN); // NaN
console.log(+NaN); // NaN
console.log(+""); // 0
console.log(+null === 0); //true
console.log(!!1 === true); //true
console.log(Math.max()); //-Infinity
console.log(Math.min()); //Infinity
console.log(NaN == NaN); //false
console.log(typeof NaN.toString() === "string"); //true;



