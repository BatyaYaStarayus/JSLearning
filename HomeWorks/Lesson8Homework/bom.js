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

//index.html
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//     <div id="browser"></div>
//     <div id="platform"></div>
//     <script src="test.js"></script>
//     </body>
//     </html>

var divBrowser = document.querySelector("#browser");
var divPlatform = document.querySelector("#platform");

var userAgentValue = navigator.userAgent;
var vendorValue = window.navigator.vendor;
var platformValue = window.navigator.platform;

function parseUserAgentValue() {
    return userAgentValue.split(" ");
}

function isChrome() {
    if (vendorValue === "Google Inc.") {
        return "Chrome";
    } else {
        return false;
    }
}

function isFireFox() {
    if (parseUserAgentValue()[parseUserAgentValue().length - 1].match(/Firefox/g)) {
        return "FireFox";
    } else {
        return false;
    }
}

function isIE() {
    for(var i = 0; i < parseUserAgentValue().length; i++) {
        if(parseUserAgentValue()[i].match(/MSIE|Trident/g, )) {
            return "Explorer";
        } else {
            return false;
        }
    }
}

function isOpera() {
    if (parseUserAgentValue()[parseUserAgentValue().length - 1].match(/OPR/g)) {
        return "Opera";
    } else {
        return false;
    }
}

function isSafari() {
    if (vendorValue === "Apple") {
        return "Safari";
    } else {
        return false;
    }
}

function getBrowserName() {
    return ( isChrome() || isFireFox() || isIE() || isOpera() || isSafari() );
}

function getPlatform() {
    return platformValue;
}

function showBrowserAndPlatform() {
    divBrowser.innerHTML = "Browser: " + getBrowserName();
    divPlatform.innerHTML = "Platform: " + getPlatform();
}

showBrowserAndPlatform();

// Task8

//index.html
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//     <div id="chrome" class="browsers" hidden>Chrome</div>
// <div id="fireFox" class="browsers" hidden>FireFox</div>
// <div id="ie" class="browsers" hidden>Explorer</div>
// <div id="opera" class="browsers" hidden>Opera</div>
// <div id="safari" class="browsers" hidden>Safari</div>
// <script src="test.js"></script>
//     </body>
//     </html>

var browsersArray = document.querySelectorAll(".browsers");

// use the code from Task7

function showCurrentBrowser() {
    for(var i = 0; i < browsersArray.length; i++) {
        if(browsersArray[i].innerHTML === getBrowserName()) {
            browsersArray[i].removeAttribute("hidden");
        }
    }
}

showCurrentBrowser();

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

// use the code from Task7, the rest of needed code is below

//made for Chrome and Firefox browsers only

var chromeObject = {
    name: "Chrome",
    latestVersion: "62.0.3202.94",
    downloadLink: "https://www.google.com/chrome/browser/desktop/index.html"
};

var fireFoxObject = {
    name: "FireFox",
    latestVersion: "57.0",
    downloadLink: "https://www.mozilla.org/en-US/firefox/new/"
};

var browsersArray = [chromeObject, fireFoxObject];

function getCurrentBrowserVersion(browserName) {
    var browserNameAndVersion;
    var currentBrowserVersion;

    switch(browserName.toLowerCase()) {
        case "chrome":
            browserNameAndVersion = parseUserAgentValue()[parseUserAgentValue().length - 2];
            currentBrowserVersion = browserNameAndVersion.split("/")[1];

            return currentBrowserVersion;
            break;
        case "firefox":
            browserNameAndVersion = parseUserAgentValue()[parseUserAgentValue().length - 1];
            currentBrowserVersion = browserNameAndVersion.split("/")[1];
            return currentBrowserVersion;
            break;
        default:
            return "Unknown browser";
    }
}

function getLatestBrowserVersion(browserName) {
    for(var i = 0; i < browsersArray.length; i++) {
        if(browsersArray[i].name.toLowerCase() ===  browserName.toLowerCase()) {
            return browsersArray[i].latestVersion;
        }
    }
}

function isCurrentVersionTheLatest() {
    var currentVersionArray = getCurrentBrowserVersion(getBrowserName()).split(".");
    var latestVersionArray = getLatestBrowserVersion(getBrowserName()).split(".");

    for(var i = 0; i < currentVersionArray.length; i++) {
        if(currentVersionArray[i] < latestVersionArray[i]) {
            return false;
        } else {
            return true;
        }
    }
}

function showUpdatePage() {
    var updatePage;

    for(var i = 0; i < browsersArray.length; i++) {
        if(browsersArray[i].name.toLowerCase() === getBrowserName().toLowerCase()) {
            updatePage = browsersArray[i].downloadLink;
        }
    }

    if(!isCurrentVersionTheLatest()) {
        window.open(updatePage);
    } else {
        alert("You have the latest browser version");
    }
}

showUpdatePage();

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