/* 
    Check for Balanced Parentheses in an Expression
    Write a program that checks if the parentheses in a given expression are balanced.

    Solution could be: O(n)
 */


const solution = require("../solutions/task_02_solution");

// Test expression
const expressions = [
    "((3 + 2) * 5)",   // Balanced
    "{[(((()((())))))]}",          // Balanced
    "(5 + 3) * [2]",   // Balanced
    "{[)]}",           // Not balanced
    "(3 + 5))",        // Not balanced
    "[{()}]"           // Balanced
];

const expression = expressions[1];

let user_solution;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_solution = true;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------




if (solution(expression) === user_solution) {
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}