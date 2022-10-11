var user = /** @class */ (function () {
    function user(name, age, height) {
        console.log("I am ".concat(name, ". I am ").concat(height, " feet tall and I am ").concat(age));
    }
    return user;
}());
var personInstance = new user("Amy", 25, "5'6");
