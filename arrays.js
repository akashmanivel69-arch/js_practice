// // Level 2 — Working with data
// // Topic 6: Arrays (51–65)
// // 51. Create an array of five programming languages and print each element.

// ar = [1,"rhuejuv"]
// for(i=0;i<ar.length;i++){
//     console.log(ar[i])
// }
// // 52. Add an element to the beginning and end of an array.

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.unshift("Lemon"); 
// fruits.push("mango")

// console.log(fruits)

// // 53. Remove the first and last elements from an array.

// fruits.pop()
// fruits.shift()
// console.log(fruits)



let  a = new Array(1,2,3,4,5)
console.log('a', a)

let b = [1,2,3,4,5]
console.log('b', b)

let c = new Array(3)
console.log('c', c)


let new_array = a.flatMap(x => (x,x*10))
console.log('new_array', new_array)


console.log(new_array.indexOf(20)+1)

console.log(new_array.includes(20))



a.forEach(function(i){
    console.log(i)
})


// let z = a.map(x =(i) => i*2)
// console.log('z', z)

console.log(a.flatMap(x => [x*2]))


// 54. Find the length of an array.
// 55. Access the first, middle, and last elements of an array.
// 56. Find the index of a particular element.
// 57. Check whether an array contains a given value.
// 58. Find the largest number in an array.
// 59. Find the smallest number in an array.
// 60. Calculate the sum and average of an array of numbers.
// 61. Reverse an array without using reverse().
// 62. Remove duplicate values from an array.
// 63. Merge two arrays without modifying the originals.
// 64. Split an array into two halves.
// 65. Rotate an array to the right by \(k\) positions.


