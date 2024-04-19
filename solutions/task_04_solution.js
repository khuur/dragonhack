// This function finds the second largest number in an array.
function findSecondLargest(numbers) {
    // We start by setting the maximum and second maximum to the lowest possible number.
    var maximum = -Infinity;
    var secondMaximum = -Infinity;

    // We go through the array, number by number.
    for (var i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i];

        // If the current number is greater than the maximum, we update the maximum and the second maximum.
        if (currentNumber > maximum) {
            secondMaximum = maximum;
            maximum = currentNumber;
        } 
        // If the current number is greater than the second maximum but not equal to the maximum, we update the second maximum.
        else if (currentNumber > secondMaximum && currentNumber !== maximum) {
            secondMaximum = currentNumber;
        }
    }

    // If the second maximum is still the lowest possible number, there is no second largest number, so we return null.
    // Otherwise, we return the second maximum.
    return secondMaximum > -Infinity ? secondMaximum : null;
}

module.exports = findSecondLargest;