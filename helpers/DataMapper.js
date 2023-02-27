const { getModularInstance } = require("@firebase/util");

const mapObjectToArray = (object) => {
    const mappedArray = [];
    Object.keys(object).forEach((key, index) => {
        mappedArray.push(object[key]);
    });

    return mappedArray;
}

module.exports = {
    mapObjectToArray,
}