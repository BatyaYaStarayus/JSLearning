// Task1

var i = 1;

function printNumbersInterval() {
    console.log(i);
    i++;
}

for(var j = 100; j <= 2000; j += 100) {
    setTimeout(printNumbersInterval, j);
}

// Task2

var i = 1;

function showAndIncrementNumber() {
    if (i <= 20) {
        console.log(i)
        i++;
    }
}

setInterval(showAndIncrementNumber, 500);


// Task3

//todo

// Task4

// add to index.html
// <div></div>

function showCurrentTime() {
    var div = document.querySelector("div");
    var dateObject = new Date();

    var currentHours = dateObject.getHours();
    var currentMinutes = dateObject.getMinutes();
    var currentSeconds = dateObject.getSeconds();

    div.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds;
}

setInterval(showCurrentTime, 10);

// Task5

//todo

// Task6

function showTimeToMidnight() {
    var div = document.querySelector("div");
    var dateObject = new Date();

    var currentHours = dateObject.getHours();
    var currentMinutes = dateObject.getMinutes();
    var currentSeconds = dateObject.getSeconds();

    var hoursToMidnight = 23 - (+currentHours);
    var minutesToMidnight = 59 - (+currentMinutes);
    var secondsToMidnight = 59 - (+currentSeconds);

    var timeToMidnightArray = [
        hoursToMidnight.toString(),
        minutesToMidnight.toString(),
        secondsToMidnight.toString()
    ];

    for (var i = 0; i < timeToMidnightArray.length; i++) {
        if (timeToMidnightArray[i].length === 1) {
            timeToMidnightArray[i] = "0" + timeToMidnightArray[i];
        }
    }

    div.innerHTML = timeToMidnightArray.join(":");
}

setInterval(showTimeToMidnight, 10);

// Task7

//todo

// Task8

//todo