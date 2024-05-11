const removeElement = require("../src/27-removeElement.js");

describe("remove element", () => {
    beforeEach(() => {
        let nums = [];
        let val = null;
    });

    test("remove from [3,2,2,3] the value 3; expect return value 2 and [2,2,_,_] array", () => {
        nums = [3, 2, 2, 3];
        val = 3;
        expect(removeElement(nums, val)).toBe(2);
        removeElement(nums, val);

        let numsResult = [2, 2];
        for (let i = 0; i < 2; i++) {
            expect(nums[i]).toBe(numsResult[i]);
        }
    });

    test("remove from [0,1,2,2,3,0,4,2] the value 2; expect return value 5 and [0,1,4,0,3,_._,_] array", () => {
        nums = [0, 1, 2, 2, 3, 0, 4, 2];
        val = 3;
        expect(removeElement(nums, val)).toBe(3);
        removeElement(nums, val);

        let numsResult = [0, 1, 4, 0, 3];
        console.log(nums);
        for (let i = 0; i < 2; i++) {
            expect(nums[i]).toBe(numsResult[i]);
        }
    });
});
