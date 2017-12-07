module.exports = function getPositiveKeysOfBoolset(array) {
    var resultArr = [];
    for (var i = 0; i < array.length; i += 2) {
        var value = array[i];
        var boolKey = array[i + 1];

        if (boolKey) {
            resultArr.push(value);
        }
    }
    return resultArr;
};
