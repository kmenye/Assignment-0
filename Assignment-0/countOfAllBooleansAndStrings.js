function countOfAllBooleansAndStrings(arr) {

    let total = 0;

    for (let i = 0; i < arr.length; i++) {

        // only increment number of booleans if true or false or string, keeping comparisons per element to a max of two
        if (arr[i] === true || arr[i] === false) 
        {
            total++;
        }

        else if (typeof arr[i] == 'string') 
        {
            total++;
        }
        
    }

    return total;

}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
