(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'menuapp/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
