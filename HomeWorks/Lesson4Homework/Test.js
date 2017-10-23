var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];

function getStringAndReverseSymbols(array) {

    var editedString;
    var arraysElement = [];
    var arrayWithStrings = []

    for (var i = 0; i < array.length; i++) {
        arraysElement = array[i].split("");
        arraysElement.reverse();
        arraysElement.join("");
        arrayWithStrings.push(arraysElement);
    }

    editedString = arrayWithStrings.join(" ");

    return editedString;
}

getStringAndReverseSymbols(arr);