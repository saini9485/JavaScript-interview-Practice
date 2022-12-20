Questions:-1 // output
// var a = 1;

// var func = function(){
//     console.log(a)
//     var a = 2 
// };

// func() // undefined => becouse of execution context

Questions:-2 // output after calling new function 
// const obj = {
//     name: "Aditya",
//     newFunc: function(){
//         consoel.log(this.name);
//     }
// }

// const newobj = {
//     name: "Rajesh"
// }
// console.log(newobj) //{ name: 'Rajesh' }

Questions:-3 //
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  //6 6 6 6 6 => after one second interval 
