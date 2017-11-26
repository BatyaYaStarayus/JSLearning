// Task1

function askAndScrollParameters() {
    var scrollXParameter = +prompt("X scroll?");
    var scrollYParameter = +prompt("Y scroll?");

    window.scrollTo(scrollXParameter, scrollYParameter);
}

// Task2

// put the stuff below into body tag
// <iframe></iframe>
// <iframe></iframe>
// <iframe></iframe>
// <iframe></iframe>

var iFramesArray = window.frames;

for (var i = 0; i < iFramesArray.length; i++) {
    console.log(iFramesArray[i]);
}

// Task3

// put the stuff below into body tag
// <iframe></iframe>
// <div></div>
// <h1></h1>
// <p></p>

var iFrame = document.querySelector("iframe");
var iFrameParent = iFrame.parentNode;
var allIFrameSiblings = iFrame.parentNode.children;

for(var i = 0; i < allIFrameSiblings.length; i++) {
    if ( allIFrameSiblings[i] !== iFrame ) {
        iFrameParent.removeChild(allIFrameSiblings[i]);
        i--;
    }
}

// Task4

// put the stuff below into body tag
// <iframe></iframe>


var iFrame = document.querySelector("iframe");

function notifyIFrameLoaded() {
    var notificationDiv = document.createElement("div")

    notificationDiv.innerHTML = "iFrame is loaded";
    document.body.appendChild(notificationDiv);
}

iFrame.addEventListener("load", notifyIFrameLoaded);

// Task5

var neededParameters =
    "width=400, " +
    "height=500, " +
    "status=yes, " +
    "location=no, " +
    "resizable=yes, " +
    "scrollbars=yes";

window.open("https://www.google.com", "_blank", neededParameters);

// Task6

var newWindow;

function showWindow(url) {
    newWindow = window.open(url);

    setTimeout(closeWindow, 5000);
}

function closeWindow() {
    newWindow.close();
    alert("You had 5 seconds and lost them");
}

showWindow("https://www.google.com");

// Task7

//todo

//chrome - vendor:Google, present window.navigator.chrome
//ff - via window.navigator.userAgent - Firefox in the end of string

// Task8

//todo

// Task9

function checkCookieEnabled() {
    if (this.navigator.cookieEnabled) {
        console.log("+");
    } else {
        console.log("-");
    }
}

checkCookieEnabled();

// Task10

//todo

// Task11

function getSize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var sizeArray = [width, height];

    return sizeArray;
}

function setClass() {
    if (getSize()[0] < 1366 && getSize()[1] < 800) {
        document.body.setAttribute("class", "little-screen");
    } else {
        document.body.setAttribute("class", "big-screen");
    }
}

window.addEventListener("resize", setClass);


// Task12

//todo

// Task13

function showHostnameAndPort() {
    var hostName = this.location.hostname;
    var port = this.location.port;

    console.log("Hostname is " + hostName + ", port is " + port);
}

showHostnameAndPort();