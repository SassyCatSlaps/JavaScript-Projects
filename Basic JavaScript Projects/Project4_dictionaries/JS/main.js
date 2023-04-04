
//dictionary assignment
function cat_Dictionary() {  //all keys are unique and none repeat  |  the values could repeat but in this case they don't | cat.
    var Animal = {
        Species: "Cat",
        Color: "Black & White Tuxedo (piebald)",
        Breed: "Angora",
        Age: 2,
        Sound: "Meow!",
        Hair: "Silky",
        Ability: "Magic Powers - Invisibility",
        Location: "Turkey"
    };
    delete Animal.Species;    //will delete the kvp ||  the actual output will now show up on webpage as "undefined"
    document.getElementById("Dictionary").innerHTML = Animal.Species;     //used this method to output a value i chose
}                                     //dictionary challenge: when 2 keys identical and called, the lower value was the result(printed)