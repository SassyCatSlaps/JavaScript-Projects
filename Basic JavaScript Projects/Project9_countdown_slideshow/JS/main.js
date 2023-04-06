//image slideshow styling goes here
let imgIndex = 1;
showSlides(imgIndex);

//back and forward controls
function moreSlides(n) {
    showSlides(imgIndex += n);
}
//thumbnail img controls
function currentImg(n) {
    showSlides(imgIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("car_Slides");
    let dots = document.getElementsByClassName("circle");
    if (n > slides.length) { imgIndex = 1 }
    if (n < 1) { imgIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[imgIndex - 1].style.display = "block";
    dots[imgIndex - 1].className += " active";
}


//countdown timer
function countdown() {
    var secs = document.getElementById("secs").value;

    function inner_Clock() {
        secs = secs - 1;
        alarm.innerHTML = secs;
        var time = setTimeout(inner_Clock, 1000);   //setTimeout(inner_clock, 1000) means the prog is pausing for 1000milsecs aka 1 second
        if (secs == -1) {
            alert("Time is out!");
            clearTimeout(time);
            alarm.innerHTML = "";
        }
    }
    inner_Clock();
}