const removeDuplicates = require('../src/80-removeDuplicatesFromSortedArray2');

describe('remove duplicates from sorted array 2', () => {
    beforeEach(() => {
        let nums = [0];
        let returnValue = 0;
        let resultNums = [0];
    })

    test('remove duplicates from [1,1,1,2,2,3], expect return value 5 and [1,1,2,2,3,_] array', () => {
        nums = [1,1,1,2,2,3]
        returnValue = removeDuplicates(nums);
        expect(returnValue).toBe(5);

        console.log(nums);
        resultNums = [1,1,2,2,3,3]
        for (let i = 0; i < returnValue; i++) {
            expect(nums[i]).toBe(resultNums[i]);
        }
    }) 
})