// This function finds duplicate characters in a string.
function findDuplicateCharacters(inputString) {
    // We use an object to count how many times each character appears in the string.
    var characterCount = {};

    // We go through the string, character by character.
    for (var i = 0; i < inputString.length; i++) {
        var currentCharacter = inputString[i];

        // If the character is already in the object, we increase its count. Otherwise, we add it to the object with a count of 1.
        if (characterCount[currentCharacter]) {
            characterCount[currentCharacter]++;
        } else {
            characterCount[currentCharacter] = 1;
        }
    }

    // We use an array to keep track of the characters that appear more than once.
    var duplicateCharacters = [];

    // We go through the object and add the characters that appear more than once to the array.
    for (var character in characterCount) {
        if (characterCount[character] > 1) {
            duplicateCharacters.push(character);
        }
    }

    // We return the array of duplicate characters.
    return duplicateCharacters;
}
module.exports = findDuplicateCharacters;
