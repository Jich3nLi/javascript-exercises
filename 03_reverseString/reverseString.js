const reverseString = function(word) {
    let result = "";
    for(let i = 0; i < word.length; i++){
        result += word[word.length - 1 - i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
