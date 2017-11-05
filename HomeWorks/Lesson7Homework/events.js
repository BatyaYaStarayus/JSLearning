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

    var parent = document.getElementById("colorSelect")
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



// Task6



// Task7
//todo
var inputTextField = document.getElementById("inputField");
inputTextField.addEventListener("input", separateWithDots)

function separateWithDots() {
    var inputText = document.getElementById("inputField").value;
    var textWithReplacedDots = inputText.replace(".", "")
    var separatedText = "";

    for(var i = 0; i < textWithReplacedDots.length; i++) {
        if((textWithReplacedDots.length - 1 - i) % 3 === 0 ) {
            separatedText += textWithReplacedDots[i] + ".";
        } else {
            separatedText += textWithReplacedDots[i];
        }
    }

    document.getElementById("inputField").value = separatedText;
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
// Task10
// Task11