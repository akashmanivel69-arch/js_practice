// Topic 4: Loops (31–40)
// 31. Print numbers from 1 to 100.

let i = 1;
while (i<101) {
    console.log(i);
    i++;
}

// 32. Print all even numbers between 1 and 100.

i = 1;
while (i<101){
    if (i%2==0){
        console.log(i);    
    }
    i++;
}

// 33. Print all odd numbers between 1 and 100.

i = 1;
while (i<101){
    if (i%2!=0){
        console.log(i);    
    }
    i++;
}

// 34. Calculate the sum of the first \(n\) natural numbers.

n = 10

console.log((n*(n+1))/2)

sum = 0
for(i=0;i<=n;i++){
    sum+=i
}

console.log(sum)

// 35. Print the multiplication table of a given number.

let table = 3

for(i=1;i<11;i++){
    console.log(i+" X "+table+" = "+(i*table))
}

// 36. Calculate the factorial of a number.

fact = 1

for(i=5;i>0;i--){
    fact *=i
}

console.log(fact)

// 37. Reverse the digits of an integer.

let num = 2345;
let rev_num = 0;

for (let i = 0; i < 4; i++) {
    let digit = num % 10;
    rev_num = rev_num * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(rev_num); // 5432

// 38. Count the number of digits in an integer.

let count = 0;
num = 123456789;

num = Math.abs(num);

if(num===0){
    num = num;
} else{
    while(num>0){
        num = Math.floor(num/10);
        count++;
    }
}

console.log(count)

// 39. Check whether a number is prime.

num = 10;
let is_true = true;

if (num <2){
    is_true = false
} else{
        for(i=2;i<num;i++){
            if (num%i==0){
                is_true = false;
                break;
            }
        } 
}

if (is_true){
    console.log("Not Prime")
}else{
    console.log("Prime")
}

// 40. Print the Fibonacci sequence for a given number of terms.

let a = 0, b = 1;
for(i = 0; i<10;i++){
    console.log(a)
    let next = a+b;
    a = b;
    b = next;
}