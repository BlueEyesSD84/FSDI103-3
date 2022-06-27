//parameter, to get data or informaiton from outside the script
let x=0;
//<-----global varaiable------>
let greet = function(userName){
    x=++;
    return `Hello ${userName} id: ${x}`;
//create the function
//<-------------Local Varable ----------------->
//This varable is only avail in the function
function greet(userName)
    return `Hello ${userName} id: ${x}`
}



console.log(x);

//call the function  
document.write(`<p>${greet("Jimmy")} </p>`);
document.write(`<p>${greet("James")} </p>`);
document.write(`<p>${greet("Samantha")} </p>`);
document.write(`<p>${greet("Mark")} </p>`);
document.write(`<p>${greet("Brett")} </p>`);

