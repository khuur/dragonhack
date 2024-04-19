/* Second Largest Number
Develop a program to find the second largest number in an unsorted array. 

Solution could be: O(n)
 */


const findSecondLargest = require("../solutions/task_04_solution");

// Example arrays
const arrays = [
    [10, 5, 4, 3, -1],
    [3, 5, 2, 99, 15, 83, 7],
    [17, 25, 31, 13, 6],
    [5, 5, 5, 5],
    [7, 7, 6, 6]
];

let arr = arrays[2];
let user_answer = -1;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = 25;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = findSecondLargest(arr);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}

