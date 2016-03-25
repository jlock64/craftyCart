angular
  .module('craftyCart')
  .service('CraftyService', function($http) {
    var key = 'iyhmf98ikk1p52incedpu8n2';
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + '&includes=MainImage');

    // var cacheEngine = $cacheFactory('myCacheEngine');

       function getCrafts() {
         return $http.get(cors + url);
       }

       function showCraft(id) {
         return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + '&includes=MainImage'));
       }

       function addToCart(item) {
         return $http.post('http://tiny-tiny.herokuapp.com/collections/justinCart', item);
       }

       function getCart() {
         return $http.get('http://tiny-tiny.herokuapp.com/collections/justinCart');
       }

       function deleteCraft(id) {
         return $http.delete(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + '&includes=MainImage'));
       }




    return {
      getCrafts: getCrafts,
      showCraft: showCraft,
      addToCart: addToCart,
      deleteCraft: deleteCraft,
      getCart: getCart
    };
  })
