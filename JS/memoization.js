function sum (n){
    let sum = 0;
    for(i=0; i<=n; i++){
      sum+= i
    }
    return sum
  }
  // console.time()
  // console.log(sum(5))
  // console.timeEnd()
  
  const memoization = (fun) =>{
    let cache = {}
    return function (...args){
      let n = args[0]
      if(n in cache){
        console.log("cache")
        return cache[n]
      }else{
        console.log("first")
        let result = fun(n)
        cache[n] = result;
        return result;
      }
    }
  }
   console.time()
  let efficent = (memoization(sum))
  console.log(efficent(5))
  console.timeEnd()
  
  console.time()
  console.log(efficent(5))
  console.timeEnd()
  
  