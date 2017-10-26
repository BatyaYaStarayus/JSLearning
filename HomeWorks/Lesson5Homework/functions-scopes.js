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

a(); //ok
b(); //error

var b = function(){
    alert( 'function b');
}

function a(){
    alert( 'function a' );
}

// function b() was made via Function Expression, so it is not possible to call it before the creation

// Task5
// Task6
// Task7
// Task8
// Task9
// Task10

//@todo
function getUniqueElementsArray(array) {

    var uniqueArray = array.filter(function (a, b) {
        return array.indexOf(a) === b;
    });

    return uniqueArray;
}

function joinArrays(array1, array2, array3) {

    var joinedToStringArrays= array1 + ", " + array2 + ", " + array3;
    var joinedArray = joinedToStringArrays.split(",");

    return getUniqueElementsArray(joinedArray);
}

joinArrays(([1, 2, 3], [101, 2, 1, 10], [2, 1]));

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