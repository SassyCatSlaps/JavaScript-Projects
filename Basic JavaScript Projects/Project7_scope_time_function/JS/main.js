//if statement
if (1 < 2) {
    document.write("<br>" + "left # is smaller than # on right" + "<br>");
}

// date.get & hours() method returns the hour in the date 0hrs - 23hrs e.g. 18 = 6:00pm, 12 = noon
//if it is before 6pm diplay "how ya doin?", if not, display nothing until another condition is given
//method statement
function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greet").innerHTML = "How yous' doin today?";
    }
}

//if i put 'local var' first then it will only output that result and not the 'global var' result so i switched them so everything now shows

//example of a global variable
var V = 99;
function mult_nums_A() {
    document.write(5 * V + "<br>");
}
function mult_nums_B() {
    document.write(V * 2 + "<br>");
}
mult_nums_A();
mult_nums_B();

//example of a local variable
function sub_Nums_X() {
    var X = 50;
    document.write(10 - X + "<br>");
}
function sub_Nums_Y() {
    document.write(X - 20);
}
sub_Nums_X();
sub_Nums_Y();

//else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 24) {
        Rent = "You are old enough to rent a car.";
    }
    else {
        Rent = "You are not old enough to rent a car!";
    }
    document.getElementById("How_old?").innerHTML = Rent;
}

//'else if' statements
function Clock_function() {
    var Clock = new Date().getHours();
    var Answer;
    if (Clock < 12 == Clock > 0) {
        Answer = "Bong Bong, Greet the Morning! Praise the Sun!";
    }
    else if (Clock >= 12 == Clock < 18) {
        Answer = "Bong Bong, Gutten Nachmittag!";
    }
    else {
        Answer = "It is the night, scatter and hide!";
    }
    document.getElementById("TOD").innerHTML = Answer;
}

//purposeful mistake that can be debugged with console.log
//console log will output:
    //Uncaught ReferenceError: X is not defined
        //at sub_Nums_Y(main.js: 7: 20)
        //at main.js: 10: 1
function add_Nums_1() {
    var XX = 10;
    console.log(20 + XX);
}
function add_Nums_2() {
    console.log(XX + 200);
}
add_Nums_1();
add_Nums_2();
