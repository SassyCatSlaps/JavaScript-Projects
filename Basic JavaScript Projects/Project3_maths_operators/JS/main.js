//testing out math operators using addition, subtraction, multiplication and division
function more_Math() {
    var some_Math = (2 + 2) * 10 / 2 - 5;
    document.getElementById("result1").innerHTML =
    "2 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + some_Math;
}

//math object method example
function calculateSquareRoot() {
    var number = document.getElementById("number").value;
    var new_result = Math.sqrt(number);  //i chose to use math.sqrt to get the squareroot of a number
    document.getElementById("result2").innerHTML =
    "The square root of " + number + " is " + new_result;
}
//lets make random numbers happen!
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    return randomNumber;
}

//using '++' and '--'
var Z = 10;
Z++;
document.write("The value of Z is " + Z + ". ");

var AA = 20;
AA--;
document.write(" The value of AA is " + AA + ".");