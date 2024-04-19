/* Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 */

const longestPalindrome = require("../solutions/task_16_solution");

// Example strings
const strings = [
    "babad",
    "cbbd",
    "a",
    "ac",
    "racecar",
    "noon",
    "abcdefg"
];

const str = strings[0];

let user_answer = "";

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = "bab";

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = longestPalindrome(str);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}