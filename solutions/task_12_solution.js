// This function finds the longest common prefix of an array of strings.
function findLongestCommonPrefix(strs) {
    // If the array is empty, we return an empty string.
    if (strs.length === 0) {
        return "";
    }

    // We find the shortest string in the array.
    var shortestString = strs[0];
    for (var i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestString.length) {
            shortestString = strs[i];
        }
    }

    // We go through each character in the shortest string.
    for (var i = 0; i < shortestString.length; i++) {
        var currentCharacter = shortestString[i];

        // We go through each string in the array.
        for (var j = 0; j < strs.length; j++) {
            var currentString = strs[j];

            // If the current character doesn't match the character at the same position in the current string, we return the prefix up to the previous character.
            if (currentString[i] !== currentCharacter) {
                return shortestString.substring(0, i);
            }
        }
    }

    // If all characters in the shortest string are part of the prefix, we return the whole shortest string.
    return shortestString;
}

module.exports = findLongestCommonPrefix;