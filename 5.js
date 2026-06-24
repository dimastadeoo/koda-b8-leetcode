/*
 66. Ditambah Satu
 Anda diberikan bilangan bulat besar yang direpresentasikan sebagai larik bilangan bulat digits, di mana setiap digit digits[i]adalah angka dari bilangan bulat tersebut. Angka-angka tersebut diurutkan dari yang paling signifikan ke yang paling tidak signifikan dari kiri ke kanan. Bilangan bulat besar tersebut tidak mengandung angka nol di depannya.ith0

Tambahkan satu pada bilangan bulat besar dan kembalikan array angka yang dihasilkan .

Contoh 1:

Input: digits = [1,2,3]
 Output: [1,2,4]
 Penjelasan: Array tersebut mewakili bilangan bulat 123.
Menambah satu menjadi 123 + 1 = 124.
Dengan demikian, hasilnya seharusnya [1,2,4].
Contoh 2:

Input: digits = [4,3,2,1]
 Output: [4,3,2,2]
 Penjelasan: Array tersebut mewakili bilangan bulat 4321.
Menambah satu menjadi 4321 + 1 = 4322.
Dengan demikian, hasilnya seharusnya [4,3,2,2].
Contoh 3:

Input: digits = [9]
 Output: [1,0]
 Penjelasan: Array tersebut mewakili bilangan bulat 9.
Menambah satu menjadi 9 + 1 = 10.
Dengan demikian, hasilnya seharusnya [1,0].
 

Batasan:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digitstidak mengandung awalan 0's.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // const nums = digits.join('')
    // const arr = Array.from(String(nums), Number)
    // return arr
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] < 9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};