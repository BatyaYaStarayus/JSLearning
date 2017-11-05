var inputFieldsArray = document.querySelectorAll("input");

function checkAllInputsAreFilled() {
    var allLengthIsTwo = true;

    for (var i = 0; i < inputFieldsArray.length; i++) {
        if (inputFieldsArray[i].value.length < 2) {
            return allLengthIsTwo = false;
        }
    }
    alert("All inputs are filled");
    // added button to index.html file to focus it in case of all inputs are filled
    document.querySelector("button").focus();
    return allLengthIsTwo;
}

function verifyLength() {
    console.log(this);
    if (this.value.length === 2) {
        if (this !== inputFieldsArray[inputFieldsArray.length - 1]) {
            this.nextElementSibling.focus();
        } else {
            inputFieldsArray[0].focus();
        }
    }
}

for (var i = 0; i < inputFieldsArray.length; i++) {
    inputFieldsArray[i].addEventListener("input", verifyLength);
    inputFieldsArray[i].addEventListener("focus", checkAllInputsAreFilled);
}