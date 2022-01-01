// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

 let result =  n.toString()

 let fin = [...result].reverse().join('')
 console.log(fin, 'before if statement')


 if(n<0){
console.log(parseInt(fin) * -1 )
    return parseInt(fin) * -1
 }
 
 return parseInt(fin)
 
}

reverseInt(-2)
module.exports = reverseInt;
