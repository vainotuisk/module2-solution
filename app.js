(function () {
'use strict';

var initialList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var boughtController = this;
boughtController.boughtlist = ShoppingListCheckOffService.getBoughtlist();
}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyList = initialList;
  var boughtList = [];
  service.getbuyList = function () {
    return tobuyList;
  }

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


})();
