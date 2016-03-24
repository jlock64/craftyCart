angular
  .module('craftyCart')
  .service('CraftyService', function($http) {
    var key = 'iyhmf98ikk1p52incedpu8n2';
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + '&includes=MainImage');

       function getCrafts() {
         return $http.get(cors + url);
       }

      //  function showCraft(id) {
      //    return $http.get(cors + url + "/" + id)
      //  }

       function showCraft(id) {
             return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + '&includes=MainImage'));
           }


    return {
      getCrafts: getCrafts,
      showCraft: showCraft
    };
  })
