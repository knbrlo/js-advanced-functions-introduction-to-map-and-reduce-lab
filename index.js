function mapToNegativize(arrayOfValues) {
    return arrayOfValues.map(value => {
        return value * -1;
    })
}

function mapToNoChange(arrayOfValues) {
    return arrayOfValues.map(value => {
        return value;
    })
}

function mapToDouble(arrayOfValues) {
    return arrayOfValues.map(value => {
        return value * 2;
    })
}

function mapToSquare(arrayOfValues) {
    return arrayOfValues.map(value => {
        return value**2;
    })
}

function reduceToTotal(arrayOfValues, startingPoint) {
    let finalTotal = 0;
    if (startingPoint != undefined) {
      finalTotal += startingPoint;
    }
    finalTotal += arrayOfValues.reduce((a, b) => a + b, 0);
    return finalTotal;
}

function reduceToAllTrue(arrayOfValues) {
    let finalValue = false;
    arrayOfValues.map(value => {
        if (value) {
            finalValue = true;
        } else {
            finalValue = false;
        }
    });
}

function reduceToAllTrue(arrayOfValues) {
    return arrayOfValues.every(Boolean);
}

function reduceToAnyTrue(arrayOfValues) {
    return arrayOfValues.reduce((a, b) => {
        let finalValue = false;
        if (a || b) {
        finalValue = true;
        }
        return finalValue;
    }, 0);
}
