class Animal {
    birthday: number = 12;
    animal: string = "Jaguar";
    
    agedifference(){
        const age = this.animal- this.birthday
        document.write(`There is a big age gap between these animals, it is`)
    }
}

class Human {
    birthday: number = 66;
    animal: string = "Jerry";
    
    agedifference(){
        const age = this.animal- this.birthday
        document.write(`There is a big age gap between these animals, it is`)
    }
}

console.log(ageDifference)