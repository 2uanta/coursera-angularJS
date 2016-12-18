(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItems();
  toBuy.boughtItem = function (itemIndex) {
    console.log("Inside toBuy.boughtItem");
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
  console.log("toBuy.items: ", toBuy.items);
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyList = [
    { name: "cartons of milk", quantity: 10},
    { name: "donuts", quantity: 5},
    { name: "cookies", quantity: 6},
    { name: "chocolate", quantity: 3},
    { name: "bags of chips", quantity: 4}
  ];
  var alreadyBoughtList = [];

  service.boughtItem = function (itemIndex) {
    alreadyBoughtList.push(toBuyList[itemIndex]);
    console.log("New alreadyBoughtList: ", alreadyBoughtList);
    toBuyList.splice(itemIndex, 1);
    console.log("New toBuyList: ", toBuyList);

  }

  service.getItems = function() {
    return toBuyList;
  }

  service.getBoughtItems = function() {
    return alreadyBoughtList;
  }
}
}());
