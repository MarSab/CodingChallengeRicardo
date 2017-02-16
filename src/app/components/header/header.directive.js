(function() {
  'use strict';

  angular
    .module('ricardoCh')
    .directive('myHeader', myHeader);

  /** @ngInject */
  function myHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      scope: {
        creationDate: '='
      },
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeaderController() {
    }
  }

})();
