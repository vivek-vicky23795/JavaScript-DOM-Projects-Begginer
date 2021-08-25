// The Javascript file : 


// console.log(number);

// function decrease(number) {
//     alert(" Button decrease working");
// }



// function reset(number) {
//     alert(" Button reset working");
// } 


var number = 0;

function increase() { 
    
    number++;

    document.getElementById("display").innerHTML = number;

    if (number >= 1) {
        document.getElementById("display").style.color = "green";
    }
    
}  


function decrease() { 

    number--;

    document.getElementById("display").innerHTML = number; //

    if (number < 0) {
        document.getElementById("display").style.color = "red";
    }
}

function reset() { 

    number = 0;

    document.getElementById("display").innerHTML = number; //

    if (number === 0) {
        document.getElementById("display").style.color = "black";
    }

}


