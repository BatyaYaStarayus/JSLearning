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