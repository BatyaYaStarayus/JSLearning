// Task1

function multiplyOnThreeFactorial() {
    var number = +prompt("Number?");

    alert(number * getFactorial(3));
}

function getFactorial(number) {

    var factorial = 1;

    for(var i = 1; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

multiplyOnThreeFactorial();

// Task2

var add = function (firstNumber) {
     return function (secondNumber) {
        return firstNumber + secondNumber;
    }
};

console.log(add(2)(3));

// Task3

var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];

for (var i = 0; i < numberArray.length; i++) {

    var numberFunction = function() {
        alert(numberArray[i]);
    };

    numberArray[i] = numberFunction;
}


// Task4

function double(number) {
    return number*2
}

function doubleTripple(number) {
    return double(number) * 3;
}

double(9);
double(3);

doubleTripple(3);
doubleTripple(2);
doubleTripple(5);

// Task5

function createCount() {

    var counter = 1;
    return function () {
        return counter++;
    }
}

var makeCount = createCount();

makeCount(); // 1
makeCount(); // 2
makeCount(); // 3
makeCount(); // 4
makeCount(); // 5
makeCount(); // 6

// Task6

function createCount(startFrom) {

    var counter = startFrom;
    return function () {
        return ++counter;
    }
}

var makeCount = createCount(4);

makeCount(); // 5
makeCount(); // 6
makeCount(); // 7
makeCount(); // 8
makeCount(); // 9
makeCount(); // 10
