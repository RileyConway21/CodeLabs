let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function addNumbersToWebpage(numbers){
    for(let i = 0; i < numbers.length; i++){
        let number = document.createElement("p");
       number.innerText = `${numbers[i]}` 
    document.body.appendChild(number);
    }
}

addNumbersToWebpage(numbers)