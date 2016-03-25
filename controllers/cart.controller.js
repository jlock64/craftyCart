angular
  .module('craftyCart')
  .controller('CartController', function($scope, CraftyService, $routeParams) {
    CraftyService.getCart()
      .then(function(data) {
        console.log(data);
        $scope.crafts = data.data;
      })

      $scope.deleteCraft = function(obj) {
     CraftyService.deleteCraft(obj._id)
       .then(function(data) {
         var objId = data.data._id
         var objPlace = $scope.crafts.findIndex(function(el,idx,arr) {
           return el._id === objId
         });
         $scope.crafts.splice(objPlace,1);
       });
   }

  });
