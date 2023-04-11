//make the calculator actually work
//create obj to track values
const CALC = {
    Display_Val: "0",
    frst_Operand: null,
    wait_scnd_Operand: false,
    //think of the operators as the symbols on calculator...b/c that's what they are :)
    symbol: null,
};

//when button clicked, modify values
function Input_Digit(digit) {
    const { Display_Val, wait_scnd_Operand } = CALC;
    //check true = wait_scnd_operand + set Display_Val to key clicked
    if (wait_scnd_Operand === true) {
        CALC.Display_Val = digit;
        CALC.wait_scnd_Operand = false;
    } else {
        //if val = 0, then overwrite display_val - else, add onto it
        CALC.Display_Val = Display_Val === "0" ? digit : Display_Val + digit;
    }
}

//make section handle decimal points
function Input_Decimal(dot) {
    //eliminate potential bugs caused by rando decimal clicks
    if (CALC.wait_scnd_Operand === true) return;
    if (!CALC.Display_Val.includes(dot)) {
        //if no decimal point in display val, then add decimal point
        CALC.Display_Val += dot;
    }
}
//operator symbols on calc
function Handle_Operator(Next_Operator) {
    const { frst_Operand, Display_Val, symbol } = CALC;
    //when op symbol pressed, convert # displayed and store result in calc.frst.operand
    const Val_of_Input = parseFloat(Display_Val);
    if (symbol && CALC.wait_scnd_Operand) {
        CALC.symbol = Next_Operator;
        return;
    }
    if (frst_Operand == null) {
        CALC.frst_Operand = Val_of_Input;
    } else if (symbol) {    //check if operator already active/exists
        const Val_Now = frst_Operand || 0;
        //ref property action if op exists in perform_calc obj and func that matches op is executed
        let result = Perform_Calc[symbol](Val_Now, Val_of_Input);
        //add fixed # amount after decimal & remove trailing 0s
        result = Number(result).toFixed (9);
        result = (result * 1).toString();
        CALC.Display_Val = parseFloat(result);
        CALC.frst_Operand = parseFloat(result);
    }
    CALC.wait_scnd_Operand = true;
    CALC.symbol = Next_Operator;
}

const Perform_Calc = {
    "/": (frst_Operand, scnd_Operand) => frst_Operand / scnd_Operand,
    "*": (frst_Operand, scnd_Operand) => frst_Operand * scnd_Operand,
    "+": (frst_Operand, scnd_Operand) => frst_Operand + scnd_Operand,
    "-": (frst_Operand, scnd_Operand) => frst_Operand - scnd_Operand,
    "=": (frst_Operand, scnd_Operand) => scnd_Operand
};

function CALC_Reset() {
    CALC.Display_Val = "0";
    CALC.frst_Operand = null;
    CALC.wait_scnd_Operand = false;
    CALC.symbol = null;
}

//disp_val content updated on screen with Update_diplay()
function UpDt_Display() {
    //calc-scrn targets input tag in html file
    const display = document.querySelector(".calc-Screen");
    display.value = CALC.Display_Val;
}

UpDt_Display();
//make a way to keep track of and monitor btn clicks
const keys = document.querySelector(".calc-Keys");
keys.addEventListener('click', (event) => {
    //target var = clicked element obj
    const { target } = event;
    //if clicked ele not btn, then exit func
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("symbol")) {
        Handle_Operator(target.value);
        UpDt_Display();
        return
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        UpDt_Display();
        return;
    }
    //make AC btn clear inputs from screen
    if (target.classList.contains("all-clear")) {
        CALC_Reset();
        UpDt_Display();
        return;
    }
    Input_Digit(target.value);
    UpDt_Display();
})