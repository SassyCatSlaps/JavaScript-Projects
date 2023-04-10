//setting conditions for the tic tac toe game to determine win coditions
let currentPlayer = "X";
let selectedSqrs = [];
//need a function so users can place 'o' or 'x' in a square | using .some() to check each element of the array for s# contents | function placeXorO goes from lines 5-41
function placeX_or_O(sqrNum) {
    if (!selectedSqrs.some(element => element.includes(sqrNum))) {
        let select = document.getElementById(sqrNum);
        if (currentPlayer === "X") {
            select.style.backgroundImage = "url('Images/x_2.png')";      //keep track of x's and o's
        } else {
            select.style.backgroundImage = "url('Images/o_2.png')";
        }
        selectedSqrs.push(sqrNum + currentPlayer);
        checkWinCond();
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
        //adding in sounds
        audio('./Media.place_2.mp3');
        //user is playing against comp, check see if comp turn
        if (currentPlayer === "O") {
            disableClick();
            setTimeout(function () { compTurn(); }, 1000);
        }
        return true;    //makes the previous line func work
    }
    //makes comp select rando sqr on turn
    function compTurn() {
        let success = false;
        let pickSqr;
        while (!success) {
            pickSqr = String(Math.floor(Math.random() * 9));
            if (placeX_or_O(pickSqr)) {
                placeX_or_O(pickSqr);
                success = true;
            };
        }
    }
}

//finish defining functions: checkWinCond()  |  audio()  |  disableClick()  |
//below i am running every possible win possibility
function checkWinCond() {
    if (arrayHas("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayHas("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayHas("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayHas("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayHas("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayHas("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayHas("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayHas("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520)}
    else if (arrayHas("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayHas("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayHas("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayHas("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayHas("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayHas("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayHas("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayHas("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520)}
    //check for game tie if above conditions are not true + all sqrs full
    else if (selectedSqrs.length >= 9) {
        audio('./Media/tie_2.mp3');
        setTimeout(function () { resetGame(); }, 500);      //.3 second timer before reset is performed
    }
    //checks for each win condition = "does array include 3 strings?" - 3 in a row = win in tictactoe game
    function arrayHas(sqrA, sqrB, sqrC) {
        const a = selectedSqrs.includes(sqrA);
        const b = selectedSqrs.includes(sqrB);
        const c = selectedSqrs.includes(sqrC);
        if (a === true && b === true && c === true) { return true; }
    }
}

//make compTurn() and disableClick() do something  |  disabling click makes body portion either clickable or unclickable after set time
function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);
}

//function that will allow for audio to produce sound
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//drawing 'win lines'
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    //more canvas interaction with line animation function
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //last loopiteration gets content cleared
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(251, 0, 255, .8)";
        c.stroke();  //draw all defined | below checks for endpoints 
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //cancelAnimationFrame is need for certain win conditions
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //canvas clearing afer winline animation complete
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    //no mouse click while 'win audio' active
    disableClick();
    audio('./Media/winGame_2.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//ensure game does not get stuck in a loop
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    //make array reset to empty
    selectedSqrs = [];
}
