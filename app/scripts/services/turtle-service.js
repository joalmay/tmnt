'use strict';

angular.module('tmntApp')
  .service('TurtleService', function TurtleService($q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return {
    	getTeam: function(teamId) {
	  		var deferred = $q.defer();

	  		$http.get("http://pure-ocean-3603.herokuapp.com/team/"+teamId).success(function(data) {
	  			
	  			console.log("data team", data);
	      	//	console.log("defTeam", deferred.resolve(data[0]));

	  			if (Array.isArray(data)){
	  				deferred.resolve(data[0]);
	  			} else {
	  				deferred.resolve(data);
	  			}
	      		//deferred.resolve(data);
	    		});

	  		/*
	  		error(function(data) {
			deferred.reject(data);
	  		})

	  		*/
	    	return deferred.promise;
    	},

    	getTeams: function() {
	  		var deferred = $q.defer();

	  		$http.get("http://pure-ocean-3603.herokuapp.com/team").success(function(data) {
	      		debugger;
	      		console.log("data teams", data);
	     // 		console.log("defTeams", deferred.resolve(data[0]));
	  				deferred.resolve(data);
	    	});

	    	console.log("deferred", deferred.promise);

	    	return deferred.promise;
		}
	};
  
});
