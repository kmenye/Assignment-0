function pairSum(nums, target) {
  
    if (nums.length <=1) {
        throw "error";
    }    

    for (let i = 0; i < nums.length; i++) {
        
        // traverse array for corresponding value of target
        if (nums.includes(target-nums[i])) {
            return true;
        }
        
    }

    return false
}

// Do not edit this line;
module.exports = pairSum;
