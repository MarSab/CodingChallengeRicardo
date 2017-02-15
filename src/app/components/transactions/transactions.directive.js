(function() {
  'use strict';

  angular
    .module('ricardoCh')
    .directive('myTransactions', myTransactions);

  /** @ngInject */
  function myTransactions() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/transactions/transactions.html',
      scope: {
        trans: '='
      },
      controller: TransactionsController,
      controllerAs: 'tr',
      bindToController: true
    };


    /** @ngInject */
    function TransactionsController($http, $log, $scope) {

      $http({method: 'GET', url:'assets/billing.json'})
    .then(
        function(json) {
          $scope.trans = json.data.latestTransactions;
        }),
        function() {
            $log.warn('An error occured');
        };
      }
    return directive;
  }

})();
