/* Unique Characters
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */

const hasAllUniqueCharacters = require("../solutions/task_13_solution");

// Example strings
const strings = [
    "abcdef",
    "hello",
    "1234567",
    "test",
    "unique"
];

const str = strings[2];

let user_answer = false;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = true;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = hasAllUniqueCharacters(str);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}