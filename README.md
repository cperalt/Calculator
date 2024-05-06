# [Calculator](https://cperalt.github.io/Calculator/)

## Layout and Design

* Used HTML and CSS to create calculator interface
* Designed calculator with grid-based layout that includes buttons for numbers, decimal point, arithmetic operators, equal sign, clear and additional features
* Calculator is responsive and displays well on different screen sizes (mmobile, tablet & desktop)

## Functionality

* Implemented JavaScript logic to handle user interactions and perform calculations
* Supports arithmetic operations such as addition, subtraction, multiplication, and division
* Users are able to perfomr calculations by clicking the buttons or using the keyboard
* Displays the entered number, current operation, and final result on the calculator screen
* Clear button resets the calculator screen

## Error Handling

* Handles invalid inputs or divide by zero erros
* Displays appropriate error messages such as invalid inputs or infinity
* Prevents invalid operations from occuring

## Code Quality & Organization

* Used clean, well-structured, and readable code 
* Used appropriate naimg conventions for variables, functions, and classes
* Seperate HTML, CSS, and JavaScript into their respective files
* Javascript contains comments

## Optional Features

* Implemented a delete button that deletes the previous character
* Implemented a +/- button that toggles the value between positive and negative
* Percentage button divides the value by 100

> [!WARNING]
> The calculator uses `eval()` indirectly to perform the operations. Eval() should never be used directly and without proper security measures in place. For proper code sanitization, I implemented a `String.search()` method that checks whether the users input is a valid calculator operation with the following regex `/^[-+]?[0-9]+\.?([-+*\/]?[0-9]+\.?)*$/`. If no match was found, meaning the user did not input a valid calculator operation, when the user presses enter, the values changes to INVALID and the eval function does not run.
