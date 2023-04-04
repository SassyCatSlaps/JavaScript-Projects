function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        Color: "Black and White Tuxedo",
        Breed: "Turkish Van",
        Age: 2,
        Sound: "Meow!"  //notice there is not a comman here
    };
    delete Animal.Breed;    //will delete the kvp
    document.getElementById("Dictionary").innerHTML = Animal.Breed;     //actual output will be "undefined"   
}