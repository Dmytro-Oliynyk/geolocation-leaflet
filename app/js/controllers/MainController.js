app.controller('MainController',['$rootScope' ,'$scope','places','utils','myDialog', function($rootScope,$scope,places,utils,myDialog){
  places.wikiGeosearch().success(function(data){
    $scope.geodata = data;
    $rootScope.mapMarkers = geodataToMarkers($scope.geodata);
  });

  places.googleGeosearch().success(function(data){
      $rootScope.geojson={
                    data: data,
                    style: {
                        fillColor: "green",
                        weight: 2,
                        opacity: 1,
                        color: 'white',
                        dashArray: '3',
                        fillOpacity: 0.7
                    }
      }
  });


utils.initData($rootScope,$scope);

angular.element(window).on("contextmenu", function(event){
   console.log(event.name);
   if(event.button==2){
     event.preventDefault();
     $scope.showAdressDialog();

   }
  });

  $scope.showAlert = function(ev){
    myDialog.setScopeTemp($scope);
    myDialog.showAlert(ev);
  };

  $scope.showInfoDialog = function(ev){
    myDialog.setScopeTemp($scope);
    myDialog.showLocationInfo(ev);
  };

  $scope.showAdressDialog = function(ev){
     myDialog.setScopeTemp($scope);
     myDialog.showAddressLocation(ev);
  }
}]);