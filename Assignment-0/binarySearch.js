class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    
        
        // middle element for comparison
        let middle = Math.floor(nums.length/2);

        //base case, if one element and that element is not target
        if (nums.length === 1 && nums[0] != target) {
            return false;
        }

        // best case, target is middle value
        else if (nums[middle] === target) {
            return true;
        }

        // if target is greater than mid value, start over with greater half of array with current midpoint as the start
        else if (target > nums[middle]) {
            return this.binarySearch(nums.slice(middle), target);
        }

        // if target is smaller than mid value, start over with lesser half of array with current mid as endpoint
        else if (target < nums[middle]) {
            return this.binarySearch(nums.slice(0,middle), target);
        }
    
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
