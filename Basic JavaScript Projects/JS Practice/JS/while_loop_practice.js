//example of a while loop  |  lets count to ten!
function count_up_to_Ten() {
    var Digit = "";
    var XX = 1;
    while (XX < 11) {
        Digit += "<br>" + XX;
        XX++;   //'++' increment add one
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}