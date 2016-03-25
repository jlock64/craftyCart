angular
  .module('craftyCart', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/craft/:craftId', {
        templateUrl: "templates/show.html",
        controller: "CraftController"
      })
      .when('/cart', {
      templateUrl: "templates/cartView.html",
      controller: "CartController"
      })
      .when('/404',{
       template: '<h1> You messed up, loser </h1>',
       controller: 'CraftController'
     })
  });
