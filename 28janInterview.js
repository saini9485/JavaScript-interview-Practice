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
    function a (i){
       setTimeout(() => {
        console.log(i)
    }, 1000)  
    i++
    }
  a(i)
} 

//
