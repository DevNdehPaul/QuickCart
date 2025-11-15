let checkbox = document.getElementById("check");

document.addEventListener("DOMContentLoaded", function () {
 let mult = localStorage.getItem("mult");
 checkbox.textContent = mult;
});
