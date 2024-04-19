/* 
    Find the Missing Number in an Array 
    Given an array of n-1 integers in the range from 1 to n, write a program to find the missing number.
    
    Example: 
        Array: [3, 2, 5, 1, 6, 7, 9, 8, 10]
        Missing number: 4

    Solution could be: O(n)
*/
const solution = require("../solutions/task_01_solution");
const { generate_unsorted_array_with_missing_number} = require("../solutions/utils");

const N = 100;

const {array_with_missing_number, missing_number} = generate_unsorted_array_with_missing_number(N);

let user_answer = -1;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = 54;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------


if(user_answer === missing_number){
    console.log('The missing number is: ', user_answer);
} else{
    console.log('Missing number that you found is incorrect. Please try again.');
}

