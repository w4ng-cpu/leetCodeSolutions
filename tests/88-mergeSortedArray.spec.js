const merge = require("../src/88-mergeSortedArray.js");

describe("merge sorted arrays", () => {
    beforeEach(() => {
        let nums1 = [0];
        let m = 0;
        let nums2 = [];
        let n = 0;
    });

    test("merge [1,2,3,0,0,0] and [2,5,6], return [1,2,2,3,5,6]", () => {
        nums1 = [1, 2, 3, 0, 0, 0];
        m = 3;
        nums2 = [2, 5, 6];
        n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
});
