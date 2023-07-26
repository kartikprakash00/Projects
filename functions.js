//Q. Types of functions in javascript


/*1) Named functions:
Named functions are functions that are defined with a specific name. 
They can be created using the function keyword followed by the function name,
a list of parameters (optional), and the function body. Here's an example of a named function: 
*/

function add(a, b) {
    return a + b;
}

/*2) Anonymous functions:
Anonymous functions are functions that do not have a name.
They are typically used as callbacks or as function expressions assigned to variables.
Here's an example of an anonymous function assigned to a variable:
*/

const multiply = function (a, b) {
    return a * b;
}

/*3) Arrow functions:
Arrow functions are a concise way to write functions in JavaScript.
They were introduced in ECMAScript 6 (ES6) and provide a shorter syntax compared to traditional named functions.
Arrow functions automatically capture the this value of the surrounding context. Here's an example of an arrow function:
*/

const divide = (a, b) => {
    return a / b;
}
/*For single-expression functions like the one above, the curly braces and the return keyword can be omitted:*/
const minus = (a, b) => a - b;

/*Function constructors (rarely used):
Function constructors are used to create functions dynamically.
They are created using the Function constructor,
but this method is rarely used due to security risks associated with executing code from strings.
Here's an example of creating a function using the Function constructor:
*/

const dynamicFunction = new Function('a', 'b', 'return a+b;');