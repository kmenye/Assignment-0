function setUnionOfAnyAmountOfSets(...args) {
  
    let universal = [];

    // create new set containing all elements
    for (let i = 0; i < args.length; i++) {
        universal.push(...args[i]);
        
    }

    // create proper set from universal
    let result = new Set(universal);

    return result;


}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
