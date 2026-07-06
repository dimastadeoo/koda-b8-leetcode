/*
67. Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101" 

Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1 //tentukan panjang a - 1
    let j = b.length - 1 //tentukan panjang b - 1
    let carry = 0 //tentukan nilai awal untuk sisa dari penjulahan biner
    let result = "" // result akan berupa string

    // untuk hitung biner kita akan hitung dari kanan dulu, dan looping akan berhenti ketika semua baik i, j dan carry bernilai 0
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry //var sum tentukan nilai awal berupa sisa dari penjumlahan biner, hanya akan bernilai 0 atau 1

        // kita masukkan penjumlahan dari kanan nilai i dan j
        if (i >= 0) {
            sum += Number(a[i])
            i--
        }

        if (j >= 0) {
            sum += Number(b[j])
            j--
        }
        // setelah dijumlahkan kita modulus 2, maka akan menghasilkan angka 0 atau 1
        result = (sum % 2) + result //setelah itu kita gabungkan hasilnya ke dalam string
        carry = Math.floor(sum / 2) //nilai dibulatkan ke bawah, jika 2 maka akan membuat nilai sisanya 1 kalo dibawah 2 maka nilai sisanya 0
    }
    // kembalikan hasil penggabungan dalam sebuah stirng
    return result
};