var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5filter (value) {
    return value>5;
}

var filteredNumberArray = numberArray.filter(above5filter);
console.log("filtered Number array: ", filteredNumberArray);

var shoppingList= [
    "Milk", "donuts", "Cookies", "Choclate", "peanut butter",
    "pepto bismol", "pepto bismol (Choclate flavor)",
    "pepto bismol (Cookie flavor)"
];
console.log("shoppingList: ", shoppingList );

var searchValue = "bismol";

function  containsFilter(value) {
    return value.indexOf(searchValue) != -1;
}

var searchedShoppingList = shoppingList.filter(containsFilter);
console.log(searchedShoppingList);
