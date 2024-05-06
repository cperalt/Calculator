// JS here

//target html elements
const input = document.querySelector("#calculator_input");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equalSign");
const intSign = document.querySelector("#intSign");
const deleteKey = document.querySelector("#delete");
const percentSign = document.querySelector("#percentSign");
let buttons = document.querySelectorAll(".button");


//For each button, adds an event listener that upon click adds the button value to the input value
buttons.forEach(button => {
    
    button.addEventListener("click", () => {
        input.value += button.value;
    })

});

clear.addEventListener("click", () => input.value = "");


const calculate = () => {
    if (input.value.search(/^[-+]?[0-9]+\.?([-+*\/]?[0-9]+\.?)*$/) != -1) {
        input.value = eval?.(`"use strict"; (${input.value})`);
    }
};


equal.addEventListener("click", calculate);

input.addEventListener("keyup", () => {
    if (event.key == "Enter") {
        if (input.value.search(/^[-+]?[0-9]+\.?([-+*\/]?[0-9]+\.?)*$/) == -1) {
            input.value = "INVALID";
        } else {
            input.value = eval?.(`"use strict"; (${input.value})`);
        }
}});


intSign.addEventListener("click", () => {
    input.value = input.value * -1;
});


deleteKey.addEventListener("click", () => {
    input.value = input.value.substring(0, input.value.length - 1);
})

percentSign.addEventListener("click", () => {
    input.value = input.value / 100;
})
