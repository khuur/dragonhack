const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const intersectionSet = new Set();

    // Iterate over the smaller set for efficiency
    if (set1.size < set2.size) {
        set1.forEach(num => {
            if (set2.has(num)) {
                intersectionSet.add(num);
            }
        });
    } else {
        set2.forEach(num => {
            if (set1.has(num)) {
                intersectionSet.add(num);
            }
        });
    }

    return Array.from(intersectionSet);
}

module.exports = intersection;
