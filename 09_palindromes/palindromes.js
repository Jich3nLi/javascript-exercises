const palindromes = function (string) {
    const alphanumerics = "abcdefghijklmnopqrstuvwxyz1234567890";
    let cleanArray = string.toLowerCase()
                            .split("")
                            .filter((character) => alphanumerics.includes(character));
    let cleanString = cleanArray.join("");
    let reversedCleanString = cleanArray.reverse()
                                        .join("");
    return cleanString == reversedCleanString;
};

// Do not edit below this line
module.exports = palindromes;
