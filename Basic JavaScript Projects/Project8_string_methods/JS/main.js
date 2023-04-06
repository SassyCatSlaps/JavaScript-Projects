
//concat() method
function a_Sentence() {
    var p_1 = "This is ";
    var p_2 = "a ";
    var p_3 = "full sentence ";
    var p_4 = "strung together ";
    var p_5 = "with cyber glue.";
    var complete_p = p_1.concat(p_2, p_3, p_4, p_5);
    document.getElementById("Concatenate").innerHTML = complete_p;
}

//slice method
function slicing() {
    var Sen_1 = "It always snows on days I need to drive far.";
    var sec_1 = Sen_1.slice(10, 15);  //section clipped by counting the spaces and characters leading up to it and selecting the range it resides in
    document.getElementById("Slice").innerHTML = sec_1;
}

//to uppercase method example
//returns new string with letter characters from og string in all uppercase | og string not modified
var Words_classic = "Hi there cutie!";
var uppercaseWords = Words_classic.toUpperCase();
console.log(uppercaseWords);  //will output HI THERE CUTIE! in console.log

//search method example
//searches string for specified substring and returns the index of the 1st occurance of that substring | will return -1 if substring not found
var index = Words_classic.search("cutie");
console.log(index);     //will output 10

//number methods | utilizes toString method
function str_Mthd() {
    var NN = 1568;
    document.getElementById("Nums_to_str").innerHTML = NN.toString();
}

//toPrecision() METHOD example
function preciso_el_procedimiento() {
    var ZZ = 898989.747474541255;
    document.getElementById("Precise").innerHTML = ZZ.toPrecision(8);
}

//toFixed() method example | formats a # with a specified # of digits after the decimal point, returns a string rep of the formatted #
var heaps_Nums = 457.125483
var fix_it = heaps_Nums.toFixed(3)
console.log(fix_it);

//valueOF() method example | returns the primitive val of a specific obj | called automatically when obj is used in context where a primitive val is expected
var some_nums = new Number("99");
var num_value = some_nums.valueOf();
console.log(num_value);