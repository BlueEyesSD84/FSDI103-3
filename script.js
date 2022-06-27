document.write("This is a test")

//array  starts position - 0 not posistion 1
let myArray =[1,2,true,"Bret"];

//can 'reassign 
//myArray[3]=5;
console.log(myArray[3]);

//create 2nd array to display different item, i.e. string "what is the meaning of life"
let myArray2=["what is the meaning of life?",42,true];

console.log(myArray2[0]);

//arrays are a collection of elements
//have to use a 'For' loop to access multiple different items

//Array declaration

const numbers =[10,20,30,40,50];
const months =["Jan","Feb","Mar","Apr","May","Jun"];  //REMEMBER STRINGS NEED QUOTES!!!!!


//Methods for arrays

//add numbers to the end of the array
numbers.push(60,70,80);
//add numbers to before the array
numbers.unshift(-30,-20,-10,0)
//to remove the last element in the array
months.pop();
//to remove the first item of the array
months.shift();
//to display a specific position,  need a start posistion and how many elements you want to remove
months.splice(1,1);

//display the array on the console
console.table(numbers);
console.log(months);

//access to the elements in an array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Travel the array using the 'For Loop'     need a start position and a stopping condition(in this array its .lenght, once it has traveled the full array, then stop)
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//best way to use JS is to use 'Functions'2 different types, scope of variables are working, desplay items on HTML from JS, Add buttions to trigger a function
