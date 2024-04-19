// This function merges two sorted lists into one sorted list.
function mergeSortedLists(list1, list2) {
    // We start at the beginning of both lists.
    var i = 0;
    var j = 0;

    // This is where we'll store the merged list.
    var merged = [];

    // As long as we haven't reached the end of either list, we compare the current elements and add the smaller one to the merged list.
    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            merged.push(list1[i]);
            i++;
        } else {
            merged.push(list2[j]);
            j++;
        }
    }

    // If we've reached the end of list1 but not list2, we add the remaining elements from list2 to the merged list.
    while (j < list2.length) {
        merged.push(list2[j]);
        j++;
    }

    // If we've reached the end of list2 but not list1, we add the remaining elements from list1 to the merged list.
    while (i < list1.length) {
        merged.push(list1[i]);
        i++;
    }

    // We return the merged list.
    return merged;
}

module.exports = mergeSortedLists;