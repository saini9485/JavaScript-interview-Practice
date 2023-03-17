// const obj = {
//     name:"Rajesh",
//     discription:function (){
//         console.log(this.name)
//     }
// }
// const f = obj.discription
// f()

// function a (){
//     console.log(this)
// }
// a()

// const b = () =>{
//     console.log(this)
// }
// b()


//what will be output 
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

//how we can change in 1 to 5 without using let 

for (var i = 0; i < 5; i++) {
    function a(i) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
        i++
    }
    a(i)
}

//1. convert "aircampus" into capital later using array method 
// 2. polyfills 

question: -1 //what will output this question 

let x = true
let count = 0;
setTimeout(() => {
    x = false
    console.log("false x", x)
}, 1000)

while (1) {
    console.log("x", x)
    if (x) {
        count++
        console.log("count", count)
    }

}
 //x true
// count 1
// x true
// count 2...




