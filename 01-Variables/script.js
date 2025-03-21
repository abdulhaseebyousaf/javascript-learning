document.body.style.background = "darkgray";
// using var 
var e = 12;
var f = 12;
var g = e + f;
document.getElementById("variable").innerHTML = "the vale of g is : " + g;
x = 5;
y = 10;
z = x + y;
document.getElementById("Variables").innerHTML =
"The value of z is: " + z;
// for const
const a = 20;
const b = 15;
const c = a + b;
document.getElementById("variableConst").innerHTML = "the value of c : " + c;
// let const
const price1 = 80;
const price2 = 180;
let total =price1 + price2 ;
document.getElementById("priceConst").innerHTML = "the total price of car toy is  :" + total ;
// declaring variable
let universityName = "COMSATS";
document.getElementById("declaringvariable").innerHTML ="my University name is " + universityName;
// string 
const pi = 3.14;
let person = "Abdul-Haseeb";
let place = 'Abbottabad';
document.getElementById("string").innerHTML = "the value of pi is : " + pi + "<br>" + "my name is : " + person  +"<br>" + "live in : " + place;
// undefined
let car;
document.getElementById("undefined").innerHTML = car;
// Re-decleared
var carName = "civic";
var carName;
document.getElementById("ReDeclared").innerHTML = carName;
// arthmetics
let myname = "Haseeb" + " " + "Yousaf";
document.getElementById("arthmetic").innerHTML = "my name is : " + myname;
// second exp
let numbers = 5 + 10 + "3";
document.getElementById("arthmeticnumber").innerHTML = "the sum of all the value is : " + numbers;