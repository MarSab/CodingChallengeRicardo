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
        creationDate: '='
      },
      controller: TransactionsController,
      controllerAs: 'tr',
      bindToController: true
    };


    /** @ngInject */
    function TransactionsController() {
      var tr = this;

      tr.transactions = [{
        "id": "CH1612000001000000004",
        "date": "2016-12-07T10:38:00Z",
        "type": "payment",
        "total": -1000
      },
      {
        "id": "CH1612000000000000151",
        "date": "2016-12-20T17:32:00Z",
        "type": "fees",
        "total": 114.9
      },
      {
        "id": "CH1612000000000000152",
        "date": "2016-12-20T17:33:00Z",
        "type": "credit_note",
        "total": -100
      },
      {
        "id": "CH1612000000000000160",
        "date": "2016-12-21T15:45:00Z",
        "type": "fees",
        "total": 10
      }];
    }

    return directive;
  }

})();
