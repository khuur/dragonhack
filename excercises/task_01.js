/* 
    Find the Missing Number in an Array 
    Given an array of n-1 integers in the range from 1 to n, write a program to find the missing number.
    
    Solution could be: O(n)
*/
const solution = require("../solutions/task_01_solution");

const N = 100;

const unsorted_array = [];

for(let i = 1; i <= N; i++){
    unsorted_array.push(i);
}

// shuffle the array

for(let i = unsorted_array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i);
    const temp = unsorted_array[i];
    unsorted_array[i] = unsorted_array[j];
    unsorted_array[j] = temp;
}

const array_with_missing_number = unsorted_array.slice(0, unsorted_array.length - 1);
const missing_number = unsorted_array[N - 1];

let missing_number_found = -1;

// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

missing_number_found = 54;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------


if(solution(missing_number_found, missing_number)){
    console.log('The missing number is: ', missing_number_found);
} else{
    console.log('Missing number that you found is incorrect. Please try again.');
}

