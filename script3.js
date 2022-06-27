//create a function to prompt for outside the script information
function register(){
    let productName =prompt("Enter product Name");
    display(productName);
}


//create a function to display that prompt information on the HTML page and don't replace,  that is using concatination which is the +=  after the .innerHTML
function display(pName){
    document.getElementById("products").innerHTML+=`<li class="products" >${pName}</li>`                                                                
}

