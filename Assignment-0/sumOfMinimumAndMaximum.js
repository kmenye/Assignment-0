function sumOfMinimumAndMaximum(nums) {
  
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {

        //compare each number to infinity, continuously update lowest number through array traversal
        if (nums[i] < min) 
        {
            min = nums[i];
        }
        
    }

    for (let i = 0; i < nums.length; i++) {

        //compare each number to -infinity, continuously update highest number through array traversal
        if (nums[i] > max) 
        {
            max = nums[i];
        }
        
    }

    return (min + max);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
