/* Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 */
const findLongestCommonPrefix = require("../solutions/task_12_solution");

// Example arrays of strings
const stringGroups = [
    ["flower", "flow", "flight"],
    ["dog", "racecar", "car"],
    ["interspecies", "interstellar", "interstate"],
    ["throne", "throne"],
    ["classroom", "classy", "class"]
];

const string = stringGroups[4];

let user_answer = "";

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = "class";

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = findLongestCommonPrefix(string);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}


