function fizzBuzz(start, end) {

    let outputArray = [];

    // because the start increments by one until end,
    // they can be the bounds of the loop
    for (let i = start; i <= end; i++) {
        
        if (i % 3 === 0 && i % 5 != 0) {
            outputArray.push('Fizz');
        }

        else if (i % 5 === 0 && i % 3 != 0) {
            outputArray.push('Buzz');
        }

        else if (i % 3 === 0 && i % 5 === 0) {
            outputArray.push('FizzBuzz');
        }
        
        else {
            outputArray.push(i);
        }
    }

    return outputArray;

}

// Do not edit this line;
module.exports = fizzBuzz;
