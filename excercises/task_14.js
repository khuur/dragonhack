/* Subarray Sum Equals K
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals k.
 */


const subarraySumEqualsK = require("../solutions/task_14_solution");

// Example arrays and targets
const testCases = [
    { nums: [1, 1, 1], k: 2 },
    { nums: [1, 2, 3], k: 3 },
    { nums: [3, 4, 7, 2, -3, 1, 4, 2], k: 7 },
    { nums: [3, 5, -2, 4, -1], k: 5 },
    { nums: [-1, -1, 1], k: 0 }
];

const testCase = testCases[4];

let user_answer = -1;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = 1;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = subarraySumEqualsK(testCase.nums, testCase.k);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}