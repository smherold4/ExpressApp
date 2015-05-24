mongo_app.controller('ItemsCtrl', ['$scope', 
	function($scope) {
		$scope.init = function (item_list) {
			$scope.items = item_list;
			$scope.standardKeys = ["_id","uid","name","cost","keywords"];
		};
	
	}
])