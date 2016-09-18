(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.state = "";
    $scope.checkIfTooMuch = function()
    {
      var lunchItemsArray = $scope.lunchItems.split(",");
      if(lunchItemsArray.length <=3) {
          $scope.state = "Enjoy!";
      }
      else {
        $scope.state = "Too much!";
      }
    };
  }
})();
