    // let person = {
    // name: "Gerald",
    // age: 788,
    // printName: function(){
    // console.log(this.name)
    //  }
    // }

    // person.printName()

    let student = {
        name: "Molly"
    }
    
    function printName(){
        console.log(this.name)
    }

    printName.call(student)