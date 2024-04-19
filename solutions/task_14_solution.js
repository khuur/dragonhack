// This function counts the number of subarrays of an array that add up to a target number.
function countSubarrays(nums, target) {
    // We use a map to keep track of the sums we've seen and how many times we've seen them.
    var sumCount = new Map();
    var currentSum = 0;
    var count = 0;

    // We add 0 to the map to handle the case where a subarray starts from the first index.
    sumCount.set(0, 1);

    // We go through the array, number by number.
    for (var i = 0; i < nums.length; i++) {
        var currentNumber = nums[i];

        // We add the current number to the current sum.
        currentSum += currentNumber;

        // If the current sum minus the target exists in the map, then there are sumCount.get(currentSum - target) subarrays ending at this index which sum to the target.
        if (sumCount.has(currentSum - target)) {
            count += sumCount.get(currentSum - target);
        }

        // We update the count of the current sum in the map. If the current sum doesn't exist in the map, we use 0 as the default value.
        sumCount.set(currentSum, (sumCount.get(currentSum) || 0) + 1);
    }

    // We return the count of subarrays that add up to the target.
    return count;
}

module.exports = countSubarrays;