document.body.style.background = "darkgray";
// function
function multiplay(p1, p2) {
    return p1 *  p2;
}
let result = multiplay (4, 6);
document.getElementById("function").innerHTML = "the multiplication of all the values is : " + result;
// function return
let c = addition(4, 5);
document.getElementById("returnfuction").innerHTML = c;

function addition(a,b) {
return "the return of two values is : " + a + b;
}
// invoke 
function celcius(f) {
    // formulla
    return (5/9) * (f-32);
}
let value = celcius (77);
// toCelsius(77);
// Pehle 77 - 32 = 45
// Phir 45 * 5/9 = 25
document.getElementById("invoke").innerHTML = "convter celcius to forenheight is : " + value;

// local variables 
let carname = "parado";
let text = "car : " + typeof carname + "  " + carname;
document.getElementById("localVariable").innerHTML = text;