// The DOM Manipulation using the javascript : 


// Step1 : Lets add the text dynamically into Our DOM : grab the div element with id note : 

document.getElementById("note").textContent = "This is Pure DOM Manipulation";




// Step 2 : Lets grab the circle first 

let circle = document.getElementById("circle");
console.log(circle); //


// step 3 :  Now Add event listeners methods : addEventListener(event,callback)

circle.addEventListener("click",changeColor);


// Step 4 : Now Define a Call back function : event handler callback.

function changeColor() {

    // To generate random color we are using Math module : 

    // let randomColor = Math.random() * 16777216  // this gives us the random value with decimal number 

    // let randomColor = Math.floor(Math.random() * 16777216) // this gives us random value  but we want it in hexadecimal format

    // To convert number into hexadecimal we have method : .toString(16) 

    let randomColor = Math.floor(Math.random() * 16777216).toString(16);

    // step 5 : access our circle : 

    circle.style.backgroundColor = `#${randomColor}`;

    hexColor = document.getElementById("sp1");

    hexColor.style.color = `#${randomColor}`;
    
    hexColor.textContent =  ` Hex Color Value : #${randomColor}`;
    

} 

