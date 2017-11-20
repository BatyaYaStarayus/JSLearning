function isContextEqualTo(contextLink) {
    console.log(contextLink === this);
}

function name() {
    isContextEqualTo(window); // window
}

var name = "Vasya";

var user = {
    getName: function () {
        isContextEqualTo(window); // window
        isContextEqualTo(user); // user
    }
};

console.log(user.getName()); //

var getName = user.getName;

console.log(getName()); // ??

user.getName = name;

console.log(user.getName()); // ??

user.getName.call(window); // ??