/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count == 1 || nums[i] !== nums[count - 2]) {
            nums[count++] = nums[i]; 
        }
    }
    return count;
};

module.exports = removeDuplicates;