question: -1; /* */
function add(a) {
    return function (b) {
        if (b) return add(a + b)
        console.log(a)
        return a
    }
}
console.log(add(5)(2)(4)(5)()) //16

question: -2; /*Convert sum(2,6,1) to sum(2)(6)(1)*/
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1)); //9

question: -3; /* */
// function sum(operation) {
//     return (a) => {
//         return (b) => {
//         if(operation === "sum")
//                   return a + b;
//                     else if(operation === "multiply")
//                     return a * b;
//                     else if(operation === "divide")
//                     return a / b;
//                     else if(operation === "subtract")
//                     return a - b;
//                     else return "No / Invalid Operation Selected"
//         }
//     }
// }

question: -4; /*Write a currying function that takes infinite arguments. */
// function infinite(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         // ...
//         // ...
//         // ...
//         return a+b+c+d+...+n;
//       };
//     };
//   };
// }

question: -5 /* *///recursive solution
// const sum = function(a) {
//     return function(b) {
//         if (b) {
//             return sum(a + b);
//         } else {
//             return a;
//         }
//     }
// }



