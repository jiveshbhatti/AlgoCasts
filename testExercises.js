function repeat (array){

    let obj = {}

   for (let index = 0; index < array.length; index++) {
   console.log(array[index])

   if(obj[array[index]] !== undefined){
    console.log('dup found', array[index])
    break
   }else{
    obj[array[index]] = array[index]
   }
   }

    console.log(obj)
}


repeat([2,5,1,2,4,3])