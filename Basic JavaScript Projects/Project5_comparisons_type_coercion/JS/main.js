//a lot of this is smooshed together on the webpage but i'm ok with that
//lets see some maths in the consol!

console.log(36 + 33);
console.log(2659004 * 2);
console.log(202 < 201);

//AND + OR operator (True/False) assignment
document.write(5 >= 4 && 20 < 22); //output true
document.write(10 < 9 && 9 == 10);  //output false
document.write(30 < 30 || 50 == 50);  //output true
document.write(3 > 10 || 100 < 99);  //output false

//Not operator  |  first function = False  |  second function = True
function not_Function() {
    document.getElementById("Nope").innerHTML = !(100 > 99);
}
function not_Not_function() {
    document.getElementById("Yuppers").innerHTML = !(99 > 100);
}

//a. return T matching dt & val  |  b. Return F by writing a diff dt & diff val  |  c. return F by writting diff dt but same val  |  d. return F by writting same dt but a diff val
BB = "High Score";
CC = "High Score";
DD = "100"
FF = 100;
EE = 999;
document.write(BB === BB);
document.write(DD === CC);
document.write(DD === FF);
document.write(FF === EE);

//Write an expression combining a string and a number | i'm choosing to have this show in the consol.log vs using document.gEBI or doc.wrt | added just incase I missed it the first time
var num = 111;
var str = "The number here is going to show: ";
var result = str + num;
console.log(result);

//using '==' operator to output true and false
document.write(20 * 5 == 100);
document.write(12 - 7 == 6);

//the real boolean is standing up
document.write(100 > 101);
document.write(3.50 < 4);

//example of 'typeof' operator
var viks_Variable = "Cat"
document.write(" The type of viks_Variable is " + typeof viks_Variable + ".");

//type coercion  |  comented my other work so i could better see my results
//document.write("fifty" / 5);
//making a is not a number display a boolean answer
function vik_Function() {
    document.getElementById("Word_Test").innerHTML = 0 / 0;
}

//NaN challenge
//true
var answer = isNaN("Cat");

//false
var answer2 = isNaN(10);

document.write("The Boolean output is: " + answer + "   " + answer2 + ".    ");

//display infinity  |  FIXED!!!
var Z = 1.7976931348623157E308;
var XX = -1.7976931348623157E308;
//var VV = Number.POSITIVE_INFINITY;
//var ZZ = Number.NEGATIVE_INFINITY;
document.getElementById("infinity").innerHTML = Z * 2;
document.getElementById("negInfinity").innerHTML = XX * 2;



