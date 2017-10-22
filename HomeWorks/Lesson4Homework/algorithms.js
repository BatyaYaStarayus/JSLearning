// Task1

function isPrime(y) {

    if ((y <= 3) && (y !== 1)) {
        return true;
    } else {
        for (var j = 2; j < y; j++) {
            if (y % j === 0) {
                return false;
            }
        }
        return true;
    }
}

function getPrimeNumbersInRange(numberOne, numberTwo) {

    var largerNumber;
    var smallerNumber;
    var primeNumbersArray = [];

    if (numberOne >= numberTwo) {
        largerNumber = numberOne;
        smallerNumber = numberTwo;
    } else {
        largerNumber = numberTwo;
        smallerNumber = numberOne;
    }

    for (var i = smallerNumber; i <= largerNumber; i++) {
        if (isPrime(i)) {
            primeNumbersArray.push(i);
        }
    }

    console.log(primeNumbersArray);
}

getPrimeNumbersInRange(2, 10);

// Task2

