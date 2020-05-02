
var _ = require('lodash');
const arr = [1,2,3,4,5,6,8]
console.log("withiut", _.without(arr, 1));
var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2");
var body = document.getElementById("body");
var h3 = document.querySelector("h3");

function Gradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    +", "
    +color2.value
    +")";
    h3.textContent ="copy : "+ body.style.background + ";";
}

color1.addEventListener("input", Gradient);
color2.addEventListener("input", Gradient);

