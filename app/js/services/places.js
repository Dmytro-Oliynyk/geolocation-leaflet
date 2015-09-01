app.factory('places',['$http',function($http){
	var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=49.83953241%7C24.02684212&gslimit=300&format=json&callback=JSON_CALLBACK';
	var mapsDevrelUrl = 'https://storage.googleapis.com/maps-devrel/google.json';
	
	var get = function(url){
		return $http.get(url)
			    .success(function(data){
			      	return data;
			  	});
	};

	var googleMapsSearch = function(address){
	  		var url ='http://maps.google.com/maps/api/geocode/json?address='+address+'&sensor=false';
 			return get(url);
	  	}; 

	return {
	  	wikiGeosearch : function(){
	  		return  $http.jsonp(wikiUrl)
			    		.success(function(data){
			      			return data;
					});
	  	},
	  	googleGeosearch : function(){
	  		return get(mapsDevrelUrl) ; 
	  	},
	  	// showMyPosition: function(callback){
  		// 	var showLocation = function(position) {
	   //          callback({
	   //          	lat:position.coords.latitude,
	   //          	lng:position.coords.longitude
	   //          });
	   //       };
	   //       var errorCallback =function(err){ 
	   //       	console.log(err);
	   //       }
	  	// 	if (navigator.geolocation) {
		  //         navigator.geolocation.getCurrentPosition(showLocation,errorCallback,  {maximumAge:600000, timeout: 20000});
		  //   } 
	  	// },
	  	showPosition: function(){
	  		var defer = $.Deferred();

	  	   	var showLocation=function(position){
	  			    console.log("TEST 2");
			        defer.resolve(position.coords.latitude, position.coords.longitude);
	         	};

	  		if (navigator.geolocation) {
	  			console.log("TEST 1");
		        navigator.geolocation.getCurrentPosition(showLocation);
		    } else{
		    	defer.reject;
		    }
		    return defer.promise();
	  	},
	  	googlGeocodeByAddress: function(address){
	  		return googleMapsSearch(address);
	  	}
	}
}]);