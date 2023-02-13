Topic:-1 // Closure 

function outerFun (a){
    let b = 10;
    function innerFun (){
        let  sum = a+b;
        console.log("sum", sum)

    }
    innerFun()
}
outerFun(5) // sum 15

