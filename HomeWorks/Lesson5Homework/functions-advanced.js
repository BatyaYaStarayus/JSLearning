//@todo
function isNimble(){ return true; }
var canFly = function(){ return true; }; // ani
window.isDeadly = function(){ return true; };

// Task1

function getRandomColorInRGB() {

    var colorsArray = [];
    var randomColor;

    for (var i = 0; i < 3; i++) {
        var randomColorPart = Math.floor((Math.random() * 255) + 1);
        colorsArray.push(randomColorPart);
    }

    randomColor = "(" + colorsArray.join(",") + ")";

    return randomColor;

}

getRandomColorInRGB();

// Task2

function getProductsArray(productsNumber) {

    var productString = "Product ";
    var productsArray = [];

    for (var i = 1; i <= productsNumber; i++) {

        productsArray.push(productString + i);

    }

    return productsArray;
}

getProductsArray(10);

// Task3

function getSumOfPoweredNumberDigits(number, powerTo) {

    var sumOfPoweredNumberDigits = 0;
    var poweredNumberString = Math.pow(number, powerTo).toString();

    for (var i = 0; i < poweredNumberString.length; i++) {
        sumOfPoweredNumberDigits += (parseInt(poweredNumberString[i]));
    }

    return sumOfPoweredNumberDigits;
}

getSumOfPoweredNumberDigits(2, 15);
getSumOfPoweredNumberDigits(2, 1000); // NaN, too big integer)))