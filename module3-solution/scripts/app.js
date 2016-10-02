(function(){
'use strict';
   angular.module('NarrowItDownApp',[])
   .controller('NarrowItDownController', NarrowItDownController)
   .directive('foundItems', FoundItemsDirective)
   .service('MenuSearchService' , MenuSearchService);

   NarrowItDownController.$inject = ['MenuSearchService'];
   MenuSearchService.$inject = ['$http'];
   function NarrowItDownController(MenuSearchService) {
     var narrowDown = this;
     var found = [];

     narrowDown.search = function(searchTerm)
     {
        console.log('searchTerm ' , searchTerm);

          MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result){
           narrowDown.found = result;
           console.log(narrowDown.found.length);
         });
     };

     narrowDown.getFound = function()
     {
       return found;
     };

     narrowDown.onRemove = function(index)
     {
       narrowDown.found.splice(index,1);
     };
  }

  function FoundItemsDirective()
  {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrowDownList',
      bindToController: true
    };
    return ddo;
  }


   function MenuSearchService($http) {
     var service = this;

     service.getMatchedMenuItems = function (searchTerm) {
       return $http({url: "https://davids-restaurant.herokuapp.com/menu_items.json"}).then(function (result) {
         // process result and only keep items that match
         var foundItems = [];
         if(result.data)
         {
            for(var i = 0 ; i < result.data.menu_items.length ;i++)
            {
                var menuItem = result.data.menu_items[i];
                if(searchTerm != '' && menuItem.description.indexOf(searchTerm) != -1)
                {
                  foundItems.push(menuItem);
                }
            }
         }
         console.log('found items ' + foundItems.length);
         return foundItems;
     });
   };
 }
})();
