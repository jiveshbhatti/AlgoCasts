// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

let vowel = ['a','e','i','o','u']

 function vowels(str) {
  
  let count = 0;

  let string = str.toLowerCase();

  for (let char of string) {
    
    for (let el of vowel) {
       
      if (char === el) {
        count++;
      }
    }
  }

  console.log(count);
  return count;
}


vowels('hello how are you')
// function vowels(str) {
//     let vowels = /[aeiou]/ig;
    
//     let string = str.toLowerCase()
    
// return ( string.match(vowels).length)
    
// }

// vowels("hey how are you");

module.exports = vowels;

