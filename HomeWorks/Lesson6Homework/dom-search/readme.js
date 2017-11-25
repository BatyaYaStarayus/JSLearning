// Task1

document.body.getElementsByTagName("input");
document.querySelectorAll("input");
document.getElementsByClassName("form-control");


// Task2

function addElement(elementQuery, parentElementQuery, innerText) {

    var inputBlock = document.querySelector(elementQuery).cloneNode(true);
    var parentElement = document.querySelector(parentElementQuery);

    parentElement.insertBefore(inputBlock, document.querySelector("button"));
    document.querySelector(elementQuery).children[0].innerHTML = innerText;
}

addElement("div .input-group", "form", "Age");

// Task3

var inputsArray = document.querySelectorAll("input");

for (var i = 0; i < inputsArray.length; i++) {
    inputsArray[i].setAttribute("class", "input-lg");
}

// Task4

// using inputsArray variable from Task3

for (var i = 0; i < inputsArray.length; i++) {
    inputsArray[i].setAttribute("id", inputsArray[i].parentNode.children[0].innerText);
}

// Task5

for (var i = 0; i < inputsArray.length; i++) {
    inputsArray[i].setAttribute("placeholder", "Enter Your " + inputsArray[i].parentNode.children[0].innerText);
}

// Task6

// <div class="input-group col-xs-12 marg">
//     <label for="">Gender</label>
//     <select class="form-control">
//          <option value="male">Male</option>
//          <option value="female">Female</option>
//     </select>
// </div>

var parent = document.querySelector("form");
var button = parent.children[2];

var objectsArray = [{tagName: "div", class: "input-group col-xs-12 marg"},
                    {tagName: "label", for: " ", text: "Gender"},
                    {tagName: "select", class: "form-control"},
                    {tagName: "option", value: "male", text: "Male"},
                    {tagName: "option", value: "female", text: "Female"}];

var div = createElement(objectsArray[0]);
var label = createElement(objectsArray[1]);
var select = createElement(objectsArray[2]);
var optionMale = createElement(objectsArray[3]);
var optionFemale = createElement(objectsArray[4]);

function createElement(elementObject) {

    var element = document.createElement(elementObject.tagName);

    for (var i in elementObject) {
        if ( (i !== "text") && (i !== "tagName") ){
            element.setAttribute(i, elementObject[i]);
        }
    }

    for (var j in elementObject) {
        if (j === "text") {
            element.innerText = elementObject[j];
        }
    }

    return element;
}

parent.insertBefore(div,button);
div.appendChild(label);
div.appendChild(select);
select.appendChild(optionMale);
select.appendChild(optionFemale);


