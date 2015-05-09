mongo_app.controller('UsersCtrl', ['$scope', 
	function($scope) {
		$scope.init = function (user_list) {
			$scope.users = user_list;
			$scope.standardKeys = ["_id","uid","username","email"];
			$scope.tagMiscellaneousKeyValues();
		};
		
		$scope.tagMiscellaneousKeyValues = function() {
			$scope.users.forEach(function(user) {
				var keys = Object.keys(user);
				var miscKeysArr = keys.filter(function(k) {
					return $scope.standardKeys.indexOf(k) == -1;
				})
				if (miscKeysArr.length) {
					user['miscKey'] = miscKeysArr[0];
					user['miscVal'] = user[miscKeysArr[0]];
				}
			})
		}
	
	}
])