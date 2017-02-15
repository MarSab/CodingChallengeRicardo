(function() {
  'use strict';

  angular
    .module('ricardoCh')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
