//DONE

// Task1

var str = "aaa@bbb@ccc";

var newStr = str.replace(/@/g, "!");

console.log(newStr);

// Task2

var str = "aaa bbb ccc";

// var newStr = str.substr(4, 3);

// var newStr = str.substring(4, 7);

var newStr = str.slice(4,7);

console.log(newStr);

// Task3

var fullDate = "2025-12-31";
var length = fullDate.length;

var year = fullDate.substr(0, 4);
var months = fullDate.substr(5, 2);
var date = fullDate.substr(length - 2, length - 1);

var newDate = date + "/" + months + "/" + year;

console.log(newDate);

// Task4

var str = "js";

var newStr = str.toUpperCase();

console.log(newStr);

// Task5

var str = "я учу javascript!";

var length = str.length;

console.log(length);

// Task6

function setStringLength(string, requiredLength) {

    var stringWithRequiredLength = "";

    if (string.length > requiredLength) {
        stringWithRequiredLength = string.substr(0, requiredLength) + "...";
    } else  {
        stringWithRequiredLength = string;
    }

    console.log(stringWithRequiredLength);
}

setStringLength("123456789", 4);

// Task7

var str = "я учу javascript!";

var array = str.split(" ");

console.log(array);

// Task8

var arr = ['я', 'учу', 'javascript', '!'];

var str = arr.join(" ");

console.log(str);

// Task9

function setFirstLetterToUpperCase(string) {

    var firstUpperCasedLetter = string.substr(0, 1).toUpperCase();
    var restString = string.substr(1, string.length - 1);

    var stringWithFirstUpperCasedLetter = firstUpperCasedLetter + restString;

    console.log(stringWithFirstUpperCasedLetter);

    return stringWithFirstUpperCasedLetter;

}

setFirstLetterToUpperCase("sdasdasdasddasd");

// Task10

function setFirstWordsLettersToUpperCase(string) {

    var wordsArrays = string.split(" ");

    // using function from Task9 to get arrays elements all with first capital letter

    for (var i = 0; i < wordsArrays.length; i++) {
        wordsArrays[i] = setFirstLetterToUpperCase(wordsArrays[i]);
    }

    var editedString = wordsArrays.join(" ");

    console.log(editedString);

}

setFirstWordsLettersToUpperCase("hello, my name is Ivan");

// Task11

function replaceUnderscoreByFirstLetterUpperCase(string) {

    var wordsArrays = string.split("_");

    // using function from Task9 to get arrays elements all with first capital letter

    for (var i = 1; i < wordsArrays.length; i++) {
        wordsArrays[i] = setFirstLetterToUpperCase(wordsArrays[i]);
    }

    var editedString = wordsArrays.join("");

    console.log(editedString);

}

replaceUnderscoreByFirstLetterUpperCase("var_test_text");

// Task12

function replaceUpperCasedLettersByUnderscoreAndLowerCased(string) {

    var stringSymbolsArray = string.split("");
    var editedString = "";

    for (var i = 0; i < stringSymbolsArray.length; i++) {
        if (stringSymbolsArray[i].match(/[A-Z]/g)) {
            editedString += ("_" + stringSymbolsArray[i].toLowerCase());
        } else {
            editedString += stringSymbolsArray[i];
        }
    }

    console.log(editedString);
}

replaceUpperCasedLettersByUnderscoreAndLowerCased("varTestText");

// Task13

function divideStringByThreeSymbolsFromTheEnd(string) {

    var reversedStringArray = string.split("").reverse();
    var editedReversedString = "";

    for (var i = 0; i < reversedStringArray.length; i++) {

        if ((i + 1) % 3 === 0) {
            editedReversedString += (reversedStringArray[i] + " ");
        } else {
            editedReversedString += reversedStringArray[i];
        }
    }

    var editedString = editedReversedString.split("").reverse().join("");

    console.log(editedString);
}

divideStringByThreeSymbolsFromTheEnd("12345678");