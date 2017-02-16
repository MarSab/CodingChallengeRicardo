(function() {
  'use strict';

  angular
    .module('ricardoCh', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngMaterial', 'toastr', 'material.components.expansionPanels'])
    .run(function($rootScope) {
      $rootScope.payed = false;
    });

})();
