/* Two Sum Problem
Given an array of integers, and a target value, determine if there are any two integers in the array whose sum is equal to the given target value.
 */

const twoSum = require("../solutions/task_10_solution.js");

// Example arrays and target values
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 },
    { nums: [1, 2, 3, 4], target: 8 }
];

const testCase = testCases[2];

let user_answer = false;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = true;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = twoSum(testCase.nums, testCase.target);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}

