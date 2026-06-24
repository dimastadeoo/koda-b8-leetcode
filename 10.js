/*
10. Regular Expression Matching
Given an input string s and a pattern p, implement regular expression 
matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
Return a boolean indicating whether the matching covers the entire input string (not partial).


Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

Constraints:

1 <= s.length <= 20
1 <= p.length <= 20
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', 
there will be a previous valid character to match.
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    
    // Membuat tabel DP berukuran (m+1) x (n+1) berisikan false
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    
    // Base case: string kosong cocok dengan pattern kosong
    dp[0][0] = true;
    
    // Menangani pattern seperti a*, a*b*, a*b*c* yang bisa cocok dengan string kosong
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    // Mengisi tabel DP
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Jika karakter cocok atau ada tanda '.'
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } 
            // Jika bertemu karakter '*'
            else if (p[j - 1] === '*') {
                // Pilihan 1: Anggap '*' muncul 0 kali (ambil hasil dari 2 posisi sebelumnya di pattern)
                dp[i][j] = dp[i][j - 2];
                
                // Pilihan 2: Jika karakter sebelum '*' cocok dengan karakter s saat ini
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    
    return dp[m][n];
};
