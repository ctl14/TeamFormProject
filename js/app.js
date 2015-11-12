'use strict';

angular.module('TeamFormApp', [])
.controller('TeamFormCtrl', ['$scope', function($scope) {
    $scope.submitted = true;

    $scope.submit = function(form) {
        if(form.$valid) {
            $scope.submitted = false;
        }
    };

    $scope.reset = function() {

        location.reload();
    };
}]);