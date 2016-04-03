angular.module("songApp", ["songApp.services","songApp.controller","ngResource","ui.router"])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      templateUrl: "views/mainView.html",
      controller: "mainController"
    });

    $urlRouterProvider.otherwise('/app');
})

.run(function($location) {
  $location.path('/app');
});
