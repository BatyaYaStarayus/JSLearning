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

//index.html file
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//     <div id="timeScreen"></div>
//     <div id="buttonsBlock">
//     <button id="startButton">Start</button>
//     <button id="stopButton">Stop</button>
//     <button id="pauseContinueButton">Pause</button>
//     </div>
//     <script src="test.js"></script>
//     </body>
//     </html>

var startButton = document.querySelector("#startButton");
var stopButton = document.querySelector("#stopButton");
var pauseContinueButton = document.querySelector("#pauseContinueButton");
var timeScreen = document.querySelector("#timeScreen");

var currentTime = [0, 0, 0, 0];
var startTime = [0, 0, 0, 0];

var startCount;

timeScreen.innerHTML = showTimeTwoNumbers(currentTime);

startButton.addEventListener("click", startTimer);

function startTimer() {
    startCount = setInterval(increaseTime, 10);

    // согласна с тем что упри нажатии на старт нужно бы как то запретить пользователю туда снова нажимать поэтому я думаю что 
    // тут лучше исопользовать менее сложную логику например на click добавлять класс clicked и в функции startTimer проверять на наличие
    // этого класса - если это первый раз то тогда вся логика как есть - если следующий раз то тогда просто return из функции
    startButton.removeEventListener("click", startTimer);

    // тут то же самое лучше сразу же добавить обработчик события при загрузке странице но отслеживать по какому что флагу что остановить
    // таймер сейчас возможно например
    stopButton.addEventListener("click", stopTimer);
    pauseContinueButton.addEventListener("click", pauseTimer);
}

function stopTimer() {
    clearInterval(startCount);

    startButton.addEventListener("click", startTimer);

    pauseContinueButton.removeEventListener("click", pauseTimer);
    pauseContinueButton.removeEventListener("click", continueTimer);

    pauseContinueButton.innerHTML = "Pause";
    timeScreen.innerHTML = showTimeTwoNumbers(startTime);

    currentTime = [0, 0, 0, 0];
}

function pauseTimer() {
    clearInterval(startCount);

    timeScreen.innerHTML = showTimeTwoNumbers(currentTime);
    pauseContinueButton.innerHTML = "Continue";

    pauseContinueButton.addEventListener("click", continueTimer);

    pauseContinueButton.removeEventListener("click", pauseTimer);
}

function continueTimer() {
    startCount = setInterval(increaseTime, 10);

    pauseContinueButton.innerHTML = "Pause";

    pauseContinueButton.addEventListener("click", pauseTimer);

    pauseContinueButton.removeEventListener("click", continueTimer);
}

function increaseTime() {
    currentTime[3]++;

    if(currentTime[3] === 100) {
        currentTime[3] = 0;
        currentTime[2]++;

        if(currentTime[2] === 60) {
            currentTime[2] = 0;
            currentTime[1]++;

            if(currentTime[1] === 60) {
                currentTime[1] = 0;
                currentTime[0]++;
            }
        }
    }
    timeScreen.innerHTML = showTimeTwoNumbers(currentTime);
}

function showTimeTwoNumbers(time) {
    for(var i = 0; i < time.length; i++) {
        if(time[i].toString().length === 1) {
            time[i] = 0 + time[i].toString();
        }
    }

    return time.join(":");
}

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
    // все ок но сделать бы красиво чтобы показыватло например 
    // 06:06:06 а не 6:6:6
}

setInterval(showCurrentTime, 10);

// Task5

//index.html file
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//     <div id="timeScreen"></div>
//     <div id="buttonsBlock">
//     <button id="startButton">Start</button>
//     <button id="stopButton">Stop</button>
//     <button id="pauseContinueButton">Pause</button>
//     </div>
//     <script src="test.js"></script>
//     </body>
//     </html>

var startButton = document.querySelector("#startButton");
var stopButton = document.querySelector("#stopButton");
var pauseContinueButton = document.querySelector("#pauseContinueButton");
var timeScreen = document.querySelector("#timeScreen");

var currentTime = [0, 1, 0, 0];
var startTime = [0, 1, 0, 0];

var startCount;

timeScreen.innerHTML = showTimeTwoNumbers(currentTime);

startButton.addEventListener("click", startTimer);

function startTimer() {
    startCount = setInterval(increaseTime, 10);

    startButton.removeEventListener("click", startTimer);

    stopButton.addEventListener("click", stopTimer);
    pauseContinueButton.addEventListener("click", pauseTimer);
}

function stopTimer() {
    clearInterval(startCount);

    startButton.addEventListener("click", startTimer);

    pauseContinueButton.removeEventListener("click", pauseTimer);
    pauseContinueButton.removeEventListener("click", continueTimer);

    pauseContinueButton.innerHTML = "Pause";
    timeScreen.innerHTML = showTimeTwoNumbers(startTime);

    currentTime = [0, 1, 0, 0];
}

function pauseTimer() {
    clearInterval(startCount);

    timeScreen.innerHTML = showTimeTwoNumbers(currentTime);
    pauseContinueButton.innerHTML = "Continue";

    pauseContinueButton.addEventListener("click", continueTimer);

    pauseContinueButton.removeEventListener("click", pauseTimer);
}

function continueTimer() {
    startCount = setInterval(increaseTime, 10);

    pauseContinueButton.innerHTML = "Pause";

    pauseContinueButton.addEventListener("click", pauseTimer);

    pauseContinueButton.removeEventListener("click", continueTimer);
}

function increaseTime() {
    currentTime[3]--;

    if(currentTime[3] < 0) {
        currentTime[3] = 99;
        currentTime[2]--;

        if(currentTime[2] < 0) {
            currentTime[2] = 59;
            currentTime[1]--;

            if(currentTime[1] < 0) {
                currentTime[1] = 59;
                currentTime[0]--;
            }
        }
    }
    timeScreen.innerHTML = showTimeTwoNumbers(currentTime);
}

function showTimeTwoNumbers(time) {
    for(var i = 0; i < time.length; i++) {
        if(time[i].toString().length === 1) {
            time[i] = 0 + time[i].toString();
        }
    }

    return time.join(":");
}

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

//index.html file
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//     <img>
//     <script src="test.js"></script>
//     </body>
//     </html>

var image = document.querySelector("img");
var framesCounter = 1;

function startAnimation() {
    image.src = "Frames/Frame" + framesCounter + ".png";

    if(framesCounter === 6) {
        framesCounter = 1;
    } else {
        framesCounter++;
    }
}

// класс =) интересный подход =)
setInterval(startAnimation, 200);

// Task8

//index.html file
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//     <input type="text" id="phoneNumber" placeholder="Type Your phone number">
//     <button>Enter</button>
//     <script src="test.js"></script>
//     </body>
//     </html>

var inputPhoneNumber = document.querySelector("#phoneNumber");
var buttonEnter = document.querySelector("button");

var message = document.createElement("span");

buttonEnter.addEventListener("click", verifyNumberLength);

function verifyNumberNotNan() {
    if(isNaN(+inputPhoneNumber.value)) {
        return false;
    }
    return true;
}

function createSpan(patternMatches) {
    if(patternMatches) {
        message.innerHTML = "OK";
        message.style.color = "green";
    } else {
        message.innerHTML = "ERROR";
        message.style.color = "red";
    }

    document.body.appendChild(message);
}

function deleteSpan() {
    document.body.removeChild(message);

    inputPhoneNumber.value = "";
    inputPhoneNumber.setAttribute("placeholder", "Type Your phone number");
}

function verifyNumberLength() {
    if( (inputPhoneNumber.value.length === 8) && (verifyNumberNotNan()) ) {
        createSpan(true);
    } else {
        createSpan(false);
    }

    setTimeout(deleteSpan, 4000);
}
