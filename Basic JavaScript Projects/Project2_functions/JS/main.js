//for button


function Click_1() {
    var str = "I don't display time this go round! Hah!";   //what it will say after click
    document.getElementById("button1").innerHTML = str;     //moding contenet of an html element | element = string
    alert(document.getElementById("innerHTML").innerHTML);  //calls the p tag id "innerHTML" to make an alert box popup at top of page
    //was trying to think of a creative var to add but took it out
    //var Vik = prompt("Hey, what\'s your name?");
    //alert("Howdy, " + Soft Daddy "\!");
    //alert("Hope you\'re doing good, " + Vik + "\!");
}

//this function concatenates the strings below when you click the words "click here?"
function myFunction() {     //myFunction is the action that is called when user clicks mouse
    var sentence = "I am learning ";    // sentence = local var string
    sentence += "a lot from this course\!";
    document.getElementById("Concatenate").innerHTML = sentence;    //"change the innerHTML to this new concatenated string"
}