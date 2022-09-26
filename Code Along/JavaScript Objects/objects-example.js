// let firstName = "Jerry";
// let age = 405;
// let favoriteIceCream = `Moose Tracks`;

let person = {
    firstName: "Jerry",
    age: 405,
    favoriteIceCream: `Moose Tracks`,
vehicles: {
    model: 'Hyundai'
   }
 }

console.log(`My name is ${person.firstName}.`);
console.log(`My age is ${person.age}`);
console.log(`My favorite type of ice cream is ${person["favoriteIceCream"]}`);
console.log(`I own a ${person.vehicles.model}`)