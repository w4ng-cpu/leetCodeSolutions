const removeElement = require("../src/27-removeElement.js");

describe("remove element", () => {
    beforeEach(() => {
        let nums = [];
        let val = null;
        let resultValue = 0;
    });

    test("remove from [3,2,2,3] the value 3; expect return value 2 and [2,2,_,_] array", () => {
        nums = [3, 2, 2, 3];
        val = 3;

        resultValue = removeElement(nums, val);
        expect(resultValue).toBe(2);

        let numsResult = [2, 2, 2, 3];
        for (let i = 0; i < resultValue; i++) {
            expect(nums[i]).toBe(numsResult[i]);
        }
    });

    test("remove from [0,1,2,2,3,0,4,2] the value 2; expect return value 5 and [0,1,3,0,4,_._,_] array", () => {
        nums = [0, 1, 2, 2, 3, 0, 4, 2];
        val = 2;
        resultValue = removeElement(nums, val)
        expect(resultValue).toBe(5);

        let numsResult = [0, 1, 3, 0, 4, 0, 4, 2];
        for (let i = 0; i < resultValue; i++) {
            expect(nums[i]).toBe(numsResult[i]);
        }
    });
});
