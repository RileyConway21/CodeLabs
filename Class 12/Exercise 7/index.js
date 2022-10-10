var Animal = /** @class */ (function () {
    function Animal(name, age, region) {
        console.log("I am a ".concat(name, ", my age is ").concat(age, " I am from ").concat(region));
    }
    return Animal;
}());
var region = /** @class */ (function () {
    function region(name, age, region) {
    }
    return region;
}());
var regionInstance = new Region("Johnny the Lion", 5, "Africa");
var animalInstance = new Animal("Jaguar", 22, "Africa");
