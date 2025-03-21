document.body.style.background = "darkgray";
let xa = 12;
let y = 32;
let z = xa + y;

// Assinment Operator =
document.getElementById("Assinment").innerHTML = "the sum of x + y is = " + z;
// Addition Operator
let pric1 = 1200;
let pric2 = 100;
let pric =  pric1 + pric2;
document.getElementById("addittion").innerHTML = "the sum of all the prices is : " + pric;
// multiplication opertors
let num1 = 15;
let num2 = 12;
let numb = num1 * num2;
document.getElementById("multiplication").innerHTML ="the multiplication of all the value is : " + numb;
// arithmetic Operators
let h = 3;
let i = (100 + 50) * 3;
document.getElementById("arithmetic").innerHTML = "the value of arthimetic is : " + i;
// assignment Opertors
var car1 = 1200;
car1 += 120;
document.getElementById("assignment").innerHTML = "the product of new number is : " + car1;
//string Comparsion 
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("string").innerHTML = "the result of string comparsion is : " + result;
// string condition
let val1 = "25";
let val2 = "20";
let values = val1 < val2;
document.getElementById("secondString").innerHTML = "is 20 less than 25 ? : " + values;
// string additions 
let name1 = "what a very ";
name1 += "nice day";
document.getElementById("stringAddition").innerHTML = name1;
// strings and numbers
let r = 12 + 12;
let q = "5" + 5;
let f = "Hello";
document.getElementById("stringNumber").innerHTML = r + "<br>" + q  + "<br>" + f;

// addition arthmetic
let aa =  15;
let bb = 12;
let cc =  aa + bb;
document.getElementById("add").innerHTML = "the sum of all the value is : " + cc;
// another example
let d = 5;
let e = (5 + 15) * d;
document.getElementById("addition").innerHTML = "sum and multiplay the values is : " + e;
// subrtaction Operators
let price11 = 1200;
let price22 = 100;
let pricess = price11 - price22 ;
document.getElementById("subtract").innerHTML = "subtract the value is : " + pricess;
// MUltiplication OPerators
let roll1 = 10;
let roll2 = 2;
let rollno = roll1 * roll2;
document.getElementById("multiplay").innerHTML = "multiplay the value is : " + rollno;
// Dividing 
let value1 = 25;
let value2 = 5;
let valu = value1 / value2;
document.getElementById("divide").innerHTML = "divide the value is : " + valu; 
// incrementing
 let boy1 = 9;
 boy1++;
 let boy2 = boy1;
 document.getElementById("increment").innerHTML = "incrementing the value is : " + boy2;
// decrementing
let number1 = 50;
number1 --;
let number2 = number1;
document.getElementById("decrement").innerHTML ="decrement the vale is : " + number2;
// exponentiation
let multiplayy = 5;
document.getElementById("exponentiation").innerHTML = "the exponentiation value of 5 is : " + multiplayy ** 2;
// Operator Precedence
document.getElementById("Operators").innerHTML = "the value of Operator Precedence is : " + (100 + 50) * 3;
// reminder
let dividenum1 = 5;
let dividenum2 = 2;
let dividenum = dividenum1  % dividenum2;
document.getElementById("reminder").innerHTML =" the value in reminder is : " + dividenum;


// Simple  Operator
const x = 10;
document.getElementById("simpleOperator").innerHTML = "Value of x is : " + x;

// second example of simple opertaor 
let a = 12;
let b = 10;
let c = a - b;
document.getElementById("secondOperator").innerHTML = "the value of c is : " + c;

// addition operator
let text = "Abdul-";
text += "Haseeb";
document.getElementById("additionOperator").innerHTML ="my name is " + text;

// second example 
let number = 12;
number += 15;
document.getElementById("addition").innerHTML = "the value of number is : " + number;

// subrtaction
let n1 = 100;
let n2 = 23;
let n3 = n1 - n2;
document.getElementById("subtraction").innerHTML = "the addition value of number is : " + n3;

// secondExample
let num = 55;
num -= 10;
document.getElementById("secondsub").innerHTML = "the subtration value of number is : " + num;

// *=
let mul1 = 12;
let mul2 = 10;
let multiplay = mul1 * mul2;
document.getElementById("multiplay").innerHTML = "the multiplication of two number is : " + multiplay ;

// second example
let multi = 10
multi *= 2;
document.getElementById("mul").innerHTML = "the multiplay of two values is : " + multi;

// Exponentiation operators
let price1 = 10;
let price2 = 2;
let price = price1 ** price2;
document.getElementById("Exponentiation").innerHTML = "the total price is : " + price;

// second example
let value = 3;
value **= 3;
document.getElementById("exponentiation").innerHTML = "the expnentiation value is : " + value;

// division oprator
let numbers = 30;
numbers /= 3;
document.getElementById("divison").innerHTML = "the division of the two value is : " + numbers;

// right shift Assignment
let shift = -100;
shift <<= 5;
document.getElementById("rightshift").innerHTML = "Value of shift is : " + shift;
// left shift Assignment
let right = 100;
 right >>= 5;
document.getElementById("leftshift").innerHTML = "Value of x is : " + right;

// bitwise Operators
let and = 100;
and &= 5;
document.getElementById("and").innerHTML = "the value of and is : " + and;

// the or operator

let or = 100;
or |= 5;
document.getElementById("or").innerHTML = "the value of or is : " + or;

// the XOR Operator
let xor = 10;
xor |= 5;
document.getElementById("xor").innerHTML = "the value of xor is : " + xor;

// logical andand Operators
let andand = 10;
andand &&= 5;
document.getElementById("andand").innerHTML = "the value of andand is : " + and;

// logical oror Operator
let oror = undefined;
oror  ||= 5;
document.getElementById("oror").innerHTML = "the value of oror is : " + oror;

// nullish
let nullish;
document.getElementById("nullish").innerHTML = nullish ??= 5; 