angular.module("songApp.controller", [])

.controller("mainController", ["$scope","ListAllGenresService", function($scope, ListAllGenresService) {
  $scope.pageIndex = 0;
  $scope.displayGenreArray = [];
  $scope.paginationArr = [];
  var genreArr = [];
  var genre = ListAllGenresService.query().$promise.then(function(successResponse) {
    genreArr = successResponse;
    var floatingPointPart = (genreArr/5) % 1;
    var integerPart = Math.floor(18/7);
    console.log("floatingPointPart", floatingPointPart);
    console.log("integerPart", integerPart);
    if(isNaN(floatingPointPart)) {
      $scope.lastIndex = integerPart;
    } else {
      $scope.lastIndex = integerPart + 1;
    }
    for (var i = 0; i < $scope.lastIndex; i++) {
      $scope.paginationArr.push(i);
    }

  }, function() {

  });

  var manageDisplayArr = function(pageIndex) {
    $scope.pageIndex = pageIndex;
    for (var i = 0; i < array.length; i++) {
      array[i];
    }
  };

  $scope.openSlider = function() {
    var bodyArea = angular.element(document.querySelector(".body-area"));
    var sidebar = angular.element(document.querySelector(".sidebar"));

    bodyArea.toggleClass("sidebar-open");
    sidebar.toggleClass("open");
  };

}]);
