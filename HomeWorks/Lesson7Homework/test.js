function replaceFinalDot(string) {
    var stringWithReplacedDot;

    if (string[string.length - 1] === ".") {
        stringWithReplacedDot = string.slice(0, string.length - 1);
    }
    return stringWithReplacedDot;
}

function separateWithDots() {

    var inputField = document.querySelector("input");
    var valueString = inputField.value;
    var valueStringWithReplacedDots = valueString.replace(/[.]/g, "");
    var valueStringWithReplacedDotsLength = valueStringWithReplacedDots.length;
    var editedString = "";
    var lengthModuleThree = valueStringWithReplacedDotsLength % 3;

    for (var i = 0; i < valueStringWithReplacedDotsLength; i++) {
        if( ((((i+1) % 3) === lengthModuleThree) || (i + 1 === lengthModuleThree))  ) {
            editedString += (valueStringWithReplacedDots[i] + ".");
        } else {
            editedString += valueStringWithReplacedDots[i];
        }
    }


    document.querySelector("input").value = replaceFinalDot(editedString);
}