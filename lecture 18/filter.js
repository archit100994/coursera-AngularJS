var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5filter (value) {
    return value>5;
}

var filteredNumberArray = numberArray.filter(above5filter);

console.log("filtered Number array: ", filteredNumberArray);