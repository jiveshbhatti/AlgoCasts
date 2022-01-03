// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//string.replace(/[^\w]/g, '').toLowerCase()

function anagrams(stringA, stringB) {
  let string1 = Array.from(stringA.replace(/[^\w]/g, "").toLowerCase())
    .sort()
    .join("");
  let string2 = Array.from(stringB.replace(/[^\w]/g, "").toLowerCase())
    .sort()
    .join("");

  console.log(string2 === string1);

  return string2 === string1;

  // let obj1 = {}
  // let obj2 = {}

  // for(let char of string1){

  //     if(obj1[char]){
  //         obj1[char]++
  //     }else{
  //         obj1[char]= 1
  //     }

  // }

  // string2.map((char)=> {

  //     return obj2[char] ? obj2[char]++ : obj2[char] = 1

  // })

  // console.log(obj1, 'obj 1')
  // console.log(obj2, 'obj2')

  // console.log(Object.entries(obj1) , Object.entries(obj2))

  // console.log(Object.entries(obj1) === Object.entries(obj2))
}

anagrams("Whoa! Hi!", "Hi! Whoa!");
module.exports = anagrams;
