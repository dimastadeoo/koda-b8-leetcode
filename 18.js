/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return ""
    
    let indAwal = 0
    let indAkhir = 0

    // fungsi untuk cek apakah ada palindrome dalam string, mereturnkan panjang palindrome
    const palinCekLong = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return right - left - 1 // panjang palindrome
    }
    
    // cek di setiap karakter
    for (let i = 0; i < s.length; i++) {
        // Cek jika ada palindrome panjangnya ganjil
        const palinGanjil = palinCekLong(i, i)
        // Cek jika ada palindrome panjangnya genap
        const palinGenap = palinCekLong(i, i + 1)
        // memilih mana yang lebih besar 
        const maxLength = Math.max(palinGanjil, palinGenap) 

        // menentukan index awal dan akhir jika ada panjang length lebih besar dari sebelumnya, jika hasilnya koma, akan dibulatkan ke bawah
        if (maxLength > indAkhir - indAwal + 1) {
            indAwal = i - Math.floor((maxLength - 1) / 2)
            indAkhir = i + Math.floor(maxLength / 2)
        }
    }


    // ambil karakter palindrome dengan panjang paling banyak
    return s.slice(indAwal, indAkhir + 1)
}