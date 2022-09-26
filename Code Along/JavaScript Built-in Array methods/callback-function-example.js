// ** Call Back Functions **
// A call back function is a function that is passes in as an argument in another function.


function executeThreeTimes(callback){
    for(let i = 0; i < 3; i++){
        callback();
    }
}

function printFullName(){
    console.log("Joe Mama")
}

executeThreeTimes(printFullName);
