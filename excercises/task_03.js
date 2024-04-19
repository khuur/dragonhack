/* Find Duplicate Characters in a String
Write a program to print all duplicate characters in a given string.

Solution could be: O(2n)
 */

const findDuplicateCharacters = require("../solutions/task_03_solution");

// Example strings
const strings = [
    "hello",
    "programming",
    "aabbcc",
    "javascript",
    "example"
];

let example_string = strings[1];
let user_answer = [];


// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = ['g', 'r', 'm'];

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = findDuplicateCharacters(example_string);
console.log(solution);
console.log(user_answer);

if(JSON.stringify(new Set(solution)) === JSON.stringify(new Set(user_answer))){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}