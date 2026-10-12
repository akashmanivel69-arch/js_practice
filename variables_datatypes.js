// Topic 1: Variables and data types (1–10)

// 1. Declare variables to store your name, age, city, and whether you are a student.

let name = "Ak", age = 25, city = "CBE", isStudent = false;

// 2. Create variables using let, const, and var, and print their values.

let a =10;
const b = 20;
var c = 30;

console.log("let a:", a);
console.log("const b:", b);
console.log("var c:", c);

// 3. Store two numbers and print their sum.

let num1 = 15;
let num2 = 25;
let sum = num1+num2;
console.log("sum :",sum);

// 4. Store a product name, price, and quantity, then calculate the total price.

let product = {
    name : "laptop",
    price : 1000,
    quantity : 2
};

let total_price = product.price*product.quantity;
console.log("Total_price :",total_price);

// 5. Check the data type of a string, number, boolean, undefined, null, object, and array using typeof.

let str = "Hello";
let num = 42;
let bigno = 2**53+2;
let bool = false;
let und;
let nul = null;
let obj = {name: "John", age: 30};
let arr = [1, 2, 3];

console.log("Type of str:", typeof str);
console.log("Type of num:", typeof num);
console.log("Type of bigno:", typeof bigno);
console.log("Type of bool:", typeof bool);
console.log("Type of und:", typeof und);
console.log("Type of nul:", typeof nul);
console.log("Type of obj:", typeof obj);
console.log("Type of arr:", typeof arr);


// 6. Create a variable without assigning a value and print it.
// 7. Assign null to a variable and compare its type with undefined.
// 8. Swap two variables without losing either value.
// 9. Convert a person's age from a string to a number.
// 10. Create a user profile using variables and print a formatted profile summary.