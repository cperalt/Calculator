
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

//clicking on clear button clears the input value
clear.addEventListener("click", () => input.value = "");

//calculate function that evalautes the input value, evaluates the string which has numbers and operators
const calculate = () => {
    if (input.value.search(/^[-+]?[0-9]+\.?([-+*\/]?[0-9]+\.?)*$/) != -1) {
        input.value = eval?.(`"use strict"; (${input.value})`);
    }
};


//clicking the equals button runs the calculate function
equal.addEventListener("click", calculate);

//Upon performing a keyup on the input field
input.addEventListener("keyup", () => {

    //First check is when the user presses Enter
    if (event.key == "Enter") {

        //Frist runs a regex check on the input.value string. This is to make sure  the user has inputed a valid calculator operation.
        //Search method returns -1 if not matches have been found
        //If a matching calculator operation has not been foud, then reset the input field to display "INVALID"
        if (input.value.search(/^[-+]?[0-9]+\.?([-+*\/]?[0-9]+\.?)*$/) == -1) {
            input.value = "INVALID";
        } else {
            //Else if the user entered a valid calculator operation, perfroming an indirect evauluation of the input.value string.
            input.value = eval?.(`"use strict"; (${input.value})`);
        }
}});


//Clicking the +/- button on the calculator multiplies the value by -1 to switch the value between positive or negative
intSign.addEventListener("click", () => {
    input.value = input.value * -1;
});

//Clicking delete button runs a substring 
deleteKey.addEventListener("click", () => {
    input.value = input.value.substring(0, input.value.length - 1);
})

//Clicking persent sign  button reasigns the input value to input value divided by 100
percentSign.addEventListener("click", () => {
    input.value = input.value / 100;
})
