const hasAllUniqueCharacters = (str) => {
    // Uncomment this to use additional data structure (Set)
    // return usingSet(str);

    // Uncomment this to use no additional data structures
    return withoutAdditionalDataStructures(str);
}

function usingSet(str) {
    const seen = new Set();
    for (const char of str) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}

function withoutAdditionalDataStructures(str) {
    // Assumes only ASCII characters; adjust if using Unicode/multi-byte characters
    if (str.length > 128) return false; // ASCII has only 128 characters

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = hasAllUniqueCharacters;
