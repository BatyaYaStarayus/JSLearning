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