function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} /* 'Vehicle()' is an object constructor | 'new' kw used to create objs of the vehicle function | 'this' kw gets values of newly created car obj with the 'new' kw e.g. a placeholder */
var Mushie = new Vehicle("Dodge", "Viper", 2020, "Red");
var Fareet = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Leti = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Leti drives a " + Leti.Vehicle_Color + "-colored " + Leti.Vehicle_Model +
        " manufactured in " + Leti.Vehicle_Year + ".";
}