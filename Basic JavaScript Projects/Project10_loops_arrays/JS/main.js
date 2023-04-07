//example of a while loop  |  lets count count down from 20!
function Get_Loop() {
    var nums = "";
    var XX = 20;
    while (XX > 0) {
        nums += "<br>" + XX;
        XX--;   //'++' increment add one '--' increment sub one
    }
    document.getElementById("Loop").innerHTML = nums;
}

//length property example | built-in prop. of arrays,strs, & other objs. tht rep a collection of elements, returns # of elmts in clctn.
var ray = [5, 6, 7, 8, 9, 10];
var how_Long = ray.length;
console.log(how_Long);      //will output 6
//or we can do
var words = "Gonna use length, look out!";
var stretch = words.length;
console.log(stretch);    //will output 27

//'for' loop + .length example using a list
var Boards = ["Surfboard", "Kiteboard", "Bodyboard", "Skateboard", "Sandboard", "Paddleboard", "Snowboard", "Wakeboard", "Kneeboard", "Casterboard"];
var info = "";
var B;
function for_Loop() {
    for (B = 0; B < Boards.length; B++) {
        info += Boards[B] + "<br>";
    }
    document.getElementById("list_of_Boards").innerHTML = info;
}
//DOCUMENT.GETELEMENTBYID().INNERHTML ASSIGNMENT
function baby_Goats() {
    var goat_pic = [];
    goat_pic[0] = "posing";
    goat_pic[1] = "playing";
    goat_pic[2] = "running";
    goat_pic[3] = "sleeping";
    goat_pic[4] = "eating";
    goat_pic[5] = "fighting";
    document.getElementById("Goat").innerHTML = "You can see in this picture the baby goat is " + goat_pic[0] + ".";
}

//using the keyword "const"  |  'jelly_Bean' will be constant and not change
function con_func() {
    const jelly_Bean = { type:"jelly belly ", flavor: "cherry ", class: "common ", color: "bright red " };
    jelly_Bean.color = "dark red ";
    jelly_Bean.smell = "fruity ";
    document.getElementById("Constant").innerHTML = "The smell of the " + jelly_Bean.flavor + jelly_Bean.type + "is " + jelly_Bean.smell;
}

//using the 'let' keyword + creating an obj. with properties and methods aka OBJECT ASSIGNMENT
let drink = {
    liquid: "Plain Coffee",
    color: "dark brown ",
    smell: "earthy ",
    taste: "bitter and bold ",
    report: function () {
        return "My drink is a " + this.taste + this.color + this.smell + this.liquid + ".";
    }
};
document.getElementById("Drink_obj").innerHTML = drink.report();

//return statement challenge  |  returns a value from a function & makes funct more useful by returning val to code that called the funct.
//after 'return' executed, no more code within that function is performed as it has then exited the function
function multNums(x, y) {
    return x * y;
}
var total = multNums(33, 16);
console.log(total);     //console.log output will be 528

//'break' and 'continue' statements challenge  |  'break' used to teminate loop or switch statement - causes immediate exit
//'continue' statement used to skip an iteration of loop and moves onto the next one
var V;
for (V = 0; V <= 20; V++) {
    if (V === 15) {
        break;      //basically like calling a specific STOP | it will count from 0 to 14 in a loop and then stop
    }
    console.log(V);
}
for (let GG = 1; GG <= 20; GG++) {
    if (GG % 2 === 0) {     //this will print odd numbers and skip even numbers. neato!
        continue;
    }
    console.log(GG);
}

