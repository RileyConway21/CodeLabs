var button = document.querySelector("button");

button.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;

    document.body.style.backgroundColor = curColour === 'red' ? 'blue' : 'red';
});