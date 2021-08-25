

const bill_calculator = document.forms[0];
const bill_generator = document.forms[1];

// Lets grab all the Elements Required : 

function calAmount(event) {
   
   
    event.preventDefault();

    let bill_amount = parseFloat(document.getElementById('bill').value);

    let tip_amount = parseFloat(document.getElementById('tip').value);

    let total_tip_amount = Math.round((bill_amount/100) * tip_amount);


    let split = parseInt(document.getElementById('split').value);


    // Now Lets grab the elements of the Bill generator : 
     
    document.getElementById('total_bill').value = Math.round(bill_amount + total_tip_amount);
    document.getElementById('total_tip').value = Math.round( total_tip_amount);
    document.getElementById('total_per_person').value = Math.round((bill_amount + total_tip_amount)/split);
  
}

