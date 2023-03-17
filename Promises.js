Example:-1 
let Promises = new Promise ((resolve , reject)=>{
    if(100>150){
        resolve("successfully")
    }else{
       reject ("unsuccessful")
    }
     
  })
  Promises.then((value)=>{
      console.log(value)
  })
  Promises.catch((value)=>{
      console.log(value)
  })