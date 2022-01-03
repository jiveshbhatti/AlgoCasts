// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let str1 = str.split(' ')
    console.log(str1)
    let result = ''

    str1.map((char)=>{
      let newStr = char[0].toUpperCase() + char.slice(1).toString()
      result = result + ' ' + newStr
    })
   
console.log(result.trim())

return result.trim()
    

}
capitalize('a short sentence')
module.exports = capitalize;


function cap3(str) {
    return str.split(' ').map(word => {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    }).join(' ');
   }

   cap3('a short sentence')