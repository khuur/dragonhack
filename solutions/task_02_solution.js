// This function checks if the brackets in the expression are balanced.
function solution(expression) {
    // We use a stack to keep track of the opening brackets.
    var stack = [];

    // We define what opening and closing brackets look like.
    var openingBrackets = ['(', '{', '['];
    var closingBrackets = [')', '}', ']'];

    // We go through the expression, character by character.
    for (var i = 0; i < expression.length; i++) {
        var currentCharacter = expression[i];

        // If the current character is an opening bracket, we push it onto the stack.
        if (openingBrackets.includes(currentCharacter)) {
            stack.push(currentCharacter);
        } 
        // If the current character is a closing bracket, we check if it matches the last opening bracket in the stack.
        else if (closingBrackets.includes(currentCharacter)) {
            // If the stack is empty, there's no matching opening bracket, so the expression is not balanced.
            if (stack.length === 0) {
                return false;
            }

            // We pop the last opening bracket from the stack.
            var lastOpeningBracket = stack.pop();

            // We check if the current closing bracket matches the last opening bracket.
            var bracketsMatch = openingBrackets.indexOf(lastOpeningBracket) === closingBrackets.indexOf(currentCharacter);

            // If they don't match, the expression is not balanced.
            if (!bracketsMatch) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets have been properly closed, so the expression is balanced.
    return stack.length === 0;
}

module.exports = solution;
