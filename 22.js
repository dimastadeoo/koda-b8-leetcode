/*
15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 

Constraints:

    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b) // urutkan array dari terkecil ke terbesar

    const result = []

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip looping jika ada dupliklat di index selanjutnya, selain index 0
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1 //tentukan nilai left + 1 setiap loop, dari depan array
        let right = nums.length - 1 //tentukan nilai left -1 setiap loop, dari belakang array

        // lakukan loop selama left kurang dari right untuk mencari penjumlahan 3 angka array = 0, dimulai penjumlahan dari nilai depan(left) dan belakang (right)
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum < 0) {
                left++ //jika penjumlahan kurang dari 0 maka left increment
            } else if (sum > 0) {
                right-- // sebaliknya jika lebih besar dari 0 maka decrement
            } else { 
                // jika sudah sesuai sum = 0 maka bungkus ketiga nilainya ke dalam array, lalu push ke result
                result.push([nums[i], nums[left], nums[right]])

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
            }
        }
    }
    // kembalikan nilai result
    return result
}