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

//<<<<<<< HEAD
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





//=======
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
//>>>>>>> dfffb5952d2933f0b795fc3a7ab56cfa21c34ca6
}]);