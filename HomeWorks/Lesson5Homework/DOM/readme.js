// Task1

// see attached doc.file

// Task2
//todo

var allElementsArray = document.getElementsByTagName("*");
var nodeTypesAndNamesArray = [];

for (var i = 0; i < allElementsArray.length; i++) {

}


// Task3

function getElementsByTagNameAmount(tagName) {
    return document.getElementsByTagName(tagName).length;
}

getElementsByTagNameAmount("form");

// Task4

function getElementChildsAmount(elementQuery) {

    var elementByQuery = document.body.querySelector(elementQuery);
    var childrenAmount = elementByQuery.children.length;
    return childrenAmount;
}

getElementChildsAmount("form#main");

// Task5

function getElementByQuery(elementQuery) {
    return document.body.querySelector(elementQuery);
}

function isBodyChild(elementQuery) {

    var elementByQuery = getElementByQuery(elementQuery);

    return (elementByQuery.parentNode.nodeName.toLowerCase() === "body");
}

isBodyChild("form#main");

// Task6

function setBodyColor(color) {
    document.body.style.backgroundColor = color;
}

setBodyColor("green");

// Task7

//using function from Task6 :)

setBodyColor("black");

document.body.style.color = "white";

// Task8

var bodyBackgroundColor = document.body.style.backgroundColor;
var bodyTextColor = document.body.style.color;

console.log(bodyBackgroundColor + ", " + bodyTextColor);


