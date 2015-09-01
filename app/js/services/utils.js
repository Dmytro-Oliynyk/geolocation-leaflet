app.factory('utils',[function(){
	var scopeTemp;

	return {
	  	initData: function(rootScope, scope){
			scope.status='TEST';
			scope.layers ={
			            baselayers: {
			                googleTerrain: {
			                    name: 'Google Terrain',
			                    layerType: 'TERRAIN',
			                    type: 'google'
			                },
			                googleHybrid: {
			                    name: 'Google Hybrid',
			                    layerType: 'HYBRID',
			                    type: 'google'
			                },
			                googleRoadmap: {
			                    name: 'Google Streets',
			                    layerType: 'ROADMAP',
			                    type: 'google'
			                }
			            }
			        };

			rootScope.local_icons = {
			        leaf_icon: {
			            iconUrl: 'img/leaf-green.png',
			            shadowUrl: 'img/leaf-shadow.png',
			            iconSize:     [38, 95], // size of the icon
			            shadowSize:   [50, 64], // size of the shadow
			            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			            shadowAnchor: [4, 62],  // the same for the shadow
			            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			        },
			        div_icon: {
			            type: 'div',
			            iconSize: [230, 0],
			            html: 'Using <strong>Bold text as an icon</strong>: Lisbon',
			            popupAnchor:  [0, 0]
			        }
			 };

			rootScope.center={
			          lat:49.83953241,
			          lng:24.02684212,
			          zoom:15
			}; 

			scope.myPosition={
			          lat: 0,
			          lng: 0,
			          message: "",
			          focus: true,
			          draggable: true,
			          icon:rootScope.local_icons.leaf_icon,
			};

			scope.legend = {
	            position: 'bottomleft',
	            colors: [ '#ff0000', '#28c9ff', '#0000ff', '#ecf386' ],
	            labels: [ 'National Cycle Route', 'Regional Cycle Route', 'Local Cycle Network', 'Cycleway' ]
	        };
	        scope.defaults = {
	            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png"
	            
	        };

		},

		dataIsOk: function(data){
    		return data.status=='OK';
  		},	
	}
}]);