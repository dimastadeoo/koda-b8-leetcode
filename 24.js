/*
16. 3Sum Closest
Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

 

Constraints:

    3 <= nums.length <= 500
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Urutkan array terlebih dahulu
    nums.sort((a, b) => a - b)

    let result

    for (let i = 0; i < nums.length - 2; i++) {

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {

            const sum = nums[i] + nums[left] + nums[right]

            // Simpan hasil jika lebih dekat ke target
            if (
                result === undefined ||
                Math.abs(target - sum) < Math.abs(target - result)
            ) {
                result = sum
            }

            // Jika tepat sama dengan target, langsung return
            if (sum === target) {
                return target
            }

            // Geser pointer
            if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }

    return result
}

