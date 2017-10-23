var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function getMaxValueWorker(obj) {

    var workersArray = [];
    var valuesArray = [];
    var i;

    for (i in obj) {
        workersArray.push(i);
        valuesArray.push(obj[i]);
    }

    var maxValue = valuesArray.sort()[valuesArray.length - 1];
    var workerWithMaxValue = workersArray[valuesArray.indexOf(maxValue)];

    return workerWithMaxValue;
}

getMaxValueWorker(tasksCompleted);