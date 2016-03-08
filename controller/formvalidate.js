var app = angular.module('myapp',[
		'jcs-autoValidate'
	]);

app.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
		errorMessages['badname']='Username requires letters only';
		errorMessages['minage']='You must be at least {0} years old to register';
		errorMessages['maxage']='You must be max {0} years old to register';
		errorMessages['badusername']='Username requires letters, numbers and max 15 chars';

	})
});

app.controller('validateform', function ($scope) {
    $scope.formModel = {};
    
    $scope.onSubmit = function () {
    		console.log($scope.formModel);	
    	}
});