var singleNumber = function(nums) {

 for(char of nums){
  if(char !== nums.lastIndexOf(nums[char])){
      console.log(char)
      return char
  }
 }

}


singleNumber([2,2,1])