var numbersArray = [];

function getNumbersArray() {

    var number = +prompt("Enter any number");

    if( (!isNaN(number)) && (number !== null)) {
        numbersArray.push(number);
        getNumbersArray();
    }

    return getSumOfNumbersInArray(numbersArray);
}

function getSumOfNumbersInArray(array) {

    var sum = 0;

    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;

}

alert(getNumbersArray());