function isPalindrome(word) {
  
    // make case uniform for all letters to prevent case sensitivity error
    let test = word.toUpperCase();

    for (let i = 0; i < test.length/2; i++) {
        if (test[i] != test[test.length-1-i]) {
            return false
        }
        
    }

    return true;
}

// Do not edit this line;
module.exports = isPalindrome;
