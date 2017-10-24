var array = [
    {name: "L1", age: 45},
    {name: "L2", age: 20},
    {name: "L3", age: 10},
    {name: "L4", age: 78},
    {name: "L5", age: 41},
    {name: "L6", age: 10}
];

function sortArrayByAge(array) {
    var sortedArray = array.sort(function (a, b) {
        return (a.age - b.age);
    })

    return sortedArray;
}

function checkNamePresense(name) {

    var nameIsPresent = false;

    for (var i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            nameIsPresent = true;
        }
    }

    return nameIsPresent;
}

function getAndAddToArrayAgeAndName() {

    var name = prompt("Your name?");

    if(checkNamePresense(name)) {
        alert("User with such name is already registered");
    } else {
        var age = +prompt("Your age?");
        array.push({name: name, age: age});
        array = sortArrayByAge(array);
    }
}

getAndAddToArrayAgeAndName();