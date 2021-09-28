// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.
const max_sub_array_of_size_k = function (k, arr) {
    let max = 0, cur = 0, start = 0;
    for (let i = 0; i < arr.length; i++) {
        cur += arr[i];// add the next element
        // slide the window, we don't need to slide if we've not hit the required window size of 'k'
        if (i >= k - 1) {
            max = Math.max(max, cur);
            cur -= arr[start]; // subtract the element going out
            start++; // slide the window ahead
        }
    }
    return max;
};
