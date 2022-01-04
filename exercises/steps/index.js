// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {

// let toPrint = '#'

// let newStr = ''

// let arr = []

// let timesToPrint = arr.length 

// for(let i=0; i<n; i++){
    
    

//     if((n-1) === i){

//         // console.log(newStr = lastPrint.repeat(n) )
//         arr.push('#')
//     }else{
//      arr.push(i)

        
//     }
// }

// console.log(arr.length * toPrint)

// // function print (t){

// //     for(let i=0; i<t; i++){

// //         console.log(arr.le)

// //     }


// }

// let lastPrint = toPrint.repeat(arr.length) + ' '
// console.log(arr)
// console.log(lastPrint)

// const steps = n => {

//     for (let i = 1; i <= n; i++) console.log("#".repeat(i) + " ".repeat(n - i));
  
//   }

// steps(15)



//recursive solution

const steps = (n, x = 1) =>  {

    if(n < x){
        return;
    }else{
        
    console.log('#'.repeat(x) + ' '.repeat(n-x))

   
   steps(n, x+1)
    
    }

  

}

steps(4)

module.exports = steps;


