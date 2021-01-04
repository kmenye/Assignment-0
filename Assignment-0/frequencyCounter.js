function frequencyCounter(word) {
      
    let result = {};

    for (let i = 0; i < word.length; i++) {

        let element = word.charAt(i);

        if (result[element]) {
           result[element]++;
        } 
        
        else {
           result[element] = 1;
        }
    }

    return result;
}

// Do not edit this line;
module.exports = frequencyCounter;
