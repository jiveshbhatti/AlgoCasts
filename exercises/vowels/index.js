// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
  
//   let count = 0;

//   let string = str.toLowerCase();

//   for (let char of string) {
//     for (let el of vowels) {
//       if (char === el) {
//         count++;
//       }
//     }
//   }

//   console.log(count);
//   return count;
// }

function vowels(str) {
    let vowels = /[aeiou]/ig;
    
    let string = str.toLowerCase()
    
return ( string.match(vowels).length)
    
}

vowels("hey how are you");

module.exports = vowels;

