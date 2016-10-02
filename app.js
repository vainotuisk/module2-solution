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
  },
  {
    name: "Beer",
    quantity: "6"
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
boughtController.boughtList = ShoppingListCheckOffService.getBoughtlist();
};

// Controller for tobuy items
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var buyController = this;
buyController.buylist = ShoppingListCheckOffService.getbuyList();
buyController.buyItem = function(itemIdex) {
  ShoppingListCheckOffService.buyItem(itemIdex);

}
};

// service for both controllers

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyList = initialList;

// List of bought items
  var boughtList = [];
  service.getbuyList = function () {
    return tobuyList;
  };

  service.getBoughtlist = function () {
    console.log("osta vaja: ", boughtList);
    return boughtList;
  };
  service.buyItem = function(itemIdex) {
    boughtList.push(tobuyList[itemIdex]);
    tobuyList.splice(itemIdex,1);
  };

}


})();
