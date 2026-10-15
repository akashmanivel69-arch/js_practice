/* Array stores multiple data of different types unlike other programming languages

*/


let arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log('arr1', arr1)

let arr2 = Array(1,2,3,4,5,6,7,8,9,10)
console.log('arr2', arr2)

let fruits = ["Mango","Apple","jackfruit"]
console.log('fruits', fruits)

// Array indecing
console.log("Indexing the fourth element",arr1[4])

// Finding Array Length
console.log("Length of arr1",arr1.length)

// Modifing array elements 
arr1[0] = 1 // here didn't modified anything

/* 
 Adding elements
-- push() - adds new element at the end of an array
-- unshift() - adds new element at the begining of an array
*/
console.log("adding new element 'Banana AND Melon' at the end", fruits.push("banana","Melon"),"\n", fruits)
console.log("adding new element 'Watermelon AND  Chakka' at the begining", fruits.unshift("Watermelon","Chakka"),"\n", fruits)


/*
Removing elements
-- pop() - removes the last element
-- shift() - removes the first element
*/

console.log("removing an element from the end", fruits.pop(),"\n", fruits)
console.log("removing first element", fruits.shift(),"\n", fruits)



// Empty arrays

let emp = Array(10)  // can store multple data of different types

console.log(emp)

emp[0] = "name"
emp[2] = 1
emp[10] = 33

console.log(emp)



// ==== SPLICE() ==== Add, remove, replace elements

// remove - .spilce(start, delete_count, )
console.log("remove elements using splice()", arr2.splice(0,4))

// Insert - .splice(from,to,in_elem1,in_elem2,...,in_elemN)
console.log("adding elements using splice()", arr2.splice(0,4,1,2,3,4,))
console.log(arr2)

// ==== SLICE() -- extracts part of array without affecting original one.
console.log("sciling",fruits.slice(2,4))

// ==== concat() - joins two array 
console.log("concatinating two arrays",arr1.concat(arr2))

// Array.isArray() - checks whether a value array or not
console.log(Array.isArray(arr1))

