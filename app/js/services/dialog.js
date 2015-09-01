app.factory('myDialog',['$mdDialog','eventTracker','leafletEvents',function($mdDialog,eventTracker,leafletEvents){
	var scopeTemp;
	return{
		setScopeTemp: function(scope){
			scopeTemp=scope;
		},
		showAlert: function(ev){
			$mdDialog.show(
		        $mdDialog.alert()
		          .parent(angular.element(document.querySelector('#popupContainer')))
		          .clickOutsideToClose(true)
		          .title('This is an alert title')
		          .content(eventTracker.detected(leafletEvents,scopeTemp))
		          .ariaLabel('Alert Dialog Demo')
		          .ok('Got it!')
		          .targetEvent(ev)
      			);
		},
		showAddressLocation: function(ev){
			 $mdDialog.show({
			      controller:'DialogController',
			      templateUrl:'views/addressDialog.html' ,
			      parent: angular.element(document.body),
			      targetEvent: ev,
			      clickOutsideToClose:true
		    })
		    .then(function() {
			      scopeTemp.status = 'You said the information.';
			    }, function() {
			      scopeTemp.status = 'You cancelled the dialog.';
		    });
		},
		showLocationInfo: function(ev){
			 $mdDialog.show({
			      controller:'LocationController',
			      templateUrl:'views/infoDialog.html' ,
			      parent: angular.element(document.body),
			      targetEvent: ev,
			      clickOutsideToClose:true
		    })
		    .then(function() {
			      scopeTemp.status = 'You said the information.';
			    }, function() {
			      scopeTemp.status = 'You cancelled the dialog.';
		    });
		}
	};
}]);