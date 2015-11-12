'use strict';

angular.module('TeamFormApp', [])
.controller('TeamFormCtrl', ['$scope', function($scope) {
    $scope.submitted = true;

    $scope.submit = function() {

        $scope.submitted = false;
    };

    $scope.reset = function() {

        $scope.submitted = true;
    };
}]);