//var Hello = "This is a greeting. Hello there!";

//window.alert("Hey There Cutie Buns!");
//document.write(Hello);*/

/*string challenge*/
//var BOO = "\"Booooo! I'm a Spooky Browser Ghost!\" said the ghost."
//var lies = "This is what a ghost would say " + "if it wanted to trick you!"
//window.alert(BOO);
//document.write("\"Never fear! " + "Ghosts aren\'t real!\"" + " said the Dev that wrote these strings. ");

//document.write(lies);
/* multiple variables */  //i wrote these comments before I leared the proper js comment command :)
//var hauntedHouse = "Mansion 1 ", Ghost0 = "Boobert ", Ghost1 = "Boozilla ", Ghost2 = "Boothany ", Ghost3 = "Boodas ";
//document.write(Ghost2 + 10-10);

//basic js projects submission assignment

//assigning variables
window.alert("Hey, hope your day is going well!")
var Sent1 = "This is the beginning of the string "
var Sent2 = "and this is the end of the string"
var Sent3 = Sent1 + Sent2 //concatenated the above strings in a new variable and is also an expression
document.write(Sent3); //this is the statement using the above expression. I could prolly also write this as a function with curly brackets

//I wanted to try the button creation for myself

function Function_1() {
    var str = "Button Text Here!";
    document.getElementById("Button_Text").innerHTML = str; //str = local variable 'string'
}