// "use strict"

let obj = {
    name :"Rajesh",
      yearofbirth : 2000,
      
    calculateAge :()=>{
       
      console.log(this)
            return  2023-this.yearofbirth
      }
    }
    
    
    
    
    const clage = obj.calculateAge
    // // calculateAge()
    // console.log(clage())
    
    
    let obj2 = {
    name :"Ankush",
      yearofbirth : 2002
      ,
      calculateAge :clage
    }
    
    console.log(obj2.calculateAge())
    
    
    
    console.log(name2,"not hoisted")
    console.log(name,"hoisted")
    var name = "Rajesh"
    
    let name2 = "saini"
    
    getName()
     getAge()
    
    const getName = function(){
      console.log("name")
    }
    getName()
    
    var  getAge =()=>{
      console.log("age")
     }