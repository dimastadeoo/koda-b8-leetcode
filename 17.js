/*
7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0
    let arr = x.toString().split("") // tampung x dan rubah jadi array
    const cekMinPlus = arr[0] === '-' ? -1 : 1; // cek jika index ke 0 apakah negatif atau tidak
    const INT_MAX = 2 ** 31 - 1;   // 2147483647
    const INT_MIN = -(2 ** 31);     // -2147483648

    // jika ada tanda negatif atau positif di di index ke 0 maka hapus index ke 0 
    if (arr[0] === '-' || arr[0] === '+'){
        arr.shift()
    }
    // balik posisi array
    arr.reverse()
    // cek apakah index ke 0 apakah berupa '0' jika ya hapus index ke 0
    if (arr[0] === '0'){
        arr.shift()
    }
    // rubah array jadi string, lalu ke number dan kalikan dengan  cekMinPlus untuk menghasilkan angka negatif atau positif
    result = Number(arr.join("")) * cekMinPlus
    // jika nilai diluar batasan maka kembalikan nilai 0
    if (result > INT_MAX || result < INT_MIN){
        result = 0
    }

    return result

};