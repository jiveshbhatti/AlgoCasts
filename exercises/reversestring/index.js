// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //console.log([...str]).reverse().join('') //using new javascript syntax and spread operator.


    // let result = str.split('').reverse().join('')
    // return result


//!Second Solution:
// let reversed = '';
 
// for(let char of str){

//     reversed = char + reversed 
//     console.log(reversed)
// }

// console.log(reversed)
// return reversed



}

reverse('hello how are you')
module.exports = reverse;
