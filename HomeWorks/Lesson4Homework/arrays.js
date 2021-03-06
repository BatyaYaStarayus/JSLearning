//Task1

function isPal(string) {

    var lowerCasedStringWithoutSpaces = string.replace(" ", "").toLowerCase();

    for (var i = 0; i < lowerCasedStringWithoutSpaces.length; i++) {
        if (!(lowerCasedStringWithoutSpaces[i] === lowerCasedStringWithoutSpaces[(lowerCasedStringWithoutSpaces.length - 1 - i)])) {
            return false;
        }
        return true;
    }
}

//Test:
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

//Task2

function delAnagrams(array) {

    function getSortedStringFromArrayElement(element) {
        var sortedString = element.toLowerCase().split("").sort().join("");

        return sortedString;
    }

    var unifiedArrayWithSortedStrings = array;

    for (var i = 0; i < array.length; i++) {
        for(var j = i + 1; j < array.length; j++) {
            if(getSortedStringFromArrayElement(array[i]) === getSortedStringFromArrayElement(array[j])) {
                unifiedArrayWithSortedStrings.splice(j, 1);
                j--;
            }
        }
    }

    return unifiedArrayWithSortedStrings;
}

delAnagrams(['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор']);

//Task3

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];

function getStringAndReverseSymbols(array) {

    var editedString;
    var arraysElement = [];
    var arrayWithStrings = [];

    for (var i = 0; i < array.length; i++) {
        arraysElement = array[i].split("");
        arraysElement.reverse();
        arrayWithStrings.push(arraysElement.join(""));
    }

    editedString = arrayWithStrings.join(" ");

    return editedString;
}

getStringAndReverseSymbols(arr);

//Task4

//part1

function getIntegersSumFromOneToArgumentNumber(number) {

    var integersSum = 0;

    for (var i = 1; i <= number; i++) {
        integersSum += i;
    }

    console.log(integersSum);
}

getIntegersSumFromOneToArgumentNumber(100);

// part2

function getEvenIntegersSumFromZeroToArgumentNumber(number) {

    var evensSum = 0;

    for (var i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            evensSum += i;
        }
    }

    console.log(evensSum);
}

getEvenIntegersSumFromZeroToArgumentNumber(10);

//Task5

function callMe(arg1, arg2, arg3) {

    var argsSum = 0;

    if ( (!isNaN(arg1)) && (!isNaN(arg2)) && (!isNaN(arg3)) ) {
        argsSum = arg1 + arg2 + arg3;
    } else {
        argsSum = null;
        console.error("One of arguments is absent or not a number!");
    }

    return argsSum;
}

// Test:
// callMe(1, 2, 3);
// callMe(1, 2);
// callMe(1, "asdd", -1);
// callMe(-1, -2, -3);

//Task6

function callMeAgain(array) {

    var sortedArray = array.sort().join(",");

    console.log(sortedArray);
}

callMeAgain(["a", "c", "f", "d", "b", "e"]);

//Task7

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
    });

    return sortedArray;
}

sortArrayByAge(array);

//Task8

var array = [
    {name: "L1", age: 45},
    {name: "L2", age: 20},
    {name: "L3", age: 10},
    {name: "L4", age: 78},
    {name: "L5", age: 41},
    {name: "L6", age: 10}
];

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

//Task9

function countSymbolThreeInArray(array) {

    var joinedArrayString = array.join("");
    var symbolThreeAmount = joinedArrayString.match(/3/g).length;

    console.log(symbolThreeAmount);
}

countSymbolThreeInArray([13, 35, 3, 443]);

//Task10

function joinArrayElementsToMid(array) {

    var joinedNAndNMinusOneElementsArray = [];

    for (var i = 0; i < array.length/2; i++) {
        joinedNAndNMinusOneElementsArray.push( (array[i].toString() + array[array.length - i - 1].toString()) );
    }

    var editedStringFromArray = joinedNAndNMinusOneElementsArray.join("-");

    console.log(editedStringFromArray);
}

joinArrayElementsToMid(['1', '2', '3', '4', '5', '6']);

//Task11

function getSumOfArraysElementsWithSameIndex(array1, array2) {

    var largerArray;
    var smallerArray;
    var sumOfElementsWithSameIndexesArray = [];

    if (array1.length >= array2.length) {
        largerArray = array1;
        smallerArray = array2;
    } else {
        largerArray = array2;
        smallerArray = array1;
    }

    for (var i = 0; i < largerArray.length; i ++) {
        if (i < smallerArray.length) {
            sumOfElementsWithSameIndexesArray.push((largerArray[i] + smallerArray[i]));
        } else {
            sumOfElementsWithSameIndexesArray.push(largerArray[i]);
        }
    }

    console.log(sumOfElementsWithSameIndexesArray);
}

getSumOfArraysElementsWithSameIndex([1,2,3], [4,5,6,0,1]);

//Task12

function deleteArraysElementBySymbol(array, symbol) {

    var arrayWithDeletedElements = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] !== symbol) {
            arrayWithDeletedElements.push(array[i]);
        }
    }

    console.log(arrayWithDeletedElements);
}

deleteArraysElementBySymbol([1,2,3,4,3,"3"], "3");

//Task13

function leaveUniqueElementsInArray(array) {

    var arrayWithUniqueElementsOnly = array.filter(function (a, b) {
        return array.indexOf(a) === b;
    });

    return arrayWithUniqueElementsOnly;
}

function intersection(array1, array2, array3) {

    var intersectedArray = [];

    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            for (var k = 0; k < array1.length; k++) {
                if (array1[i] === array2[j] && array1[i] === array3[k]) {
                    intersectedArray.push(array1[i]);
                }
            }
        }
    }

    return leaveUniqueElementsInArray(intersectedArray);
}

intersection([1, 1,  2, 3], [101, 2, 1, 3, 3, 10], [2, 1, 2, 3, 2]);

//Task14

function addArraysElementsAccordingElementValue(array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {

        for (var j = array[i]; j > 0; j--) {

            newArray.push(array[i]);
        }
    }

    console.log(newArray);
}

addArraysElementsAccordingElementValue([2, 3, 1, 4]);

//Task15

function setArrayToNeededLength(array, neededLength) {

    var arrayWithNeededLength = [];

    for ( var i = 0; i < neededLength; i++) {
        if(i < array.length) {
            arrayWithNeededLength.push(array[i]);
        } else {
            arrayWithNeededLength.push(0);
        }
    }
    console.log(arrayWithNeededLength);
}

setArrayToNeededLength([1,2,3], 3);

//Task16

//part1

function getUniqueThreeMinIntegers(array) {

    var arrayWithFirstUniqueIntegers = array.sort().filter(function (a, b) {
        return array.indexOf(a) === b;
    }).slice(0, 3);

    console.log(arrayWithFirstUniqueIntegers);
}

getUniqueThreeMinIntegers([2, 2, 3, 3, 3, 1, 4, 4, 6, 5, 5, 5, 4, 4]);

//part2

function getFirstThreeNegativeIntegers(array) {

    var arrayWithFirstThreeNegativeIntegers = array.filter(function (a) {
        return a < 0;
    }).slice(0, 3);

    console.log(arrayWithFirstThreeNegativeIntegers);
}

getFirstThreeNegativeIntegers([3, -1, -3, 2, 0, 8, -6, -5]);