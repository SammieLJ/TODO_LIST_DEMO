// Modal Form script
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($modal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  var modalInstance = $uibModal.open({
    animation: $ctrl.animationsEnabled,
    component: 'modalComponent',
    resolve: {
      items: function () {
        return $ctrl.items;
        
      }
    }
  });

}

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('ui.bootstrap.demo').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
      console.log('Klic funkcije $onInit');
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
      $ctrl.close({$value: 'Konec OK');
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});