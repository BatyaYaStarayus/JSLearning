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
//import does not work, but if paste {getRandomColorInRGB} from "../Lesson5Homework/functions-advanced" works good
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

var paragraph = document.body.getElementsByTagName("p");

paragraph[0].style.fontFamily = "Times New Roman";
paragraph[0].style.fontSize = "50px";
paragraph[0].style.color = "red";

// Task5

var element;

if(element.childNodes < 1) {
    return false
}

// Task6

function isPresentInBlock(block, element) {

    var isPresent = true;

    for(var i = 0; i < block.children.length; i++) {
        if(block.children[i] === element) {
            return isPresent;
        } else {
            isPresent = false;
        }
    }

    return isPresent;
}


function createElementInBlock(blockLink, elementName) {

    var element = document.createElement(elementName);
    var block = document.querySelector(blockLink);

    if(!isPresentInBlock(block, element)) {
        block.appendChild(element);
    } else {
        alert("Element is already present");
    }
}

createElementInBlock("div", "table");

// Task7

function createCloneNode(block) {

    var blockToClone = document.querySelector(block);
    var clonedBlock = blockToClone.cloneNode(true);

    document.body.appendChild(clonedBlock);
}

createCloneNode("p");

// Task8

function addChildrenTo(block, count, type) {

    var blockToAddChildren = document.querySelector(block);

    for (count; count > 0; count--) {
        var elementToAddAsAChild = document.createElement(type);
        blockToAddChildren.appendChild(elementToAddAsAChild);
    }
}

addChildrenTo("div", 3, "p");

// Task9

function replaceElBy(blockCurrent, blockToReplace) {

    var currentBlock = document.querySelector(blockCurrent);
    var insertedBlock = document.createElement(blockToReplace);
    var parent = currentBlock.parentNode;

    parent.replaceChild(insertedBlock, currentBlock);
}

replaceElBy("button", "div");

// Task10

//is there need to create elements with class "www", if function below works for
// https://github.com/kl2karpenko/JS-practise-NetEnt/blob/master/lesson6/dom.md? :)
function addTagNameToClass(elementClass) {

    var elementsArray = document.querySelectorAll("." + elementClass);

    for (var i = 0; i < elementsArray.length; i++) {

        var newClassWithTagName = elementClass + elementsArray[i].tagName.toLowerCase();
        elementsArray[i].setAttribute("class", newClassWithTagName);
    }
}

addTagNameToClass("facebox");

// Task11

//task is absent

// Task12

function createList(elementsArray, ordered) {

    if(!ordered) {
        var ul = document.createElement("ul");
        document.body.appendChild(ul);

        for (var i = 0; i < elementsArray.length; i++) {
            var li = document.createElement("li");
            ul.appendChild(li);
            li.innerText = elementsArray[i];
        }
    } else {
        var ol = document.createElement("ol");
        document.body.appendChild(ol);

        for (var j = 0; j < elementsArray.length; j++) {
            var li = document.createElement("li");
            ol.appendChild(li);
            li.innerText = elementsArray[j];
        }
    }
}

createList(["1", "2", "3"], true);

// Task13

//using updated function from Task12 :)
createList(["1", "2", "3"], false);

// Task14
//todo
function setCharsRandomColor(elementQuery) {

    var element = document.querySelector(elementQuery);
    var elementText = element.innerText;

    for (var i = 0; i < elementText.length; i++) {

        var randomColor = getRandomColorInRGB();

        if (randomColor !== (elementText[i] - 1).style.color) {
            elementText[i].style.color = randomColor;
        }
    }
    var coloredString = elementText;

    element.innerText = coloredString;
}

setCharsRandomColor("p");

// Task15

//duplicates Task14
