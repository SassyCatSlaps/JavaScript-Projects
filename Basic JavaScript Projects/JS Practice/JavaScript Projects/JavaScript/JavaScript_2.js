//using js for form validation
function validateForm() {
    let x = document.forms["newForm"]["lname"]["sName"]["fname"].value;
    if (x == "") {
        alert("Must be filled out");
        return false;
    }
}