//code for 'switch' example | using 'case' and 'break;
function Flav_func() {
    var flavor_Output;
    var Flavors = document.getElementById("flavor_Input").value;
    var Flavors_string = " is a tasty flavor!";
    switch (Flavors) {
        case "Chocolate":
            flavor_Output = "Chocolate" + Flavors_string;
            break;
        case "Mint":
            flavor_Output = "Mint" + Flavors_string;
            break;
        case "Cookie Dough":
            flavor_Output = "Cookie Dough" + Flavors_string;
            break;
        case "Green Tea":
            flavor_Output = "Green Tea" + Flavors_string;
            break;
        case "Vanilla":
            flavor_Output = "Vanilla" + Flavors_string;
            break;
        case "Birthday Cake":
            flavor_Output = "Birthday Cake" + Flavors_string;
            break;
        case "Pumpkin":
            flavor_Output = "Pumpkin" + Flavors_string;
            break;
        case "Pecan":
            flavor_Output = "Pecan" + Flavors_string;
            break;
        case "Coffee":
            flavor_Output = "Coffee" + Flavors_string;
            break;
        case "Mango":
            flavor_Output = "Mango" + Flavors_string;
            break;
        default:
            flavor_Output = "Please enter flavor exactly as written on the list provided.";
    }
    document.getElementById("Output").innerHTML = flavor_Output;
}

//an example of getElementByClassName
function word_gen_Func() {
    var ZZ = document.getElementsByClassName("Action");
    ZZ[1].innerHTML = "Well well well, that aged like fine milk.";
}

//canvas example
var canvas = document.getElementById("canvas_2");   //needed id b/c i have 2 canvas elements
var context = canvas.getContext("2d");   //getting canvas context inorder to draw on it
//drawing a shape
context.fillStyle = "green";    //fillstyle sets the color of the shape
context.fillRect(50, 40, 200, 100);   //fillreact is the method that is actually "drawing" the lines/corners of the rectangle
//first 2 #'s = top left corner draw start  | width = 200px height = 100px
//result should be a canvas element with green rectangle with pink border around it.


//making a gradient canvas  |  takes in the x,y starting and end points of a gradient
var canvas = document.getElementById("G_canvas");
var ctx = canvas.getContext("2d");

//after var call make linear gradient
var gradient = ctx.createLinearGradient(100, 50, 200, 100);  //playing with these #s drastically changes look of gradient - super pretty!
gradient.addColorStop(0, "pink");
gradient.addColorStop(1, "purple");

ctx.fillStyle = gradient;   //gradient filling
ctx.fillRect(0, 0, 300, 300);