/* Check if Two Strings are Anagrams
Write a function to check if two given strings are anagrams of each other. For 

Listen ↔ Silent
Dormitory ↔ Dirty Room

Solution could be: O(2n)
 */

const areAnagrams = require("../solutions/task_06_solution");

// Example pairs of strings
const pairs = [
    { s1: "Listen", s2: "Silfnt" },
    { s1: "Dormitory", s2: "Dirty Room" },
    { s1: "Hello", s2: "World" },
    { s1: "Finder", s2: "Friend" },
    { s1: "Astronomer", s2: "Moon starer" }
];

const pair = pairs[4];

let user_answer = false;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = true;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = areAnagrams(pair.s1, pair.s2);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}