mongo_app.factory('dynamicDataFactory', ['$http', function($http) {
	var exports = {};
	exports.update = function(data) {
		return $http({
			url: '/api',
			method: 'PUT',
			data: data,
			dataType: 'json'
		});
	};
	return exports;
}]);