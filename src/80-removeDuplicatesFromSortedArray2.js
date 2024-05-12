/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let appearedTwice = false;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            if (!appearedTwice) {
                nums[count++] = nums[i];
                appearedTwice = true;
            }
        }
        else {
            nums[count++] = nums[i]
            appearedTwice = false;
        }
    }
    return count;
};

module.exports = removeDuplicates;