// Task1

var n;

if (n === 0) {
    console.log("True");
} else {
    console.log("False");
}

// Task2

var a;
var test;

if (a === test) {
    console.log("True");
} else {
    console.log("False");
}

// Task3

    // 1st variant

var test;

if (test === true) {
    console.log("True");
} else {
    console.log("False");
}

    // 2nd variant

var test;

(test === true) ? console.log("True") : console.log("False");

// Task4

var a;
var b;

var result = a + b;

if (result > 5) {
    result = 5;
} else {
    result*=10;
}

console.log(result);

// Task5

var a;

if ( (a === 0) || (a === 2) ) {
    a/=10;
} else {
    a+=7;
}

console.log(a);

// Task6

var a;
var b;

if ( (a <= 1) && (b >= 3) ) {
    console(a + b);
} else {
    console.log("False");
}

// Task7

var a;
var b;

if ( ((a > 2) && (a < 11)) || ((b >= 6) && (b < 14)) ) {
    a+=2;
} else {
    a+=5;
}

console.log(a);

// Task8

var num;
var result;

switch (num) {
    case 1:
        result = "Winter";
        break;
    case 2:
        result = "Spring";
        break;
    case 3:
        result = "Summer";
        break;
    case 4:
        result = "Autumn";
        break;
    default:
        result = "Winter is coming";
        break;
}

// Task9

const ArrRu;
const ArrEn;
const ArrDe;

var arr;
var lang;

    // 3 if

if (lang == "ru") {
    arr = ArrRu;
} else if (lang == "en") {
    arr = ArrEn;
} else {
    arr = ArrDe;
}

    // switch-case

switch (lang) {
    case "ru":
        arr = ArrRu;
        break;
    case "en":
        arr = ArrEn;
        break;
    case "de":
        arr = ArrDe;
        break;
    default:
        arr = ArrEn;
        break;
}

    // multidimensional array

