// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    //& First Solution using spread operator and join with a 
    // let result = [...str].reverse().join('')
    // return  result == str ? true: false

    //!Second

// let result = ''
// for(let char of str){
//     result = char + result
// }
// return result === str ? true: false

// Todo : 3rd Solution

return str.split('').every((char, i)=>{

    return char === str[str.length - i]
})


}

palindrome('abba')
module.exports = palindrome;
