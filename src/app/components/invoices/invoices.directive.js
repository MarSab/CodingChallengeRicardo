(function() {
  'use strict';

  angular
    .module('ricardoCh')
    .directive('myInvoices', myInvoices);

  /** @ngInject */
  function myInvoices() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/invoices/invoices.html',
      scope: {
        openInv: '='
      },
      controller: InvoicesController,
      controllerAs: 'oi',
      bindToController: true
    };

    /** @ngInject */
    function InvoicesController($http, $log, $scope) {
      
      $http({method: 'GET', url:'assets/billing.json'})
    .then(
        function(json) {
          $scope.openInv = json.data.openInvoices;

        },
        function() {
            $log.warn('An error occured');
        });

return directive;
    }

  }

})();
