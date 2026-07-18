/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

    1 <= n <= 8

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(current, open, close) {
        // Base kondisi ketika berhasil, ketika jumlah
        if (current.length === 2 * n) {
            result.push(current);
            console.log(result)
            return;
        }

        // Tambahkan '(' jika nilai open kurang dari n
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // tambahkan ')' jika nilai close kurang dari open
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};