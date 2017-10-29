//DONE

// Task1

function multiplyArray(array, number) {

    var multipliedArray = array.map(function (a) {
        return a * number
    })

    return multipliedArray;
}
multiplyArray([1,2,3], 6); // [ 6, 12, 18 ]

// Task2

function getData(object, data) {

    var newObject = {};

    newObject[data] = object[data];

    return newObject[data];

}

function createPersonsGetter( data ) {

    var obj = {};

    for (var i in data) {
        obj[i]  = getData(data, i);
    }

    return obj;
}

createPersonsGetter({ name: "Lily", lastName: "Karpenko", age: 24, gender: "female" });

