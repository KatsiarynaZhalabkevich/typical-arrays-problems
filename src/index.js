
const isArray = (array) => array && array.length;

exports.min = (array) => {
    if (isArray(array)) {
        return Math.min(...array);
    }
    return 0;
}

exports.max = (array) => {
    if (isArray(array)) {
        return Math.max(...array);
    }
    return 0;
}

exports.avg = (array) => {
    if (isArray(array)) {
        return array.reduce( (acc, currVal) => acc + currVal) / array.length;
    }
    return 0;
}
