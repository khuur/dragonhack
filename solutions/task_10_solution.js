// This function checks if there are two numbers in an array that add up to a target number.
function twoSum(numbers, target) {
    // We use a map to keep track of the numbers we've seen.
    var seenNumbers = new Map();

    // We go through the array, number by number.
    for (var i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i];

        // We calculate the number that we need to add to the current number to get the target.
        var complement = target - currentNumber;

        // If the complement is in the map, we return true.
        if (seenNumbers.has(complement)) {
            return true;
        }

        // We add the current number to the map.
        seenNumbers.set(currentNumber, true);
    }

    // If we've gone through the whole array and haven't found two numbers that add up to the target, we return false.
    return false;
}

module.exports = twoSum;