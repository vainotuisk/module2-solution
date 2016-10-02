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

// Controller for bought items

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var boughtController = this;
boughtController.boughtlist = ShoppingListCheckOffService.getBoughtlist();
};

// Controller for tobuy items
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var buyController = this;
buyController.buylist = ShoppingListCheckOffService.getbuyList();
console.log('otsitav:' + buyController.buylist );
buyController.buyItem = function(itemIdex) {
  ShoppingListCheckOffService.buyItem(itemIdex);

}
};

// service for both controllers

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyList = initialList;

  var boughtList = [];
  service.getbuyList = function () {
    console.log(tobuyList);
    return tobuyList;
  };

  service.getBoughtlist = function () {
    return boughtList;
  };
  service.buyItem = function(itemIdex) {
    boughtList.push(tobuyList[itemIdex]);
    tobuyList.splice(itemIdex,1);
  };

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
