mongo_app.factory('dynamicDataFactory', ['$http', function($http) {
	var exports = {};
	exports.update = function(data, route) {
		return $http({
			url: '/api/' + route,
			method: 'PUT',
			data: data,
			dataType: 'json'
		});
	};
	return exports;
}]);