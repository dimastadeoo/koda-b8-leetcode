/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let subStr = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // cek index karakter berulang
        const cekIndex = subStr.indexOf(char);
        // jika ada
        if (cekIndex >= 0) {
            // hapus karakter sampai index yang berulang
            subStr = subStr.slice(cekIndex + 1);
        }
        // masukkan karakter ke penampung subStr
        subStr += char;
        // ambil data result dari nilai terbesar diantara result dan panjang substr, untuk atasi semisal ditemukan karakter berulang ditengah karakter
        result = Math.max(result, subStr.length);
    }

    return result;
};