var resetButton = document.querySelector("#resetButton");
var showHistoryButton = document.getElementById("showHistoryButton");
var resetHistoryButton = document.getElementById("resetHistoryButton");
var inputField = document.getElementById("inputField");

// reset button functionality

function clearElementText(element) {
    element.value = "";
}

function getElementText(element) {
    return element.value;
}

function clearInputField() {
    clearElementText(inputField);
}

function getInputValue() {
    return getElementText(inputField);
}

// search banner functionality

var dataBase = ["BMW", "Opel", "Ford", "VW", "Lada", "Mercedes",
    "Toyota", "Suzuki", "Kia", "Skoda", "Mazda", "Honda", "Hyundai"];

var searchBanner = document.getElementById("searchBanner");
var carList = document.getElementById("carsList");

function createBannerElement() {
    return document.createElement("option");
}

function addBannerElementToList(elementText) {
    var element = createBannerElement();

    carList.appendChild(element);

    element.innerText = elementText;

    element.addEventListener("click", addToHistory(elementText));
}

function matchesWithDatabase(element) {
    var regexp = new RegExp(getInputValue().toLowerCase());

    return !!element.match(regexp);
}

function getMatchesWithDatabse() {
    var matchedValues = [];

    for (var i = 0; i < dataBase.length; i++) {
        if (matchesWithDatabase(dataBase[i].toLowerCase())) {
            matchedValues.push(dataBase[i]);
        }
    }

    return matchedValues;
    //TODO should return an array with matched values
}

function clearDatalistOptions() {
    while (carList.firstChild) {
        carList.removeChild(carList.firstChild);
    }
}

function fillBannerWithElements() {
    clearDatalistOptions();

    var matchedArray = getMatchesWithDatabse();

    for(var i = 0; i < matchedArray.length; i++) {
        addBannerElementToList(matchedArray[i])
    }
}

function getPositionsOfMatchingSymbols() {

}

function colorMatchedSymbols() {

}

function sortByMatching() {

}

var searchHistory = [];

function addToHistory(item) {
    searchHistory.push(item);
}

function resetHistory() {
    searchHistory = [];
}

function showHistory() {
    for (var i = 0; i < searchHistory.length; i++) {
        //TODO function for showing items of history
    }
}





