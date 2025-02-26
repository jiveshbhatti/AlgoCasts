// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    let chunked = []

for (let element of array){

    const last = chunked[chunked.length - 1]

    console.log(element)
    console.log(last)


    if(!last || last.length === size ){

        chunked.push([element])
    }else{
        last.push(element)
    }


}

console.log(chunked)

return chunked
}


chunk([1,2,3,4,5,6],2)
module.exports = chunk;


function chunk(array, size) {
    return array.reduce((chunks, curr) => {
      let len = chunks.length
      if (len === 0 || chunks[len - 1].length === size) chunks.push([curr])
      else chunks[len - 1].push(curr)
      return chunks
    }, [])
   }
   
