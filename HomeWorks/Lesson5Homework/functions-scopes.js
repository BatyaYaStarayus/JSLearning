// Task1

myname = "global";
function func() {
    console.log(myname); // undefined
    var myname = "local";
    console.log(myname); // "local"
}
func();

// Task2

var a = 90100;
function someFunc(){
    if(false){
        var a = 1;
    } else {
        var b = 2;
    }
    console.log(b); // 2
    console.log(a); // undefined
}
someFunc();

// Task3

function test() {
    this; // Window
}
test();

// Task4

// Task5

a(); //ok
b(); //error

var b = function(){
    alert( 'function b');
}

function a(){
    alert( 'function a' );
}

// function b() was made via Function Expression, so it is not possible to call it before the creation

// Task6

var i = 0;

for (; i< 10; i ++) {
    console.log(i)
}

// will log in console number from 0 to 9

// Task7

function getFactorial(number) {

    var factorial = 1;

    for (var i = number; i > 1; i--) {
        factorial *= i;
    }

    if (factorial % 2 === 0) {
        return factorial*2;
    } else {
        return factorial;
    }
}

getFactorial(5);

// Task8

//@todo

function getRandomString() {

    var string = "";
    var numbers = /1-0/;

}

// Task9

// was absent in homework file :)

// Task10

function getUniqueElementsArray(array) {

    var uniqueArray = array.filter(function (a, b) {
        return array.indexOf(a) === b;
    });

    return uniqueArray;
}

function joinArrays(array1, array2, array3) {

    var joinedToStringArrays = (array1 + "," + array2 + "," + array3);
    var joinedArray = joinedToStringArrays.split(",");

    return getUniqueElementsArray(joinedArray);
}

joinArrays([1, 2, 3], [101, 2, 1, 10], [2, 1]);

// Task11

function flatten(array) {

    var arrayToString = array.join().split(",");

    for (var i = 0; i < arrayToString.length; i++) {
        arrayToString[i] = parseFloat(arrayToString[i]);
    }

    return arrayToString;

}

flatten([1, [2], [3, [[[4.5]]]]]);

// Task12

function getUniqueElementsArray(array) {

    var uniqueArray = array.filter(function (a, b) {
        return array.indexOf(a) === b;
    });

    return uniqueArray;
}

getUniqueElementsArray([1, 2, 3, 101, 2, 1, 10, 2, 1]);