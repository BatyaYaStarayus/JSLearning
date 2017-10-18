// Task1

for (var i = 1; i <= 50; i++) {
    console.log(i);
}

// Task2

var array = [1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Task3

var array = [2, 3, 4, 5];
var result = 1;

for (var i = 0; i < array.length; i++) {
    result *= array[i];
}

console.log(result);

// Task4

var obj = {
    Minsk: "Belarus",
    Moscow: "Russia",
    Kyiv: "Ukraine"
};

var p;
var string = " - is ";

for (p in obj) {
    console.log(p + string + obj[p]);
}

// Task5

var n = 1000;

for (var num = 0; n > 50; num++) {
    n /= 2;
}

console.log(n);
console.log(num);

// Task6

var array = [2, 5, 9, 15, 0, 4];

for (var i = 0; i < array.length; i++) {
    if ( (array[i] > 3) && (array[i] < 10) ) {
        console.log(array[i]);
    }
}

// Task7

var monthsArray = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var months = new Date();

for (var i = 0; i < monthsArray.length; i++) {
    if (i+1 === months.getMonth()) {
        console.log("%c" + monthsArray[i], 'color: red; font-weight: bold;')
    } else {
        console.log(monthsArray[i]);
    }
}

