//uses input from browser will be used to determine output
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 24) ? "You are too smol" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//ternary operators challenge

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote" : "You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " in this election cycle.";
}

//new & this keyword assignment
function Cat(Breed, Age, Hair, Color) {
    this.Cat_Breed = Breed;
    this.Cat_Age = Age;
    this.Cat_Hair = Hair;
    this.Cat_Color = Color;
} /* 'Cat()' is an object constructor | 'new' kw used to create objs of the cat function | 'this' kw gets values of newly created cat obj with the 'new' kw e.g. a placeholder */
var Rat = new Cat("Asian", 5, "Short", "Brownish-black");
var Anjali = new Cat("Balinese", 3, "Long", "Colorpoint");
var Malai = new Cat("Khao Manee", 1, "Short", "Solid White");
function newFunction() {
    document.getElementById("New_and_This").innerHTML =
        "Anjali the cat is a " + Anjali.Cat_Color + "-colored " + Anjali.Cat_Breed +
        " and is " + Anjali.Cat_Age + " years old.";
}

//giving nested functions a crack
function by_10_Function() {
    document.getElementById("Nested_Function").innerHTML = Counter();
    function Counter() {
        var Starting_point = 10;
        function add_Ten() { Starting_point += 10; }
        add_Ten();
        return Starting_point;
    }
}