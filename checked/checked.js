const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!";
    }
    else{
        subResult.textContent = "You aren't subscribed!";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa.";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent ="You're paying with Mastercard.";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent ="You're paying with payPal.";
    }
    else{
        paymentResult.textContent ="You must select a payment type!";
    }
}