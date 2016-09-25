(function(){
'use strict';
   angular.module('ShoppingListCheckOff',[])
   .controller('ToBuyShoppingController', ToBuyShoppingController)
   .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
   .service('ShoppingListCheckOffService' , ShoppingListCheckOffService);

   ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
   AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

   function ToBuyShoppingController(ShoppingListCheckOffService) {
     var toBuy = this;
     toBuy.toBuyItems = ShoppingListCheckOffService.getBuyItems();
     toBuy.buyItem = function(itemIndex)
     {
        ShoppingListCheckOffService.buyItem(itemIndex);
     };
  }


   function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
     var alreadyBought = this;
     alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
   }

   function ShoppingListCheckOffService() {
     var service = this;
     var buyItems = [];
     var boughtItems = [];
     var item = {name:'chips', quantity:2 };
     buyItems.push(item);
     item = {name:'cookies', quantity:6 };
     buyItems.push(item);
     item = {name:'soda', quantity:12 };
     buyItems.push(item);
     item = {name:'coffee', quantity:1 };
     buyItems.push(item);
     item = {name:'candy', quantity:10 };
     buyItems.push(item);

     service.getBuyItems = function () {
        return buyItems;
     };


     service.getBoughtItems = function () {
         return boughtItems;
    };

     service.buyItem= function (itemIndex) {
        boughtItems.push(buyItems[itemIndex]);
        buyItems.splice(itemIndex, 1);
     };

   }
})();
