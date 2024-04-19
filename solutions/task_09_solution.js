const compressString = (str) => {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;  // reset count for the next character
        }
    }

    return compressed.length < str.length ? compressed : str;
}

module.exports = compressString;
