/*ARRAY Interview Question:-
1. How would you double elements of an array without creating additional variables using reduce?
2. How would you destructure array elements in JavaScript?
3. How would you remove and return the last element from an array in JavaScript?
4. How would you empty an array in JavaScript?
5. What are the different ways to create an array in JavaScript?
6. What do you understand by the JavaScript Map Array function?
7. How would you use arrays to swap variables in JS?
8. How would you remove duplicates in an array without using any inbuilt function?
 */
question:-1/* Find the pairs of array element for which sum is equal to given target
 value(Two Sum Problem)*/ 
 
let arr1 = [1,2,3,4,5,6,7,8,9] 

Question:-3 //How would you remove and return the last element from an array in JavaScript?
let myArray = [1, 2, 3, 4, 5];
let lastElement = myArray.pop(); // removes and returns 5
console.log(lastElement); // outputs 5
console.log(myArray); // outputs [1, 2, 3, 4]

Questions:-7 // How would you use arrays to swap variables in JS?
let a = 5;
let b = 10;
let temp = [a, b]; // Store the values of a and b in an array 

a = temp[1]; // Assign the value of b to a
b = temp[0]; // Assign the value of a to b

console.log(a); // Output: 10
console.log(b); // Output: 5

Question:-7//How would you remove duplicates in an array without using any inbuilt function?

let arr = [1, 2, 3, 4, 1, 2, 5, 6, 3, 7];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    newArr.push(arr[i]);
  }
}

console.log(newArr); // Output: [1, 2, 3, 4, 5, 6, 7]


