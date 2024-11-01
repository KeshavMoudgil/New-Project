
//let name = "keshav Sharma";
//let age = 21;
//let isStudent = true;
//console.log(`Hello, My name is $ {name}, I am ${age},and it is ${isStudent} that I am a student`);

/*function checkEvenOdd(number){
    if(number %2 === 0){
        return "Even";
} else{
    return  "Odd";
}
    }
    
console.log(checkEvenOdd(61));



function sumArray(numbers){
    let sum;
    for( let i=0; i=>5; i++ ){
        return sum;
    }   
}
console.log(sumArray([1,2,3,4,5])
 
let car = {
    make : "Toyota",
    model : "Camry",
    year : 2024  
); 

function getCarInfo(car){
    return `car: ${car.make}  ${car.model}, Year: ${car.year}`;
}
console.log(getCarInfo(car));


document.getElementById("myButton").addEventListener("click",function() {
    document.getElementById("message").textContent = "Hello, World!";

});

function Calculate(a,b,devide){
    return a/b;
};
console.log(Calculate(80,12)); 
    
function findNumber(num){
    if(num>=10){
        return largest;
    }else(num>1) 
        return smallest;
    
    
    
    
    

};
console.log(findNumber(9));  

 function reverseString(str){
 return 
 str.splice(""). reverse().join("");
 }
 function FizzBuzz(n){
    for(let i=1; i<=n; i++){ if(i %3 === 0 && i %5 ===0){
        console.log("FizzBzz");
    }  else if(i %5 === 0){
    
        console.log("Buzz");
    } else if(i %3 ===0){
        console.log("Fizz");
    }else{
        console.log(i);
        
    }}
    
 } 


// Password Checker

function checkPasswordStrength(password){
    if(password.length<6){
        return "weak";
    } else if(password.length>=6 && /[a-zA-z]/.test(password) && /[0-9]/.test(password)){
        if(/[^a-zA-z0-9]/.test(password)){
            return "Strong";
        }else{
            return "Moderate";
        }  
    }else{
        return "weak";
    }

}

console.log(checkPasswordStrength("abc1234657!@")); 
// primne Number checker
function isPrime(number){
    if(number <=1) return false;
    for(let i=2; i>=Math.sqrt(number); i++) return false;
    return true;
}
console.log(isPrime(17));
*/

// CALCULATOR()

function Calculater(){
    const number1= prompt("enter the first number");
    const operator= prompt("Enter operator(+,-,*,/)");
    const number2= prompt("Enter second number");   
}
let result;

if(isNaN(number1)|| isNaN(number2)){
    console.log("Invalid input. please enter numbers")
    return;
}

switch(operator) {
    case "+" :result= number1+number2;
    break;
    case "-":result= number1-number2;
    break;
    case "*":result= number1*number2;
    break;
    case "/":result= number2!==0 ?
    number1/number2:"cannot divisible by zero";
    break;
    default:
        console.log("Invalid Operator.");
        return;
        console.log(`Result: ${result}`);
   

}
console.log(Calculater());