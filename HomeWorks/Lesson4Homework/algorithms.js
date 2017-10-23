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

var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {

    var arrayOfClassNames = obj.className.split(" ");

    if(arrayOfClassNames.indexOf(cls) === -1) {
        arrayOfClassNames.push(cls);
    }

    obj.className = arrayOfClassNames.join(" ");

    return obj;
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"

// Task3

var obj = {
    className: 'open open menu'
}

function removeClass(obj, cls) {

    var arrayOfClassNames = obj.className.split(" ");
    var indexOfClsInArray = arrayOfClassNames.indexOf(cls);

    if(indexOfClsInArray !== -1) {
        arrayOfClassNames.splice(indexOfClsInArray, 1);
        obj.className = arrayOfClassNames.join(" ");
        removeClass(obj, cls);
    }

    return obj;
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

// Task4

var sum = 0;

function getSumOfNumbers() {

    var number = +prompt("Enter any number");

    if( (!isNaN(number)) && (number !== null) ) {
        sum += number;
        getSumOfNumbers();
    }
    return sum;
}

alert(getSumOfNumbers());

// Task5

function fib(n) {

    var fibArray = [1, 1];

    for (var i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    alert(fibArray[n-1]);
}

fib(77);

// Task6

function setStringLengthTwenty(string) {

    var notLongerThanTwentySymbolsString = "";

    if (string.length > 20) {
        notLongerThanTwentySymbolsString += (string.substr(0, 20) + "...");
    } else {
        notLongerThanTwentySymbolsString = string;
    }
    return notLongerThanTwentySymbolsString;
}

setStringLengthTwenty("123456789012345678901234");

// Task7

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function getMaxValueWorker(obj) {

    var workersArray = [];
    var valuesArray = [];
    var i;

    for (i in obj) {
        workersArray.push(i);
        valuesArray.push(obj[i]);
    }

    var maxValue = valuesArray.sort()[valuesArray.length - 1];
    var workerWithMaxValue = workersArray[valuesArray.indexOf(maxValue)];

    return workerWithMaxValue;
}

getMaxValueWorker(tasksCompleted);


