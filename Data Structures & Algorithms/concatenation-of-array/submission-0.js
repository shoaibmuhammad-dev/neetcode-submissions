class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const arrayLength = nums.length;
        const ans = new Array(2 * arrayLength);

        for(let i = 0; i < arrayLength; i++){
            ans[i] = nums[i];
            ans[i + arrayLength] = nums[i]
        }

        return ans;
    }
}
