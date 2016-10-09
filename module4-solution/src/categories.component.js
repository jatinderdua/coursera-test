(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'menuapp/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
