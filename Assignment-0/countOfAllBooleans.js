function countOfAllBooleans(arr) {

    let numBooleans = 0;

    for (let i = 0; i < arr.length; i++) {

        // only increment number of booleans if true or false, keeping comparisons per element to a max of two
        if (arr[i] === true || arr[i] === false) 
        {
            numBooleans++;
        }
    }

    return numBooleans;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
