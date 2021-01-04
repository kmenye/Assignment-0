function cutInHalfAndFloor(num) {
    
    return num/2 - (num/2%1);
    //subtracts the floating point portion of the number from original number
    //the difference should be an integer every time
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;
