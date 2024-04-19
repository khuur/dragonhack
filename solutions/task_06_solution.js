// This function checks if two strings are anagrams.
function areAnagrams(string1, string2) {
    // This function removes non-alphanumeric characters from a string and converts it to lowercase.
    function normalize(string) {
        return string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    }

    // This function counts the frequency of each character in a string.
    function getFrequency(string) {
        var frequency = {};

        for (var i = 0; i < string.length; i++) {
            var character = string[i];

            if (frequency[character]) {
                frequency[character]++;
            } else {
                frequency[character] = 1;
            }
        }

        return frequency;
    }

    // We normalize the strings.
    string1 = normalize(string1);
    string2 = normalize(string2);

    // If the strings have different lengths, they can't be anagrams.
    if (string1.length !== string2.length) {
        return false;
    }

    // We get the frequency of each character in the strings.
    var string1Frequency = getFrequency(string1);
    var string2Frequency = getFrequency(string2);

    // We check if the strings have the same frequency for each character.
    for (var character in string1Frequency) {
        if (string1Frequency[character] !== string2Frequency[character]) {
            return false;
        }
    }

    // If all characters have the same frequency in both strings, the strings are anagrams.
    return true;
}

module.exports = areAnagrams;