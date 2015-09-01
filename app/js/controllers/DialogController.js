app.controller('DialogController',['$rootScope','$scope','$mdDialog','places','utils','leafletEvents', function($rootScope,$scope,$mdDialog,places,utils,leafletEvents){
		$scope.address='';

	  	var position={
	        lat: 0,
	        lng: 0,
	        message: "",
	        focus: true,
	        draggable: true,
	        
	  	};

		$scope.hide = function() {
		     $mdDialog.hide();
		};

		$scope.cancel = function() {
		    $mdDialog.cancel();
		};

		$scope.search = function() {
			places.googlGeocodeByAddress($scope.address).success(function(data){
				if (utils.dataIsOk(data)) {
				   var	addressLocation= data.results[0].geometry.location;
				   var formatted_address = data.results[0].formatted_address;
					position.lat = addressLocation.lat;
	       			position.lng = addressLocation.lng;
	       			position.message=formatted_address;
	       			$rootScope.center.lat=position.lat;
	       			$rootScope.center.lng=position.lng;
	                $rootScope.mapMarkers=$.merge([position], $rootScope.mapMarkers); 
                }; 
			});
		    $mdDialog.hide();
		  };
}]);