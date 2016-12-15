(function (){
    'use strict';

    var shoppingList= [
        "Milk", "donuts", "Cookies", "Choclate", "peanut butter",
        "pepto bismol", "pepto bismol (Choclate flavor)",
        "pepto bismol (Cookie flavor)"
    ];

    angular.module('shoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        $scope.shoppingList = shoppingList;
    };

})();
