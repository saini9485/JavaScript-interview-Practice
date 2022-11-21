Question:-1 // What will output
// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.country = country;
//}
//Output: Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }

Question:-2 // what will be output ?
// function foo() {
//     let x = (y = 0);
//     x++;
//     y++;
//     return x;
//   }
//   console.log(foo(), typeof x, typeof y);
  //output: 1, undefined , number

  Question:-3 // what will be output ?
//   function main() {
//     console.log("A");
//     setTimeout(function print() {
//       console.log("B");
//     }, 0);
//     console.log("C");
//   }
//   main();
//output: A, C, B

Question:-4 // what will be output ?
// console.log(0.1 + 0.2 === 0.3);
//output false

Question:-5 // what will be output ?
// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);
//output: 1undefined

Question:-6 // what will be output ?
// function foo() {
//     return;
//     {
//       message: "Hello World";
//     }
//   }
//   console.log(foo());
  //output undefined => becouse after return we put semi colon  

  Question:-6.1 // what will be output ?
// function foo() {
//     return
//     {
//       message: "Hello World";
//     }
//   }
//   console.log(foo());
  //output undefined
  
  Question:-6.2 // what will be output ?
// function foo() {
//     return {
//       message: "Hello World"
//     }
//   }
//   console.log(foo());
  //output { message: 'Hello World' }

  Question:-7 // what will be output ?
// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars); //[ <1 empty item>, 'b', 'c', 'd' ]
// console.log(myChars[0]); //undefined
// console.log(myChars.length); //4
/*The delete operator will delete the object property but it will not reindex 
the array or change its length. 
So the number or elements or length of the array won't be changed.  */

Question:-8 // What is the output of below code in latest Chrome ?
// var array1 = new Array(3);
// console.log(array1); //[ <3 empty items> ]

// var array2 = [];
// array2[2] = 100;
// console.log(array2); //[ <2 empty items>, 100 ]

// var array3 = [, , ,];
// console.log(array3); //[ <3 empty items> ]
/*The latest chrome versions display sparse array(they are filled with holes)
 using this empty x n notation. Whereas the older versions have undefined x n notation. 
 Note: The latest version of FF displays n empty slots notation.
 */

Question:-9 // what will be output 
// const obj = {
//     prop1: function () {
//       return 0;
//     },
//     prop2() {
//       return 1;
//     },
//     ["prop" + 3]() {
//       return 2;
//     },
//   };
  
//   console.log(obj.prop1()); //0
//   console.log(obj.prop2()); //1
//   console.log(obj.prop3()); //2
  /*ES6 provides method definitions and property shorthands for objects. 
  So both prop2 and prop3 are treated as regular function values. */

  Question:-10 // what will be output ?
// console.log(1 < 2 < 3); // True => 1<2-> True means 1 , 1<3 True => True
// console.log(3 > 2 > 1); // False => 3>2-> True means 1, 1>1 False => false


Question:-11 // What is the output of below code in non-strict mode ?
// function printNumbers(first, second, first) {
//     console.log(first, second, first);
//   }
//   printNumbers(1, 2, 3);
  //output 3, 2, 3 
  /*In non-strict mode, the regular JavaScript functions allow duplicate named 
  parameters. The above code snippet has duplicate parameters on 1st and 3rd 
  parameters. The value of the first parameter is mapped to the third argument 
  which is passed to the function. Hence, the 3rd argument overrides the first 
  parameter.
Note: In strict mode, duplicate parameters will throw a Syntax Error. */

Question:-12 //  what will output ?
// const printNumbersArrow = (first, second, first) => {
//     console.log(first, second, first);
//   };
//   printNumbersArrow(1, 2, 3);
//output 
/* the arrow functions doesn't not allow duplicate parameters in either 
strict or non-strict mode.*/

Question:-13 // what will output ?
// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));
// doutbs

Question:-14 // what will output ?
// console.log(String.prototype.trimLeft.name === "trimLeft");
// console.log(String.prototype.trimLeft.name === "trimStart");
//output: false true

Question:-15 //what will be output ?
// console.log(Math.max());
//output -Infinity
/*-Infinity is the initial comparant because almost every other value is bigger. 
So when no arguments are provided, -Infinity is going to be returned.
 Note: Zero number of arguments is a valid case.*/

 Question:-15.1 //what will be output ?
// console.log(Math.min());
//output Infinity

Question:-16 //
// console.log(10 == [10]);
// console.log(10 == [[[[[[[10]]]]]]]);
//True True 
/*10 === Number([10].valueOf().toString()); // 10 */

Question:-17 // What will the output 
// console.log(10 + "10"); // 1010
// console.log(10 - "10"); 0 

Question:-18 // what will be output ?
// console.log([0] == false); 
// if ([0]) {
//   console.log("I'm True");
// } else {
//   console.log("I'm False");
//}
//output: True I'm True
/*In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) 
which is resolved to false. Whereas [0] just becomes a truthy value without any conversion 
because there is no comparison operator. */

Question:-19 // What will be output ?
// console.log([1, 2] + [3, 4]);
//output 1,23,4
/*The + operator is defined for arrays. 
So it converts arrays into strings and concatenates them. */
 
Question:-20 //what will be the output ?
// const numbers = new Set([1, 1, 2, 3, 4]);
// console.log(numbers); 

// const browser = new Set("Firefox");
// console.log(browser);
//output => { 1, 2, 3, 4 }  { 'F', 'i', 'r', 'e', 'f', 'o', 'x' }
/*Since Set object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, 
it is case sensitive data structure. */

Question:-21 //
// console.log(NaN === NaN); //false
/*NaNs are never equal for floating-point numbers. */

Question:-22 //
// let numbers = [1, 2, 3, 4, NaN];
// console.log(numbers.indexOf(NaN));
//output -1 
/*The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. 
Since indexOf won't be able to find NaN inside an array, it returns -1 always.  */

Question:-23 //
// let [a, ...b,] = [1, 2, 3, 4, 5];
// console.log(a, b); //SyntaxError
/*When using rest parameters, trailing commas are not allowed and will throw a SyntaxError. 
If you remove the trailing comma then it displays 1, [2, 3, 4, 5] answer */

Question:-24 //

Question:-25 //
// async function func() {
//     return 10;
//   }
//   console.log(func());
  //output: Promise {10} => Async functions always return a promise. 

Question:-26 
// async function func() {
//     await 10;
//   }
//   console.log(func());
//output:  Promise {<resolved>: undefined} => becouse we are not returning function

Question:-27 //
// function delay() {
//     return new Promise(resolve => setTimeout(resolve, 2000));
//   }
  
//   async function delayedLog(item) {
//     await delay();
//     console.log(item);
//   }
  
//   async function processArray(array) {
//     array.forEach(item => {
//       await delayedLog(item);
//     })
//   }
  
//   processArray([1, 2, 3, 4]); //SyntaxError => await should be below of async function

Question:-28 //
// function delay() {
//     return new Promise((resolve) => setTimeout(resolve, 2000));
//   }
  
//   async function delayedLog(item) {
//     await delay();
//     console.log(item);
//   }
  
//   async function process(array) {
//     array.forEach(async (item) => {
//       await delayedLog(item);
//     });
//     console.log("Process completed!");
//   }
//   process([1, 2, 3, 5]);
  //output Process completed! 1 2 3 5
  /*The forEach method will not wait until all items are finished but it just runs the tasks and 
  goes next. Hence, the last statement is displayed first followed by a sequence of promise 
  resolutions.*/ 

Question:-28.1 //Using of loop 
// async function processArray(array) {
//     for (const item of array) {
//       await delayedLog(item);
//     }
//     console.log("Process completed!");
//   }

  Question:-29 //
//   var set = new Set();
// set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
// console.log(set);
//output: Set(4) { '+0', '-0', NaN, undefined }
/*Set has few exceptions from equality check,
All NaN values are equal
Both +0 and -0 considered as different values */

Question:-30 //
// const sym1 = Symbol("one");
// const sym2 = Symbol("one");

// const sym3 = Symbol.for("two");
// const sym4 = Symbol.for("two");
// console.log(sym1 === sym2, sym3 === sym4);
//false true

Question:31 //
// console.log(Promise.resolve(5)) //Promise { 5 }

Question:-31 // What is the output of below code
// const sym1 = new Symbol("one");
// console.log(sym1);
//output=>reference Error 
/*becouse here symbol is a standard function and not an object constructor */

Question:-32 //
// let myNumber = 100;
// let myString = "100";

// if (!typeof myNumber === "string") {
//   console.log("It is not a string!");
// } else {
//   console.log("It is a string!");
// }

// if (!typeof myString === "number") {
//   console.log("It is not a number!");
// } else {
//   console.log("It is a number!");
//}
//output=> It is a string! It is a number!
/*beacose typeof always return truely value true or false that's condition will be failse and 
it will go in else block */

Question:-33//
// console.log(
//   JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
// );
// console.log(
//   JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
// );
//output => {"myArray":["one",null,null,null]} {}
/*symbol and undefine not valid in JSON that's it will consider null 
All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}). */

Question:34//
// class A {
//   constructor() {
//     console.log(new.target.name);
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//   }
// }

// new A();
// new B();
//A B

Question:-35 //
// const [x, ...y, z] = [1, 2, 3, 4];
// console.log(x, y, z);
//Syntax Error 
/*becouse after rest operator comma is not valid rest operator will be in last  */

Question:-35.1 //
// const [x, z, ...y ] = [1, 2, 3, 4];
// console.log(x, y, z);
// output 1 [ 3, 4 ] 2

Question:-36
// const { a: x = 10, b: y = 20 } = { a: 30 };

// console.log(x);
// console.log(y);
//output=> 30 20

Question:-37 //
// function area({ length = 10, width = 20 }) {
//   console.log(length * width);
// }

// area();
//Error 
/*if you are doing object destructing you should define at least one argument other wise it will give error */

Question:37.1 //
// function area({ length = 10, width = 20 }) {
//   console.log(length * width);
// }

// area({});
//200 

Question:-38 //
// const props = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jack" },
//   { id: 3, name: "Tom" },
// ];

// const [, , { name }] = props;
// console.log(name);
//output => Tom
/*becouse here we have two empty place it will consider it also */

Question:-39//
// function checkType(num = 1) {
//   console.log(typeof num);
// }

// checkType();
// checkType(undefined);
// checkType("");
// checkType(null);
//output => number number string object

Question:-40//
// function add(item, items = []) {
//   items.push(item);
//   return items;
// }

// console.log(add("Orange"));
// console.log(add("Apple"));
//output => [ 'Orange' ] [ 'Apple' ]
/*every call create new object here  */




















