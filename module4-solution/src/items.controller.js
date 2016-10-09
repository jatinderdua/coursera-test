
  (function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
ItemsListController.$inject = ['items'];
function ItemsListController(items) {
  var catItemsList = this;
  catItemsList.items = items.data.menu_items;
  catItemsList.name = items.data.category.name;

}

})();
