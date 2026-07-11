/*
18. 4Sum
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

 

Constraints:

    1 <= nums.length <= 200
    -109 <= nums[i] <= 109
    -109 <= target <= 109

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b) // urutkan array dari terkecil ke terbesar

    const result = []

    for (let i = 0; i < nums.length - 3; i++) {
        // Skip looping jika ada dupliklat di index selanjutnya, selain index 0
        if (i > 0 && nums[i] === nums[i - 1]) continue
        
        for (let j = i + 1; j < nums.length - 2; j++) {
            // Skip duplicate untuk angka kedua
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
        
            let left = j + 1 //tentukan nilai left + 1 setiap loop, dari depan array
            let right = nums.length - 1 //tentukan nilai left -1 setiap loop, dari belakang array

            // lakukan loop selama left kurang dari right untuk mencari penjumlahan 4 angka array = target, dimulai penjumlahan dari nilai depan(left) dan belakang (right)
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                // jika sudah sesuai sum = target maka push nilai arraynya ke result
                if (sum === target) {
                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ])

                    left++
                    right--

                    // Skip duplicate nilai array di left
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++
                    }

                    // Skip duplicate nilai array di right
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--
                    }

                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }


    }

    return result
};