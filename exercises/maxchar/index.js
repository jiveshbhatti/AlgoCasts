// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {


const obj = {}
let max = 0
let maxCount = 0

for (let char of str){


obj[char] ? obj[char] ++ : obj[char] = 1

}

console.log(obj)


for(let char in obj){

  

if(obj[char]> maxCount ){

   max = char
    maxCount = obj[char]

}




}
console.log(max, maxCount)
return max

}

maxChar('heello')
module.exports = maxChar;
