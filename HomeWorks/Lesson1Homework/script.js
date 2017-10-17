// Task 1

var str = "Have a good day!";

console.log(str);

// Task 2

var age = 25;

console.log(age);

age = undefined;

// Task 3

var info = {
    name: "Ivan",
    age: 28
};

console.log(info.name);
console.log(info.age);

var name = info.name;

console.log(name);

delete info.name;

console.log(name);

// Task 4

var customArray = [1, 2, 3];

console.log(customArray);

// тут нужно было не 1 элемент массива перезаписать, а нужно было перезаписать все значения массива на 0, то есть customArray = 0
customArray[0] = 10;

console.log(customArray);

// Task 5

var student = "Ivan";

console.log(student);

student = "Ivan Kozlov";

console.log(student);

// Task 6

var complex = [];

complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = info;

console.log(complex[2]);

// Task 7

var complexObj = {};

complexObj.name = "Ivan";
complexObj.age = 28;
complexObj.friends = ["Andrew", "Volodymyr", "Alex"];
complexObj.socLinks = {
    facebook: "hmmm... no, You can't :)",
    googlePlus: "eeehhh... I don't use it also ;)"
};

var templateNameText = `My name is ${complexObj.name}. `;
var templateAgeText = `I am ${complexObj.age} years old. `;
var templateFriendsText = `I have a lot of friends, but the best one is: ${complexObj.friends[0]}. `;
var templateSocLinksText = `You can find me on facebook: ${complexObj.socLinks.facebook} or on goole groups: ${complexObj.socLinks.googlePlus}.`;

console.log(templateNameText + templateAgeText + templateFriendsText + templateSocLinksText);
