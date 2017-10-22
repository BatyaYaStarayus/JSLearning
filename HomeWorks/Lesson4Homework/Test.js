function deleteArraysElementBySymbol(array, symbol) {

    var arrayWithDeletedElements = [];

    for (var i = 0; i < array.length; i++) {
        if ( !(array[i].toString().includes(symbol)) ) {
            arrayWithDeletedElements.push(array[i]);
        }
    }

    console.log(arrayWithDeletedElements);
}

deleteArraysElementBySymbol([1,2,3,4,3,3], "3");