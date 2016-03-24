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

  });
