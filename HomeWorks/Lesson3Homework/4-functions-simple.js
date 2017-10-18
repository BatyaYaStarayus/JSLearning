// Task1

//@todo

function getName() {
    var name = prompt("Your name?");

    alert("Hello, " + name);
}

getName();

// Task2

function double(x) {
    return x * 2;
}

double(6);

// Task3

function range(x, y) {

    var result = 0;

    if (x < y) {
        for (var i = x; i <= y; i++) {
            result += i;
        }
    } else if (x > y) {
        for (var j = x; j >= y; j--) {
            result += j;
        }
    } else {
        result += x;
    }

    return result;
}

range(1, 3);

// Task4

//@todo

function isPrime(y) {

    if (y <= 2) {
        return true;
    } else {
        for (var j = 2; j < y; j++) {
            if (y % j === 0) {
                return false;
            }
        }
    }
}

function getPrimesSumBelow(x) {

    var primeNumbersSum = 0;

    for (var i = x; i > 0; i--) {
        if (isPrime(i) === true) {
            primeNumbersSum += i;
        }
    }
}

console.log(getPrimesSumBelow(10));

// Task5

function isOdd(x) {
    return (x % 2 !== 0);
}

isOdd(9);

// Task6

// @todo

function returnOddNumbersInRangeArray(x, y) {

    var oddNumbersArray = [];

    if(x < y) {
        for (var i = 0, j = x; j <= y; j++) {
            if (isOdd(j) === true) {
                oddNumbersArray[i] = j;
                i++;
            }
        }
    }

    return oddNumbersArray;
}

returnOddNumbersInRangeArray(5, 10);

// Task7

function waitUntillTypingNine() {
    var number = +prompt("Type any number");

    if (number !== 9) {
        waitUntillTypingNine();
    } else {
        alert("Great!");
    }
}

waitUntillTypingNine();
