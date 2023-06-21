// map filter ,reduce => output base question

question:-1   /*Return only Name of Student in capital latter*/ 
let Students = [
    {Name:"Rajesh",RollNumber:31 , Marks:80},
    {Name:"Virendra",RollNumber:15 , Marks:69},
   { Name:"Riyaj",RollNumber:16 , Marks:35},
    {Name:"Abhishek",RollNumber:7 , Marks:55},

]
solution:-1
// let NameOfStudent = Students.map((student)=>{
//     return student.Name.toUpperCase()
// })
// console.log(NameOfStudent)

solution:-2  //with loop
// let NameOfStudent = []
// for(i=0; i<Students.length; i++){
//     NameOfStudent.push(Students[i].Name.toUpperCase())
// }
// console.log(NameOfStudent)


question:-2  /*Return only details of those student who scored more than 60 marks */

let StudentDetails = Students.filter((stu)=> {
   return stu.Marks>60
})
console.log(StudentDetails) 


question:-3 /*marks more than 60 and RollNumber should be greater than 15 */
// let studentMarksNumber = Students.filter((stu)=>{
//     return (stu.Marks>60 && stu.RollNumber>15)
// })
// console.log( studentMarksNumber)


question:-4 /*sum of Marks of all student  */
// let Students = [
//     {Name:"Rajesh",RollNumber:28 , Marks:50},
//     {Name:"Virendra",RollNumber:37 , Marks:85},
//    { Name:"Riyaj",RollNumber:18 , Marks:82},
//     {Name:"Abhishek",RollNumber:15 , Marks:75},

// ]
// let studentMarksSum = Students.reduce((acc,curr)=>{  
//     return acc+curr.Marks;    
// },0)
// console.log(studentMarksSum ) //292 
/*here i am passing default zero because it is taking first value object means it is 
taking all object as a first value in acc. because there first value will be undefine
if i will not give any deafault value it store arr[0] so far i provided default value 
0;*/


question:-5 /*Return total marks of student with marks greater than 60 after 
             20 marks have been added to those who scored less than 60 */ 

            
const totalMarks = Students.map((stu)=>{
    if(stu.Marks<60){
        stu.Marks +=20  
    }
    return stu;
})
.filter((stu)=>{
    return (stu.Marks>60) // 
})
.reduce((acc,curr)=>{
    return acc+curr.Marks
},0)

console.log(totalMarks) //224

  
