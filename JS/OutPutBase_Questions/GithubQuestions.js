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

Question:-12 //


