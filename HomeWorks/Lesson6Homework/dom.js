// importing function getRandomColor
import {getRandomColorInRGB} from "../Lesson5Homework/functions-advanced";

// Task1

function createTable(fcolor, scolor, content) {

    var charContent = content[0];
    var numContent = content[1];
    var table = document.createElement("table");
    document.body.appendChild(table);

    for (var i = 0; i < 8; i++) {

        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < 8; j++) {
            var td = document.createElement("td");

            if ( (j + i) % 2 !== 0) {
                td.setAttribute("bgcolor", fcolor);
            } else {
                td.setAttribute("bgcolor", scolor);
            }

            td.innerText = charContent[j] + numContent[i];
            td.style.color = "white";

            tr.appendChild(td);
        }
    }

}

createTable("red", "black", [["A", "B", "C", "D", "E", "F", "G", "H"], ["1", "2", "3", "4", "5", "6", "7", "8"]]);

// Task2
//todo update import/export
function getRandomChar() {

    var randomString = Math.random().toString(36);
    var randomStringWithoutNumbers = randomString.replace(/[0-9][.]/g, "").slice(1);
    var randomChar = randomStringWithoutNumbers.charAt((Math.random() * randomStringWithoutNumbers.length) + 1 );

    return randomChar
}

function createTable(n, m) {

    var table = document.createElement("table");
    document.body.appendChild(table);

    for (var i = 0; i < n; i++) {

        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < m; j++) {
            var td = document.createElement("td");

            td.setAttribute("bgcolor", getRandomColorInRGB());
            td.innerText = getRandomChar();

            tr.appendChild(td);
        }
    }
}

createTable(8, 8);

// Task3

function getValueOf(elementQuery, attribute) {

    var element = document.querySelector(elementQuery);
    var attributeValue = element.getAttribute(attribute);

    return attributeValue;
}

var attributesArray = ["href", "hreflang", "rel", "target", "type"];

for (var i = 0; i < attributesArray.length; i++) {
    console.log(getValueOf("#w3r", attributesArray[i]));
}

// Task4



// Task5
// Task6
// Task7
// Task8
// Task9
// Task10
// Task11
// Task12
// Task13
// Task14
// Task15