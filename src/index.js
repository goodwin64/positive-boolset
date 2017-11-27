module.exports = function getPositiveKeysOfBoolset(boolset) {
    let result = [];
    for (
        let index = 0,
            iterations = boolset.length,
            key = boolset[index + 1],
            value = boolset[index];
        index < iterations;
        index += 2,
        key = boolset[index + 1],
        value = boolset[index]
    ) {
        if (key) {
            result.push(value);
        }
    }
    return result;
};