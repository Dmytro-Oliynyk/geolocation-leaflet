app.controller('LocationController',['$rootScope','$scope','$mdDialog','places','utils','leafletEvents', function($rootScope,$scope,$mdDialog,places,utils,leafletEvents){
	var disable=true;
 	
 	$scope.isDisable=function(){return disable;}
	//utils.initData($rootScope,$scope);

	$scope.position={
	        lat: 0,
	        lng: 0,
	        message: "",
	        focus: true,
	        draggable: true,
	        
	  	};

	 $scope.center=$rootScope.center;
	$scope.hide = function() {
	    $mdDialog.hide();
	};

	$scope.cancel = function() {
	    $mdDialog.cancel();
	};

	$scope.locationInfo = function(){
	     var x = document.getElementById("geolocation");
		    // places.showMyPosition(function(myLocation){
		    //     x.innerHTML = "Latitude: " + myLocation.lat + 
		    //   "<br>Longitude: " + myLocation.lng;  
		    //    $scope.position.lat = myLocation.lat
		    //    $scope.position.lng = myLocation.lng
		    // }); 
		    // disable = false;       
		var promis = places.showPosition();
		promis.done(function(lat,lng){
	       x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lng;  
	           $scope.position.lat = lat;
	           $scope.position.lng = lng;
	           console.log("TEST 3");
	            places.googlGeocodeByAddress(lat+","+lng).success(
	            	function(data){
	                	$scope.position.message=utils.dataIsOk(data)?data.results[0].formatted_address:"This is my position)))";
	            		console.log("TEST 4");
            		}
            	);
            disable = false;  
	    }).fail(function() { console.log("FAIL 0"); });    
	};
   
	$scope.apply = function() {
		$rootScope.mapMarkers=$.merge([ $scope.position], $rootScope.mapMarkers);
		disable=false;   
	    $mdDialog.hide();
	};
}]);