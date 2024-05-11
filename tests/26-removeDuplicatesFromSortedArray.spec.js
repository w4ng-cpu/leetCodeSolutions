const removeDuplicates = require("../src/26-removeDuplicatesFromSortedArray");

describe("remove duplicates from sorted array", () => {
    beforeEach(() => {
        let nums = [0];
        let returnValue = 0;
        let numsResult = [0]
    });

    test("remove duplicates from [1,1,2], expect return value 2 and [1,2,_] array", () => {
        nums = [1,1,2];
        returnValue = removeDuplicates(nums);
        expect(returnValue).toBe(2);

        numsResult = [1,2,2];
        expect(nums).toEqual(numsResult);
    });
});
