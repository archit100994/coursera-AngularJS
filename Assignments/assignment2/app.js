(function() {
    "use strict";

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.itemToBuy;

        this.moveItem = function (index) {
            ShoppingListCheckOffService.moveItem(index);
        };
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.itemBought;
    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.itemToBuy = [
            {name: "Cookie", quantity: 10},
            {name: "Chips", quantity: 5},
            {name: "Soda", quantity: 10},
            {name: "Fries", quantity: 20},
            {name: "Pizza", quantity: 8},
            {name: "Choclate", quantity: 50}
        ];

        service.itemBought = [];

        service.moveItem = function (index) {
            service.itemBought.push(service.itemToBuy[index]);
            service.itemToBuy.splice(index, 1);
        };
    }
})();
