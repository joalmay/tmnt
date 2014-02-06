'use strict';

angular.module('tmntApp')
  .service('TeamService', function TeamService($q, $http) {
  	return {
    	getTeams: function() {
	  		var deferred = $q.defer();

	  		$http.get("http://pure-ocean-3603.herokuapp.com/team").success(function(data) {
	      		deferred.resolve(data);
	    	});

	    	return deferred.promise;
		}
	}
  });
