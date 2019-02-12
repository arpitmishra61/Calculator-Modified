let resultd = "0";
let PN = "0";
let S = 0;
let numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let resultMD = 1;
let resultAS = 0;

let operator = "0";
let check1 = 0;
let operatorPressed = 0;

let FAS = 0;
let FMD = 1;

let PR = 0;
let PP = 1;

let count = 0;
let operatorChange = false;

let start = 0;
let buttons = document.getElementsByTagName("BUTTON");
let buttonValue = 0;

//assigning EventListners:-
for (var i = 0; i < buttons.length; i++) {
  var getElement = buttons[i];
  if (getElement.innerHTML == "=") getElement.addEventListener("click", result);
  else if (getElement.innerHTML == "C")
    getElement.addEventListener("click", erase);
  else getElement.addEventListener("click", display);
}

//Arthametic Functions Definatons:-
function add(num1) {
  S = S + Number(num1);
  resultAS++;
  resultMD = -1;
}

function sub(num) {
  if (resultAS == 0) {
    S = Number(num);
    resultAS = S;
    resultMD = -1;
  } else S = S - Number(num);
}

function mult(num) {
  if (resultMD == 1 && operator == "X") {
    S = Number(num);
    resultMD = 0;
  } else S = S * Number(num);
}

function div(num) {
  if (resultMD == 1 && operator == "/") {
    S = Number(num);
    resultMD = 0;
  } else S = S / Number(num);
}

//display on secondary screen.
function displaySubSCreen() {
  PP = Number(PP);
  console.log(PP, typeof PP);
  if (PP == 0) {
    console.log(PP, "in fn");
    PP = Number(PN.charAt(0)) * Math.pow(10, count + 1);
    count = count + 1;
    PN = Number(PN);
  }

  FMD = Number(PN) / Number(PP);
  FAS = Number(PN) - Number(PR);

  if (FAS < 0) {
    FAS = -1 * FAS;
  }
  //calling of calc function to calculate the result.

  calc(operator);

  document.getElementById("sd").value = S;
  PN = String(PN);
  PR = PR + PN.charAt(PN.length - 1);
  PP = PN.charAt(PN.length - 1);
}

function calc(operator) {
  if (operator == "+") add(FAS);
  else if (operator == "-") sub(FAS);
  else if (operator == "/") div(FMD);
  else if (operator == "X") mult(FMD);
  start = 2;
}

function display(e) {
  buttonValue = e.target.innerHTML;
  console.log(typeof buttonValue);

  if (resultd == "0") {
    document.getElementById("md").value = buttonValue;
    resultd = String(buttonValue);
    PN = String(buttonValue);
  } else if (Number(buttonValue) || buttonValue == "0") {
    PN += String(buttonValue);
    resultd = resultd + buttonValue;
  } else {
    if (String(buttonValue) && buttonValue != "0") {
      console.log("Working");
      operatorChange = true;
      operator = buttonValue;
      operatorPressed = true;
      resultd = resultd + buttonValue;
    }
  }
	if (operatorChange) displaySubSCreen(operator);


  if (operatorPressed) {
    console.log("op");
    PN = "";
    PR = 0;
    PP = 1;
    count = 0;
    operatorPressed = 0;
  }

  //display whatever user yype on main screen
  document.getElementById("md").value = resultd;
  console.log("iam pn", PN);
}
function result() {
  document.getElementById("md").value = S;
  document.getElementById("sd").value = " ";

  resultAS = 0;
  resultMD = 1;
  resultd = "0";
  PN = "0";
  operator = "0";
  operatorPressed = 0;
  check1 = 0;
  S = 0;
  PR = 0;
  PP = 1;
  operatorChange = 0;
}
function erase() {
  document.getElementById("md").value = "0";
  document.getElementById("sd").value = " ";
  resultAS = 0;
  resultMD = 1;
  resultd = "0";
  PN = "0";
  operator = "0";
  S = 0;
  operatorPressed = 0;
  check1 = 0;
  PR = 0;
  PP = 1;
  start = 0;
  operatorChange = 0;
}
