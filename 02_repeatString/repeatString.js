const repeatString = function(String_1, repeat_times) {
    let result = "";
    for(let i = 0; i < repeat_times; i++) {
        result += String_1;
    }
    return result;   
};

// Do not edit below this line
module.exports = repeatString;
