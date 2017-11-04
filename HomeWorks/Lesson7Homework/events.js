// Task1

//in html file should be added parameters to changeContent function
function changeContent(rowIndex, columnIndex, newText) {

    var chosenRow = document.querySelector("tbody").children[rowIndex - 1];
    var chosenCell = chosenRow.children[columnIndex - 1];

    chosenCell.innerText = newText;

}

// Task2

function removeColor() {

    var parent = document.getElementById("colorSelect")
    var optionToRemove = document.querySelector("option:checked");

    parent.removeChild(optionToRemove);

}

// Task3
//todo
var boldTextsArray = document.querySelectorAll("strong");

function changeStrongTextsBackgroundColor() {
    for (var j = 0; j < boldTextsArray.length; j++) {
        if (event.type === "onmouseon") {
            boldTextsArray[j].style.backgroundColor = "yellow";
        } else {
            boldTextsArray[j].style.backgroundColor = "white";
        }
    }
}

for (var i = 0; i < boldTextsArray.length; i++) {
    boldTextsArray[i].addEventListener("mouseon", changeStrongTextsBackgroundColor);
    boldTextsArray[i].addEventListener("mouseout", changeStrongTextsBackgroundColor);
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
// Task8
// Task9
// Task10
// Task11