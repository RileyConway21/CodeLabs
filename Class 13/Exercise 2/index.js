function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1000)) + min;
}
console.log(getRandomInt);
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
var maxValue = 100;
for (var i = 0; i <= maxValue; i++) {
    var square = Math.pow(i, 2);
    console.log(square);
}
