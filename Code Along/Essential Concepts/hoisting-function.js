let paychech = 300;

function addRandomNumber(nun){
    let randomNumber = Math.random() * 100;
    logNumberToConsole(randomNumber + nun);
}

function logNumberToConsole(nun){
    console.log(nun);
}

addRandomNumber(paycheck);