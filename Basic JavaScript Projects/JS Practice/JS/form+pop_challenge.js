//form challenge
function validateForm() {
    let x = document.forms["newForm"]["phoneNum"].value;
    if (x == "") {
        alert("Field must not be left empty!");
        return false;
    }
}
//popup challenge
function openForm() {
    document.getElementById("newForm").style.display = "block";
}

function closeForm() {
    document.getElementById("newForm").style.display = "none";
}