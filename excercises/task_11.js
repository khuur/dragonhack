/* Max Profit
Given a list of stock prices where the ith element is the price of the stock on day i, design an algorithm to find the maximum profit you can achieve from a single buy and sell. You cannot sell a stock before you buy one.
 */

const maxProfit = require("../solutions/task_11_solution.js");

// Example arrays of stock prices
const pricesList = [
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1],
    [1, 2, 3, 4, 5],
    [2, 4, 1, 7],
    [3, 8, 5, 1, 7, 8]
];

const prices = pricesList[3];

let user_answer = -1;



// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = 6;

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------

const solution = maxProfit(prices);

if(solution === user_answer){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}
