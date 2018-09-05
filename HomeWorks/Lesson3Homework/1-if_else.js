// Task1

function isZero(n) {
    if (n === 0) {
        console.log("True");
    } else {
        console.log("False");
    }
}

// Test:
// isZero(1);
// isZero(0);
// isZero(-3);

// Task2

function equalsTest(a) {
    if (a === 'test') {
        console.log("True");
    } else {
        console.log("False");
    }
}

// Test:
// equalsTest('test');
// equalsTest('тест');
// equalsTest(3);


// Task3

    // 1st variant

function isTrueFirst(test) {
    if (test === true) {
        console.log("True");
    } else {
        console.log("False");
    }
}

    // 2nd variant

function isTrueSecond(test) {
    (test === true) ? console.log("True") : console.log("False");
}
// или можно просто написать console.log(test ? "True" : "False");

// Task4

function getResult(a, b) {
    var result = a + b;

    if (result > 5) {
        result = 5;
    } else {
        result *= 10;
    }

    console.log(result);
}

// Test:
// getResult(2, 5);
// getResult(3, 1)

// Task5

function isZeroOrTwo(a) {
    if ((a === 0) || (a === 2)) {
        a /= 10;
    } else {
        a += 7;
    }

    console.log(a);
}

// Test
// isZeroOrTwo(5);
// isZeroOrTwo(0);
// isZeroOrTwo(-3);
// isZeroOrTwo(2);



// Task6

function argsRangesFirst(a, b) {
    if ((a <= 1) && (b >= 3)) {
        console(a + b);
    } else {
        console.log("False");
    }
}

// Test:
// argsRangesFirst(1, 3);
// argsRangesFirst(0, 6);
// argsRangesFirst(3, 5);

// Task7

function argsRangesSecond(a, b) {
    if (((a > 2) && (a < 11)) || ((b >= 6) && (b < 14))) {
        a += 2;
    } else {
        a += 5;
    }

    console.log(a);
}

// Test:
// argsRangesSecond(2, 6);
// argsRangesSecond(10, 13);
// argsRangesSecond(3, 15);

// Task8

function getSeasonByNumber(num) {

    var result = "";

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
}

// Task9

function getDaysNamesByLanguage(lang) {

    const ArrRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const ArrEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const ArrDe = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    const langArr = [
        ["ru", ArrRu],
        ["en", ArrEn],
        ["de", ArrDe]
    ];
    
    // тут неправильный синтаксис, если хотелось создать объект нужно использовать скобки {}
    /* 
    const langArr = {
        "ru": ArrRu,
        "en":, ArrEn,
        "de":, ArrDe
    };
    */
    
    // идея хорошая реализация немного нелогичная, удобней будет если это будет в объекте, и тогда условия цикла можно будет поменять на if/else или switch/case:

    var arr = [];

        // 3 if

    // if (lang === "ru") {
    //     arr = ArrRu;
    // } else if (lang === "en") {
    //     arr = ArrEn;
    // } else {
    //     arr = ArrDe;
    // }

        // switch-case

    // switch (lang) {
    //     case "ru":
    //         arr = ArrRu;
    //         break;
    //     case "en":
    //         arr = ArrEn;
    //         break;
    //     case "de":
    //         arr = ArrDe;
    //         break;
    //     default:
    //         arr = ArrEn;
    //         break;
    // }

        // multidimensional array

    for (var i = 0; i < langArr.length; i++) {
        if (lang === langArr[i][0]) {
            arr = langArr[i][1];
            console.log(arr);
        }
    }
}
// Test:
// getDaysNamesByLanguage("en");
// getDaysNamesByLanguage("ru");
// getDaysNamesByLanguage("de");
