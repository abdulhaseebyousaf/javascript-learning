document.body.style.background = "darkgray";

// number and string
let x = 16 + " " + "haseeb";
document.getElementById("string").innerHTML = "number and string : " + x;

// example two
let y = 16 + 20 + " " + "haseeb";
document.getElementById("secondString").innerHTML = "adding number and string is : " + y;

// example three 
let car = "toyota";
let jeep = "parado";
document.getElementById("thirdstring").innerHTML = "my first car is : " + car + "<br>" + "my second car is : " + jeep 

// number   
let realnumber = 12;
let decimalnumber = 12.3;
document.getElementById("number").innerHTML = "real number is : " + realnumber + " " + "<br>" + "decimal number is : " +  decimalnumber;

// exponential notation
let a = 124e5;
let b = 124e-5;
document.getElementById("exponential").innerHTML = "to the power of : " + a + "<br>" +  "to the power of in subtract : " + b;

// bigint
let big =
BigInt("123456789012345678901234567890");
document.getElementById("BigInt").innerHTML = big; 

// booleans
let e = 5;
let f = 5;
let g = 4;
document.getElementById("Booleans").innerHTML = "if the value are same  show : " + (e == f) + "<br>" + "if the value is not same show : " + (e == g);

// objects 
const person = {
    firstName : "Abdul-",
    lastName : "Haseeb",
    age : 20,
};
document.getElementById("objects").innerHTML = person.firstName + person.lastName + " " + "is" + " " + person.age + " " + "years old." ;

// typeof OPerator
document.getElementById("typeof").innerHTML =  "it is a typeof " + typeof " " + "<br>" + "it is a typeof " + typeof "haseeb" + "<br>" + "it is a typeof " + typeof "haseeb yousaf";

// arrays
const cars = ["toyota","Ford","BMW"];
document.getElementById("cars").innerHTML = cars[0];

// empaty 
let names = "";
document.getElementById("empty").innerHTML = "the value is : " + names + "<br>" + "the type is : " + typeof names;

// undefined
let area;
document.getElementById("undefined").innerHTML = area + "<br>" + typeof area;