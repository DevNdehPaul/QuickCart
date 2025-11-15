//  Declaring variables
let total = document.getElementById("total");
let total1 = document.getElementById("total1");
let quant = document.getElementById("quant");
let price = document.getElementById("price");

document.addEventListener("DOMContentLoaded", function () {
let value = localStorage.getItem("value");
quant.textContent = value;
value = parseFloat(value);
let value1 = parseFloat(price.textContent);
mult = value*value1;
mult = mult.toFixed(1);
total.textContent = mult;
total1.textContent = mult;
localStorage.setItem("mult", mult);
});



paragraph.addEventListener("click", function () {
    localStorage.setItem("Total", grandTotal);
    localStorage.setItem("SubTotal1", subTotal1);
    localStorage.setItem("Subtotal2", subTotal2);

});
