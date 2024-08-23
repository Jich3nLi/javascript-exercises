const removeFromArray = function(Array, Element) {
    for(let i = 0; i < Array.length; i++) {
        if (Array[i] == Element) {
            Array = Array.splice(i, 1);
            i--;
        }
    }
    return Array;
    // let new_Array = Array.filter(Element);
    // return new_Array;
};

// Do not edit below this line
module.exports = removeFromArray;
