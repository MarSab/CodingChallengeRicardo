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
        creationDate: '='
      },
      controller: InvoicesController,
      controllerAs: 'oi',
      bindToController: true
    };

    /** @ngInject */
    function InvoicesController() {
      var oi = this;

      oi.openInvoices = [{
      "id": "CH1612000000000000161",
      "date": "2016-12-21T15:47:00Z",
      "total": 45,
      "payment_due_date": "2017-01-21T15:47:00Z",
      "reminder": 0
    },
    {
      "id": "CH1612000000000000162",
      "date": "2016-12-21T15:47:00Z",
      "total": 33,
      "payment_due_date": "2017-01-23T13:13:00Z",
      "reminder": 1
    }];
return directive;
    }

  }

})();
