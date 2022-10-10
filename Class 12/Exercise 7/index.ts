class Animal {
    constructor(name:string, age:number, region:string) {
        console.log(`I am a ${name}, my age is ${age} I am from ${region}`)
    }
  }  
  
  class region {
    constructor(name:string, age:number, region:string){}
  }

let regionInstance = new Region("Johnny the Lion", 5, "Africa");
  const animalInstance = new Animal("Jaguar", 22, "Africa");