// Task1

//@todo
// did not understand the task, will clarify on Wednesday on the lesson :)

// Task2

function sumTo(n) {

    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

sumTo(10);

// Task3

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function (a, b) {
    return a.age - b.age;
});

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age); // 6

// Task4

function unique(array) {

    var uniqueArray = array.filter(function (a, b) {
        return array.indexOf(a) === b;
    });
    console.log(uniqueArray);
}

unique(["sadasdasd", "a", "b", "a", "c", "sadasdasd", "sadasdasd", "c", "c"]);