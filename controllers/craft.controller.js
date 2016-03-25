angular
  .module('craftyCart')
  .controller('CraftController', function($scope, CraftyService, $routeParams) {

    console.log($routeParams.craftId);

    if($routeParams.craftId) {
      CraftyService.showCraft($routeParams.craftId)
        .then(function(craft) {
          console.log("info", craft);
          window.glob = craft;
          $scope.craft = craft.data.results[0];
        })
    }

    });
