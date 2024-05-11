/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let endPointer = nums.length - 1;
    let count = 0;
    for (let i = 0; i <= endPointer; i++) {
        if (nums[i] === val) {
            for (; endPointer >= i; endPointer--) {
                if (nums[endPointer] != val) {
                    nums[i] = nums[endPointer];
                    endPointer--
                    count++;
                    break;
                }
            }
        }
        else {
            count++;
        }
    }

    return count;
};

module.exports = removeElement;
