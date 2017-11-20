// Task1

//in html file should be added parameters to changeContent function and src
function changeContent(rowIndex, columnIndex, newText) {

    var chosenRow = document.querySelector("tbody").children[rowIndex - 1];
    var chosenCell = chosenRow.children[columnIndex - 1];

    chosenCell.innerText = newText;

}

// Task2

// in index.html should be added script tag and src
function removeColor() {

    var parent = document.getElementById("colorSelect");
    var optionToRemove = document.querySelector("option:checked");

    parent.removeChild(optionToRemove);

}

// Task3

var boldTextsArray = document.querySelectorAll("strong");

for (var i = 0; i < boldTextsArray.length; i++) {
    boldTextsArray[i].addEventListener("mouseover", changeStrongTextsBackgroundColor);
    boldTextsArray[i].addEventListener("mouseout", changeStrongTextsBackgroundColor);
}

function changeStrongTextsBackgroundColor() {
    for (var j = 0; j < boldTextsArray.length; j++) {
        if (event.type === "mouseover") {
            boldTextsArray[j].style.backgroundColor = "yellow";
        } else {
            boldTextsArray[j].style.backgroundColor = "white";
        }
    }
}

// Task4

function insertRow() {

    var newRow = document.createElement("tr");
    var parentTable = document.querySelector("tbody");

    for(var i = 1; i <= 2; i++) {
        var newCell = document.createElement("td");
        newCell.innerText = "Row" + (parentTable.children.length + 1) + " cell" + i;

        newRow.appendChild(newCell);
    }

    parentTable.appendChild(newRow);
}

// Task5

// add to html file
// <button id="showButton" onclick="showPopUp()">Show</button>
// <button id="hideButton" onclick="hidePopUp()">Hide</button>
// <div id="popUp" style="visibility: hidden"> My PopUp </div>

var popUp = document.querySelector("#popUp");

function showPopUp() {
    popUp.setAttribute("style", "visibility: visible");
}

function hidePopUp() {
    popUp.setAttribute("style", "visibility: hidden");
}

// Task6

function clearProhibitedSymbols() {
    var prohibitedSymbols = /[a-e]/gi;
    var inputText = document.querySelector("input").value;
    var editedText;

    if (inputText[(inputText.length - 1)].match(prohibitedSymbols)) {
        editedText = inputText.replace(prohibitedSymbols, "");
        document.querySelector("input").value = editedText;
    }
}

var inputField = document.querySelector("input");

inputField.addEventListener("input", clearProhibitedSymbols);

// Task7

// index.html file

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <title>Title</title>
// </head>
// <body>
// <input id="inputField" oninput="separateWithDots()">
// <script src="test.js"></script>
// </body>
// </html>

function replaceFinalDot(string) {
    var stringWithReplacedDot;

    if (string[string.length - 1] === ".") {
        stringWithReplacedDot = string.slice(0, string.length - 1);
    }
    return stringWithReplacedDot;
}

function separateWithDots() {

    var inputField = document.querySelector("input");
    var valueString = inputField.value;
    var valueStringWithReplacedDots = valueString.replace(/[.]/g, "");
    var valueStringWithReplacedDotsLength = valueStringWithReplacedDots.length;
    var editedString = "";
    var lengthModuleThree = valueStringWithReplacedDotsLength % 3;

    for (var i = 0; i < valueStringWithReplacedDotsLength; i++) {
        if( ((((i+1) % 3) === lengthModuleThree) || (i + 1 === lengthModuleThree))  ) {
            editedString += (valueStringWithReplacedDots[i] + ".");
        } else {
            editedString += valueStringWithReplacedDots[i];
        }
    }


    document.querySelector("input").value = replaceFinalDot(editedString);
}

// Task8

var inputFieldsArray = document.querySelectorAll("input");

function checkAllInputsAreFilled() {
    var allLengthIsTwo = true;

    for (var i = 0; i < inputFieldsArray.length; i++) {
        if (inputFieldsArray[i].value.length < 2) {
            return allLengthIsTwo = false;
        }
    }
    alert("All inputs are filled");
    // added button to index.html file to focus it in case of all inputs are filled
    document.querySelector("button").focus();
    return allLengthIsTwo;
}

function verifyLength() {
    console.log(this);
    if (this.value.length === 2) {
        if (this !== inputFieldsArray[inputFieldsArray.length - 1]) {
            this.nextElementSibling.focus();
        } else {
            inputFieldsArray[0].focus();
        }
    }
}

for (var i = 0; i < inputFieldsArray.length; i++) {
    inputFieldsArray[i].addEventListener("input", verifyLength);
    inputFieldsArray[i].addEventListener("focus", checkAllInputsAreFilled);
}

// Task9

    //to add in html file
    // <input id="width">
    // <input id="height">
    // <div style="height: 50px; width: 50px"></div>

var blockElement = document.querySelector("div");
var widthInputField = document.getElementById("width");
var heightInputField = document.getElementById("height");

function getParameter(parameter) {
    return document.getElementById(parameter).value;
}

function setWidth() {
    blockElement.style.width = getParameter("width") + "px";
}

function setHeight() {
    blockElement.style.height = getParameter("height") + "px";
}

widthInputField.addEventListener("input", setWidth);
heightInputField.addEventListener("input", setHeight);

// Task10

// index.html file for task

// <!DOCTYPE html>
// <html>
// <style type="text/css">
//     table {width: 300px; height: 300px; border: solid; background-color: white}
// td {border: solid}
// tr {border: solid}
// </style>
// <head>
// <meta charset=utf-8 />
//     <title>Insert row in a table - w3resource</title>
// </head>
// <body>
// <table>
// <tbody>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// </tr>
// <tr>
// <td></td>
// <td></td>
// <td></td>
// </tr>
// </tbody>
// </table>
// <script src="test.js"></script>
//     </body>
//     </html>

var tableBody = document.querySelector("tbody");
var count = 0;


function setColorOnClick() {
    checkColoredCells();
    this.style.backgroundColor = "red";
    count++;
}

function checkColoredCells() {
    if (count >= 5) {
        alert("Enough!");
        tableBody.children[i].children[j].removeEventListener("click", setColorOnClick);

    }
}

for (var i = 0; i < tableBody.children.length; i++) {
    for(var j = 0; j < tableBody.children[i].children.length; j++) {
        tableBody.children[i].children[j].addEventListener("click", setColorOnClick);
    }
}

// Task11

// add to html file
// <input id="inputField" oninput="countSymbolsAmountLimit(10)">
// <div id="limitMessageText"></div>

function countSymbolsAmountLimit(symbolsLimit) {

    var beforeLimitMessageArray = ["Left ", " symbols to type"];
    var afterLimitMessageArray = ["Limit is exceeded by ", " symbols"];

    var inputField = document.querySelector("input");
    var limitMessageText = document.querySelector("#limitMessageText");

    var symbolsLeft = symbolsLimit - inputField.value.length;
    var symbolsExceed = inputField.value.length - symbolsLimit;

    if (inputField.value.length < symbolsLimit) {
        limitMessageText.innerText = beforeLimitMessageArray[0] + symbolsLeft + beforeLimitMessageArray[1];
    } else if (inputField.value.length === symbolsLimit) {
        limitMessageText.innerText = "";
    } else {
        limitMessageText.innerText = afterLimitMessageArray[0] + symbolsExceed + afterLimitMessageArray[1];
    }
}

