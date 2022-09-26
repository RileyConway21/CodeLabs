// let people = ["Rick", "Freddy", "Micheal", "Joseph"];
// console.log(`There are ${people,length} people.`);

// let people = {
//     0: 'Rick',
//     1: 'Freddy',
//     2: 'Micheal',
//     3: 'Joseph',
//     length: 4,
//     map: function (callback){
//         let newArr = [];
//         for(let i = 0; i < this.length; i++){
//             newArr.push(callback(this[i]))
//         }
//         return newArr;
//     }
// }

// // console.log(`There are ${people.length} people.);

let introductions = people.map((person)=>{
    return `My name is ${person}.`
})

console.log(introduction)