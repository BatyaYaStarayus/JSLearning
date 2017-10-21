// Task1

var name = "Vasya";

function getData(age) {

    return {
        name: name,
        age: age
    };
}

var newData = getData(20);
var newDataElse = getData();

console.log(newData, newDataElse); // { name: "Vasya", age: 20}, {name: "Vasya", age: undefined};

// Task2

function canGoToManGym(name, age, gender) {
    if (!name) {
        console.log("Please pass your name to function");
    }

    if (!age) {
        console.log("Please pass your age to function");
    }

    if (!gender) {
        console.log("Please pass your gender to function");
    }

    // check age
    var normalAge = age > 90;
    var isMan = gender === "man";
    // the upper one is the short for: var normalAge = age > 90 ? true : false;

    return normalAge && isMan;
}

canGoToManGym("Lily", 24, "woman"); // ? false
canGoToManGym("Vasya", 30, "man"); // ? false

// Task3

Use Parameter Defaults:

    function getName( name ) {
        name = name || "Default name";

        return name;
    }

getName("Lily"); // "Lily"
getName(); // "Default name"
