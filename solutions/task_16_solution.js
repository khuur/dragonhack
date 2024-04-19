const longestPalindrome = (s) => {
    if (s.length < 2) return s; // A single character or empty string is a palindrome itself

    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Adjust back to the last valid index
        left++;
        right--;

        if (right - left > end - start) {
            start = left;
            end = right;
        }
    };

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes (single character center)
        expandAroundCenter(i, i);
        // Even length palindromes (two character center)
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, end + 1);
}

module.exports = longestPalindrome;
