const lengthArrayGL = ['kilometer','meter','centimeter','millimeter'];
const lengthMillimeterGL = [1000000, 1000, 10, 1]
const lengthArrayUS = ['miles','yard','foot','inch'];
const kelvinBaseNum = 273.15;
const lengthInchArrayUS = [63360, 36, 12, 1];
const oneInchToMilimeter = 25.4;
const weightArrayNames = ['kilogram','pound','ounce','milligram']
const weightMilligramArray = [1000000, 453592, 283495, 1];


function convertLength(fromType, toType, value) {
    let firstIndex = 0;
    let secondIndex = 0;
    let GLCount = 0;
    if(lengthArrayGL.includes(fromType) && lengthArrayGL.includes(toType)) {
        firstIndex = lengthArrayGL.findIndex((val) => val == fromType);
        secondIndex = lengthArrayGL.findIndex((val) => val == toType);
        if(toType == 'millimeter') {
            GLCount = lengthMillimeterGL[firstIndex] * value;
        } else {
            GLCount = (value * lengthMillimeterGL[firstIndex]) / lengthMillimeterGL[secondIndex];
        }
    } else if (lengthArrayUS.includes(fromType) && lengthArrayUS.includes(toType)) {
        firstIndex = lengthArrayUS.findIndex((val) => val == fromType);
        secondIndex = lengthArrayUS.findIndex((val) => val == toType);
        if(toType == 'inch') {
            GLCount = lengthInchArrayUS[firstIndex] * value;
        } else {
            GLCount = (value * lengthInchArrayUS[firstIndex]) / lengthInchArrayUS[secondIndex];
        }
    } else if (lengthArrayUS.includes(fromType) && lengthArrayGL.includes(toType)) {
        firstIndex = lengthArrayUS.findIndex((val) => val == fromType);
        secondIndex = lengthArrayGL.findIndex((val) => val == toType);
        GLCount = ((value * lengthInchArrayUS[firstIndex]) * oneInchToMilimeter);
        if(toType != 'millimeter') {
            GLCount = GLCount / (lengthMillimeterGL[secondIndex]);
        } 
    } else {
        firstIndex = lengthArrayGL.findIndex((val) => val == fromType);
        secondIndex = lengthArrayUS.findIndex((val) => val == toType);
        GLCount = ((value * lengthMillimeterGL[firstIndex]) / oneInchToMilimeter)
        if(toType != 'inch') {
            GLCount = GLCount / (lengthInchArrayUS[secondIndex]);
        } 
    }
    return `The Value from ${value} ${fromType} To ${GLCount} ${toType}`;
}
function convertTemperature(fromType, toType, value) {
    let GLCount = 0;

    if(toType == 'kelvin') {
        GLCount = fromType == 'celsius' ? kelvinBaseNum + value : ( value - 32 ) * ( 5 / 9 ) + kelvinBaseNum;
    } else if(toType == 'fahrenheit') {
        GLCount = fromType == 'celsius' ? value : (value - kelvinBaseNum);
        GLCount = GLCount * (9 / 5) + 32;
    } else {
        GLCount = fromType == 'kelvin' ? (value - kelvinBaseNum) : ( value - 32 ) * ( 5 / 9 );
    }
    return `The Value from ${value} ${fromType} To ${GLCount} ${toType}`;
}
function convertWeight(fromType, toType, value) {
    firstIndex = weightArrayNames.findIndex((val) => val == fromType);
    secondIndex = weightArrayNames.findIndex((val) => val == toType);
    if(toType == 'milligram') {
        GLCount = weightMilligramArray[firstIndex] * value;
    } else {
        GLCount = (value * weightMilligramArray[firstIndex]) / weightMilligramArray[secondIndex];
    }
    return `The Value from ${value} ${fromType} To ${GLCount} ${toType}`;
}

module.exports = {convertLength, convertTemperature, convertWeight}
