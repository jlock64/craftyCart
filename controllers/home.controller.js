angular
  .module('craftyCart')
  .controller('HomeController', function($scope, CraftyService, $routeParams) {

    function pageLoad() {
      CraftyService.getCrafts()
        .then(function(data) {
          console.log(data);
          window.glob = data;
          var crafts = data.data.results.map(function(el) {
            // if(indexOf(el.MainImage.url_170x135) === -1 ) {
            //   return el.MainImage;
            // }
            return {
              title: el.title,
              desc: el.description,
              price: el.price,
              image: el.MainImage.url_170x135,
              url: el.url,
              id: el.listing_id,
              materials: el.materials.map(function(el) {
                console.log(el);
                return el.toString();
              }),
            }
          })
          $scope.crafts = crafts;
          console.log(crafts);
        });
    } // end of pageLoad
    pageLoad();




  }); // end of Controller
