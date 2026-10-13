// Topic 5: Functions (41–50)
// 41. Create a function that adds two numbers.

function add(a,b){
    return a+b
}

console.log(add(3,4))

// 42. Write a function that returns the square of a number.

function square(n){
    return n**2
}

console.log(square(4))

// 43. Write a function that checks whether a number is even.

function even(n){
    if (n%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}

console.log(even(5))

// 44. Create a function that converts Celsius to Fahrenheit.

function CtoF(t){
    return t*1.8+32
}

console.log(CtoF(35))

// 45. Create a function that accepts a name and returns a greeting.

function greet(s){
    return "Hello "+s
}

console.log(greet("Akash"))

// 46. Write a function with a default parameter for a discount percentage.

function discount(amount,discount=10){
    return amount-(amount*(discount/100))
}

console.log(discount(500))

// 47. Rewrite a regular function as an arrow function.

let s = (a,b) => a+b;

console.log(s(3,4))

// 48. Create a function that accepts any number of arguments using rest parameters and returns their sum.

function sum(...numbers){
    return numbers.reduce((total,num) => total + num, 0);
}

console.log(sum(1,2,3,4))

// 49. Write a function that returns the largest number in an array.

function larg(...numbers){
    len = numbers.length
    max = numbers[0]
    for(i = 0; i<len;i++){
        if (numbers[i]>max){
            max = numbers[i]
        }
    }
    return max
}

console.log(larg(1,2,3,4,5))


// 50. Create a higher-order function that accepts another function as an argument and executes it.

function opp(o,a,b){
    return o(a,b)
}

function add(a,b){
    return a+b
}

console.log(opp(add,2,3))
