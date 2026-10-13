// Topic 2: Operators and type conversion (11–20)
// 11. Build a calculator that performs addition, subtraction, multiplication, and division.

function cal(opp,a,b){


    function add(a,b){
        return a+b;
    }

    function sub(a,b){
        return a-b;
    }


    function mul(a,b){
        return a*b;
    }


    function div(a,b){
        if (b != 0){
            return a/b;
        }
        else{
            console.log("b can't be zero")
        }
    }
    if (opp == "add") return add(a,b)
    if (opp == "sub") return sub(a,b)
    if (opp == "mul") return mul(a,b)
    if (opp == "div") return div(a,b)
}

console.log(cal("add",3,4))


// 12. Calculate the remainder when one number is divided by another.

let a = 10, b = 5;
console.log(a%b)

// 13. Convert minutes into hours and remaining minutes.

let minites = 72;
let hour = Math.floor(minites/60);
let rem_minites = minites % 60
console.log(hour,'.',rem_minites) 


// 14. Calculate the total cost after applying a percentage discount.

let amt =1000, dis = 10;

console.log(amt - (amt*(dis/100)));

// 15. Calculate simple interest using principal, rate, and time.

let p = 1000;
let n = 2;
let r = 2;

let simple_intrest = (p*n*r)/100;
console.log(simple_intrest)

// 16. Compare two values using == and === and explain the results.

let g = 12, h="12";

console.log(g==h)
console.log(g===h)

// 17. Compare null and undefined using different comparison operators.

// done

// 18. Convert a numeric string into a number using Number() and parseInt().



// 19. Use logical operators to check whether a user meets two eligibility conditions.

let name = 'akash', password = "akash@1437"

if (name == 'akash'){
    if (password == 'akash@1437'){
        console.log("Done")
    }
}
// 20. Use the ternary operator to determine whether a person can access a service based on age.

let age = 23

let is_eligible = age > 18 ? "eligible" : "not";

console.log(is_eligible)
