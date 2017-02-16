(function() {
  'use strict';

  angular
    .module('ricardoCh')
    .directive('myTotaltopay', myTotaltopay);

  /** @ngInject */
  function myTotaltopay() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/totaltopay/totaltopay.html',
      scope: {
        creationDate: '='
      },
      controller: TotaltopayController,
      controllerAs: 'tot',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TotaltopayController($http, $log, $scope) {
      $scope.isDisabled = false;

      $scope.pay = function() {
        $scope.toPay = 0;
        $scope.isDisabled = true;
        $scope.$root.payed = true;
      };

      $http({
          method: 'GET',
          url: 'assets/billing.json'
        })
        .then(
          function(json) {
            var openInv = json.data.openInvoices;
            $scope.toPay = 0;
            for (var item in openInv) {
              $scope.toPay += openInv[item].balance;
            }
            return tot;
          },
          function() {
            $log.warn('An error occured');
          });

    }
  }

})();
