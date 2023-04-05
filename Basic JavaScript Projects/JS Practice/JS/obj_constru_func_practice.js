function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
//make a human
const newHuman = new Person("Finn", "Freckle", 22, "green");

//display something about human
document.getElementById("hooman").innerHTML =
    "This human is " + newHuman.age + " earth cycles old.";