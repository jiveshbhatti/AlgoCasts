arrVal = (val, find) =>{

    let start = 0;
    let end = val.length -1;
    let middle = Math.floor((start +end)/2)

    while(val[middle]!==find && start <= end){
        if(find < val[middle]){
            end = middle -1 
        }else{
            start = middle +1
        }
        middle = Math.floor((start+end)/2)
    }
    return middle
    
}

arrVal([2,55,33, 66,77,88], 33)

