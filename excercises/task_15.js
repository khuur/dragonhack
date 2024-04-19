/* Intersection of Two Arrays
Given two arrays, write a function to compute their intersection, ensuring each element in the result is unique.
 */

const intersection = require("../solutions/task_15_solution");

// Example pairs of arrays
const arrayPairs = [
    { arr1: [1, 2, 2, 1], arr2: [2, 2] },
    { arr1: [4, 9, 5], arr2: [9, 4, 9, 8, 4] },
    { arr1: [1, 1, 2, 2], arr2: [2, 2] },
    { arr1: [3, 5, 7, 8], arr2: [99, 3, 5, 32] },
    { arr1: [], arr2: [1, 2, 3] }
];

const pair = arrayPairs[3];

let user_answer = [];

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = [3, 5];

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = intersection(pair.arr1, pair.arr2);

if(solution.toString() === user_answer.toString()){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}