var app = angular.module('NearMeApp', ['leaflet-directive','ngRoute','ngAnimate','ngMaterial' ]);
app.config(function($routeProvider){
	$routeProvider
  	.when('/map',{
  		controller:'MainController',
    	templateUrl:'views/main.html'  
  })
    .when('/about',{
  	controller:'AboutController',
    templateUrl:'views/about.html'
  })
  .otherwise({
  	redirectTo:'/map'
  });
});