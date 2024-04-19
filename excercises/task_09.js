/* 
    String Compression
    Implement a basic string compression using the counts of repeated characters.
    For example, the string "aabcccccaaa" would become "a2b1c5a3".
    If the compressed string is not smaller than the original, return the original string.
 */


const compressString = require("../solutions/task_09_solution");

// Example strings
const strings = [
    "aabcccccaaa",
    "abcdef",
    "aaabaaaaccaaaaba",
    "aaaaaaaaaaaa",
    "abbbbbbbbbb"
];

const str = strings[2];

let user_solution;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_solution = "a3b1a4c2a4b1a1";

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

if (compressString(str) === user_solution) {
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}


