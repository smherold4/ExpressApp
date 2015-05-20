mongo_app.factory('dynamicDataFactory', ['$http', function($http) {
	var exports = {};
	exports.user_update = function(data) {
		return $http({
			url: '/api/users',
			method: 'PUT',
			data: data,
			dataType: 'json'
		});
	};
	return exports;
}]);