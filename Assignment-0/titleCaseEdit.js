function titleCaseEdit(title) {
    
    //convert sentence to array of words
    let title_array = title.split(" ");
    let solutionString = '';

    //iterate over each word in array
    for (let index = 0; index < title_array.length; index++) {

        title_array[index] = title_array[index].charAt(0).toUpperCase() + title_array[index].slice(1);
        //capitalize first letter then combine with rest of string

        solutionString += title_array[index] + ' ';
    }

    return solutionString.trim();
}

// Do not edit this line;
module.exports = titleCaseEdit;
