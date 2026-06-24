/*
30. Substring with Concatenation of All Words
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || words.length === 0) return [];
    
    const wordLen = words[0].length;
    const wordsCount = words.length;
    const totalLen = wordLen * wordsCount;
    const result = [];

    //Hitung frekuensi target
    const targetMap = {};
    words.forEach(w => targetMap[w] = (targetMap[w] || 0) + 1);

    // Loop sepanjang string s yang muat untuk menampung totalLen
    for (let i = 0; i <= s.length - totalLen; i++) {
        const seen = {};
        let j = 0;

        // Cek kata per kata di dalam window saat ini
        while (j < wordsCount) {
            const wordIdx = i + j * wordLen;
            const word = s.substring(wordIdx, wordIdx + wordLen);
            
            // Jika kata tidak ada di target, hentikan pengecekan
            if (!targetMap[word]) break;

            seen[word] = (seen[word] || 0) + 1;

            // Jika jumlah kata melebihi target, hentikan pengecekan
            if (seen[word] > targetMap[word]) break;
            
            j++;
        }

        // Jika semua kata berhasil dicocokkan
        if (j === wordsCount) result.push(i);
    }

    return result;
};