function sumOfNumsWithinARange(nums, start, end) {
      
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= start && nums[i] <=end) {
            total++;
        }
        
    }

    return total;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
