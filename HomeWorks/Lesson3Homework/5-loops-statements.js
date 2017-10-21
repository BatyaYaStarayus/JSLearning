// Task1

function getNumberTypeInRangeFromZero (rangeEnd) {

    var isOdd = " is odd";
    var isEven = " is even";

    for (var i = 0; i <= rangeEnd; i++) {
        if (i%2 === 0) {
            console.log(i + isEven);
        } else {
            console.log(i + isOdd);
        }
    }
}

getNumberTypeInRangeFromZero(15);

// Task2

function oneToHundredIteration() {

    var multiplesOfThree = "Fizz";
    var multiplesOfFive = "Buzz";

    for (var i = 1; i <= 100; i++) {
        if ( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log(multiplesOfThree + multiplesOfFive);
        } else if (i % 3 === 0) {
            console.log(multiplesOfThree);
        } else if (i % 5 === 0) {
            console.log(multiplesOfFive);
        } else {
            console.log(i);
        }
    }
}

oneToHundredIteration();

// Task3

function getGreatestCommonDivisor(numberOne, numberTwo) {

    var largerNumber;
    var smallerNumber;
    var greatestCommonDivisor;

    if (numberOne >= numberTwo) {
        largerNumber = numberOne;
        smallerNumber = numberTwo;
    } else {
        largerNumber = numberTwo;
        smallerNumber = numberOne;
    }

    for (var i = smallerNumber; i > 0; i--) {
        if ( (largerNumber % i === 0) && (smallerNumber % i === 0) ) {
            greatestCommonDivisor = i;
            console.log(greatestCommonDivisor);
            return;
        }
    }
}

getGreatestCommonDivisor(24, 16);

// Task4

function getMultiplesOfThreeAndFive() {

    var sum = 0;

    for (var i = 0; i < 1000; i++) {
        if ( (i % 3 === 0) || (i % 5 === 0) ) {
            sum += i;
        }
    }

    console.log(sum);
}

getMultiplesOfThreeAndFive();

// Task5

function getNumbersDivisorsOnThreeAndFive() {

    for (var i = 10; i <= 90; i++) {
        if ( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log(i);
        }
    }
}

getNumbersDivisorsOnThreeAndFive();

// Task6

function getReversedOddNumbers() {

    for (var i = 70; i >= 11; i--) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}

getReversedOddNumbers();

// Task7

function getReversedEvenNumbersDivisorsOnTwoAndThree() {

    for (var i = 78; i >= 13; i--) {
        if( (i % 2 === 0) && (i % 3 === 0) ) {
            console.log(i);
        }
    }
}

getReversedEvenNumbersDivisorsOnTwoAndThree();