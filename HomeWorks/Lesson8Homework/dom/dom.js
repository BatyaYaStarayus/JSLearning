// Task1

var aElements = document.querySelectorAll(".glyphicon.glyphicon-remove");
var ulElement = document.querySelector("ul.list-unstyled");
var addElementButton = document.querySelector("button.btn.btn-success");

function removeLiElement() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    // или тут можно сделать проще: this ,parentNode.remove()

    setLiElementText();
}

function addLiElement() {
    var newLiElement = document.createElement("li");
    var newAElement = document.createElement("a");

    newLiElement.textContent = "Element " + (ulElement.children.length + 1) + " ";
    newAElement.setAttribute("class","glyphicon glyphicon-remove");
    newAElement.setAttribute("href","#");
    newAElement.addEventListener("click", removeLiElement);

    newLiElement.appendChild(newAElement);
    ulElement.appendChild(newLiElement);

}

function setLiElementText() {
    for (var i = 0; i < ulElement.children.length; i++) {
        ulElement.children[i].firstChild.textContent = "Element " + (i + 1) + " ";
    }
}

for (var i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener("click", removeLiElement);
}

addElementButton.addEventListener("click", addLiElement);

// Task2

var userArray = [];
var buttonAddNewUser = document.querySelector("button.btn.btn-warning");
var inputFieldsArray = document.querySelectorAll("input");
var divContainersArray = document.querySelectorAll("div.container");

// creating list for users

var newList = document.createElement("ol");
divContainersArray[1].appendChild(newList);

buttonAddNewUser.addEventListener("click", addUser);
for (var i = 0; i < inputFieldsArray.length; i++) {
    inputFieldsArray[i].addEventListener("input", removeBorder);
}

function checkNameIsEmpty() {
    if (inputFieldsArray[0].value.length < 2 || !isNaN(inputFieldsArray[0].value)) {
        createBorder(inputFieldsArray[0]);
        addInfoDiv();
        inputFieldsArray[0].value = "";
        return true;
    }
    return false;
}

function checkAgeIsEmpty() {
    if (isNaN(inputFieldsArray[1].value) || inputFieldsArray[1].value.length === 0) {
        createBorder(inputFieldsArray[1]);
        addInfoDiv();
        inputFieldsArray[1].value = "";
        return true;
    }
    return false;
}

function checkInputFieldsAreEmpty() {
    // а почему тут + а не && это как то странно =)
    return checkNameIsEmpty() + checkAgeIsEmpty();
}

function addInfoDiv() {
    if (!(document.querySelector("#info"))) {
        var infoDiv = document.createElement("div");

        infoDiv.innerHTML = "Please fill all the fields in a right way";
        infoDiv.setAttribute("id", "info");

        divContainersArray[1].insertBefore(infoDiv, buttonAddNewUser);

        setTimeout(removeInfoDiv, 3000);
    }
}

function removeInfoDiv() {
    divContainersArray[1].removeChild(document.querySelector("#info"));
}

function createBorder(element) {
    element.style.border = "thick solid red";
}

function removeBorder() {
    if (document.querySelector("#info")) {
        removeInfoDiv();
    }
    this.style.border = "";
}

function createUserObject() {
    var userObject = {};
    userObject.name = inputFieldsArray[0].value;
    userObject.age = inputFieldsArray[1].value;
    userObject.gender = document.querySelector("select").value;

    return userObject;
}

function addUserInfoToUserList() {
    var olElement = document.querySelector("ol");
    var newUserLiElement = document.createElement("li");
    var newUserObject = userArray[userArray.length - 1];

    newUserLiElement.innerHTML = newUserObject.name + ", " + newUserObject.age + " years old, " + newUserObject.gender;

    olElement.appendChild(newUserLiElement);

}

function clearAllInputFields() {
    var inputFormsArray = document.querySelectorAll("input");

    for (var i = 0; i < inputFormsArray.length; i++) {
        inputFormsArray[i].value = "";
    }
}

function addUser() {
    if (!checkInputFieldsAreEmpty()) {
        userArray.push(createUserObject());
        clearAllInputFields();
        addUserInfoToUserList();
    }
}
