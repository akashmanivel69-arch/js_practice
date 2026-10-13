// Topic 3: Conditional statements (21–30)
// 21. Check whether a number is positive, negative, or zero.

let num1 = -1;

if (num1>=0){
    if(a>0){
        console.log("positive")
    }
    else{
        console.log("zero")
    }
}
else{
    console.log("negative")
}

// 22. Check whether a number is even or odd.

if (num1%2==0){
    console.log('even')
}
else{
    console.log('odd')
}

// 23. Find the largest of two numbers.

let num2 = 43

if(num1>num2){
    console.log("num1 greater")
}
else{
    console.log("num2 greater")
}

// 24. Find the largest of three numbers.

let num3 = 555;

if (num1>num2 && num1>num3){
    console.log("num1 is greater")
}
else if (num2>num3){
    console.log("Num2 is greater")
}
else{
    console.log("Num3 is greater")
}

// 25. Create a grade calculator based on marks.

function grade_cal(mark){
    if (mark>=90){
        console.log("o grade")
    }
    if (mark >=80){
        console.log("A grade")
    }
}

grade_cal(89)

// 26. Check whether a year is a leap year.

function leap(year){
    if (year%4 == 0 && year%400 == 0 || year % 100 == 0){
        console.log("leap")
    } 
}

leap(1800)

// 27. Create a simple login check using a stored username and password.
function log(name,password){
    if (name = "akash"){
        if (password = "akash@1437"){
            console.log("done")
        }
    }
}

log("akash","akash@1437")

// 28. Determine whether a person is eligible for a driving licence based on age.

let age = 43;
let is_eligible = age>18 ? true:false;
if (true){
    console.log("eligible")
}

// 29. Build a calculator using switch for the four basic arithmetic operations.


let op = "-"

switch (op){
    case "+":
        console.log(num1+num2)
    case "-":
        console.log(num1-num2)
    default:
        break
}

// 30. Create a shipping-cost calculator based on order amount and delivery type.

let cost = 500;
let type = "cod"

switch (type){
    case  "cod":
        console.log(cost+500)
}