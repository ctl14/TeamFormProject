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

    $scope.ageCheck = function () {
        var birthdate = Date.parse($scope.birthdate);
        var oldEnough = (Date.now()-410240038000);
        if(birthdate <= oldEnough){
            console.log("old enough");
            return true;
        }else{
            console.log("Too Young");
            return false;
        }
    };

        $scope.validDate = function () {
            var birthdate = Date.parse($scope.birthdate);
            if(isNaN(birthdate)){
                return false;
            }else {
                return true;
            }
        };





}]);