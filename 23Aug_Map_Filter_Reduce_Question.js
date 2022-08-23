// map filter ,reduce => output base question

question:-1   /*Return only Name of Student in capital latter*/ 
let Students = [
    {Name:"Rajesh",RollNumber:28 , Marks:50},
    {Name:"Virendra",RollNumber:37 , Marks:85},
   { Name:"Riyaj",RollNumber:18 , Marks:82},
    {Name:"Abhishek",RollNumber:15 , Marks:75},

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
// let StudentDetails = Students.filter((stu)=> {
//    return stu.Marks>60
// })
// console.log(StudentDetails) 


question:-3 /*marks more than 60 and RollNumber should be greater than 15 */
// let studentMarksNumber = Students.filter((stu)=>{
//     return (stu.Marks>60 && stu.RollNumber>15)
// })
// console.log( studentMarksNumber)


question:-4 /*sum of Marks of all student  */
// let studentMarksSum = Students.reduce((acc,curr)=>{  
//     return acc+curr.Marks;    
// })
// console.log(studentMarksSum ) 




question:-5 /*Return total marks of student with marks greater than 60 after 
             20 marks have been added to those who scored less than 60 */

const totalMarks = Students.map((stu)=>{
    if(stu.Marks<60){
        stu.Marks +=20
    }
    return stu;
})
//console.log(totalMarks)
.filter((stu)=>{
    return (stu.Marks>60)
})
//console.log(totalMarks)
.reduce((acc,curr)=>{
    return acc+curr.Marks

})
console.log(totalMarks)


