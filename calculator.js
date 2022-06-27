/*function calculator(){
    document.getElementById("fNum").innerHTML+=`<li class="fNum" ${fNum}>`
    console.log("First Number");
    //1. get the two values from the prompt.
    //2. do the four operations
    //3. display results in the results zone.
}*/

function Num1(){
let fnum = prompt('Enter the first number ');
    display(fnum);
}
function Num2(){
let snum = prompt('Enter the second number ');
    display(snum);
}

function display(Num1){
    document.getElementById("fNumber").innerHTML+=`<li class="fNumber" >${Num1}</li>`
}
function display(Num2){
    document.getElementById("sNumber").innerHTML+=`<li class="sNumber" >${Num2}</li>`
}

function calc(){
        Num1 = document.getElementById("fnum");
        Num2 = document.getElementById("snum");
        document.getElementById("mul").innerHTML = Num1 * Num2;
        document.getElementById("sum").innerHTML = Num1 + Num2;
        document.getElementById("div").innerHTML = Num1 / Num2;
        document.getElementById("sub").innerHTML = Num1 - Num2;
}



/*
function Num1(){
    let firstNumber=prompt("Enter FIrst Number");
    display(firstNumber);
}

function Num2(){
    let secondNumber=prompt("Enter Second Number");
    display(secondNumber);
}
*/

/*
const num1 = ${funm}

//add two numbers
let sum = num1 + num2;
let div = num1 / num2;
const sub = num1 - num2;
const mul = num1 * num2;

// display the sum
//console.log(`The sum of ${num1} and ${num2} = ${sum}`);
//console.log(`The division of ${num1} and ${num2} = ${div}`);
//console.log(`The subtraction of ${num1} and ${num2} = ${sub}`);
//console.log(`The multiplication of ${num1} and ${num2} = ${mul}`);
*/
