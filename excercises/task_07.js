/* Merge Sorted Lists
Implement a function that merges two sorted lists of integers into a single sorted list.

Solution could be: O(n+m)
 */


const mergeSortedLists = require("../solutions/task_07_solution");

// Example pairs of sorted lists
const lists = [
    { list1: [1, 3, 5], list2: [2, 4, 6, 8] },
    { list1: [0, 9, 10], list2: [1, 2, 3, 7] },
    { list1: [], list2: [5, 6, 7] },
    { list1: [1, 1, 1, 1], list2: [2, 2, 2, 2] },
    { list1: [-5, 3, 12], list2: [-4, 6, 8] }
];

const pair = lists[4];

let user_answer = [];

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = [-5, -4, 3, 6, 8, 12];

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = mergeSortedLists(pair.list1, pair.list2);

if(solution.toString() === user_answer.toString()){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}