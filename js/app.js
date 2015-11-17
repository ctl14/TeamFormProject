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
        $scope.verifyBirthdate = function () {
            var enteredBirthdate = Date.parse($scope.birthdate);
            var oldEnough = (Date.now()-410240038000);
            //Case: if entered birthdate in not valid
            if(isNaN(enteredBirthdate)){
                $scope.teamForm.birthdate.$setValidity("age", true);
                $scope.teamForm.birthdate.$setValidity("format", false);
                //Case: if entered birthdate is valid and old enough
            }else if (!isNaN(enteredBirthdate) && enteredBirthdate <= oldEnough ) {
                $scope.teamForm.birthdate.$setValidity("age", true);
                $scope.teamForm.birthdate.$setValidity("format", true);
                //Case: if entered birthdate is not old enough
            }else{
                $scope.teamForm.birthdate.$setValidity("age", false);
                $scope.teamForm.birthdate.$setValidity("format", true);
            }
        };

        $scope.verifyPassword = function() {
            if(!$scope.teamForm.confirmPassword.$pristine) {
                console.log($scope.confirmPassword);
                //Case: If confirmation password input has been touched but no password is
                //      entered, invalidate input, display error to retype password
                if($scope.confirmPassword === undefined) {
                    $scope.teamForm.confirmPassword.$setValidity("match", true);
                    $scope.teamForm.confirmPassword.$setValidity("text", false);
                    //Case: If passwords match, validate input, no errors
                } else if($scope.password === $scope.confirmPassword) {
                    $scope.teamForm.confirmPassword.$setValidity("match", true);
                    $scope.teamForm.confirmPassword.$setValidity("text", true);
                    //Case: If confirmation password is entered, but does not match password,
                    //		invalidate input, display error that password do not match
                } else {
                    $scope.teamForm.confirmPassword.$setValidity("match", false);
                    $scope.teamForm.confirmPassword.$setValidity("text", true);
                }
            }
        }

    }]);