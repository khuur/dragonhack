const generate_unsorted_array_with_missing_number = (N) => {
    const unsorted_array = [];

    for(let i = 1; i <= N; i++){
        unsorted_array.push(i);
    }

    // shuffle the array

    for(let i = unsorted_array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = unsorted_array[i];
        unsorted_array[i] = unsorted_array[j];
        unsorted_array[j] = temp;
    }

    const array_with_missing_number = unsorted_array.slice(0, unsorted_array.length - 1);
    const missing_number = unsorted_array[N - 1];

    return {array_with_missing_number, missing_number};
}

module.exports = {
    generate_unsorted_array_with_missing_number
};