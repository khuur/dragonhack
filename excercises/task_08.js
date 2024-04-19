/* Reverse Words in a Sentence
Create a program that reverses the order of words in a given sentence without reversing the words themselves.
 */

const reverseWordsInSentence = require("../solutions/task_08_solution.js");

// Example sentences
const sentences = [
    "Hello world",
    "OpenAI is an AI research lab",
    "The quick brown fox jumps over the lazy dog",
    "A man a plan a canal Panama",
    "ChatGPT is developed by OpenAI"
];

const sentence = sentences[1];


// ----------------------------------------------------------------------------------
// YOUR CODE STARTS HERE
// ----------------------------------------------------------------------------------

user_answer = "world Hello";

// ----------------------------------------------------------------------------------
// YOUR CODE ENDS HERE
// ----------------------------------------------------------------------------------
const solution = reverseWordsInSentence(sentence);

if(solution.toString() === user_answer.toString()){
    console.log(`Correct!`);
} else {
    console.log(`Incorrect!`);
}