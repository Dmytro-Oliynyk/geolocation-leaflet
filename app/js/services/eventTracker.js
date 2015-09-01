app.factory('eventTracker',[function(){
	var eventDetected = "No events yet...";
	return {
		detected: function(leafletEvents,$scope){
			var mapEvents = leafletEvents.getAvailableMapEvents();
	        for (var k in mapEvents){
	        	 var eventName = 'leafletDirectiveMap.' + mapEvents[k];
	             $scope.$on(eventName, function(event){
	             	eventDetected = event.name;
	        	  });
	  		}
	  		return eventDetected;
  		},
	};
}]);