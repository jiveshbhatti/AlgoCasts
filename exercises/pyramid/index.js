// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {


    let a = 1
    let b = n
    let d = '#'


    for(i=0; i<n; i++){
    
    b = b - 1
    
    console.log(' '.repeat(b) + d.repeat(a) + ' '.repeat(b))
    
    a += 2





    }

  
}

pyramid(5)


// function pyramid(n) {
//     let j = n;
//     let s = 1;
//     for (let i = 0; i < n; i++) {
//     j = j - 1;
//     console.log('-'.repeat(j) + "#".repeat(s) + '-'.repeat(j))
//     s += 2
//     }
//    }

module.exports = pyramid;
