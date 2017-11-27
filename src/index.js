module.exports = function getPositiveKeysOfBoolset(boolset) {
    const result = [];
    for (let index = 1, iterations = boolset.length; index < iterations; index += 2) {
        if (index % 2 === 1 && boolset[index]) {
            result.push(boolset[index - 1]);
        }
    }
    return result;
};