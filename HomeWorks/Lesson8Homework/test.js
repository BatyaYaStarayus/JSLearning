
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
