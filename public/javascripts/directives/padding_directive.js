mongo_app.directive('pad', ['$timeout','dynamicDataFactory', function ($timeout, dynamicDataFactory) {
	return {
		scope: {
			key: '@',
			stats: '=',
			content: '@',
			dynamicContent: '='
		},
		restrict: 'AE',
		template: '<div class="padded-content" ng-click="injectInput();">'
		+ '<span ng-show="staticMode">{{content || dynamicContent}}</span>'
		+ '<input ng-hide="staticMode" type="text" ng-model="dynamicContent"></input>'
		+ '</div>',
		controller: ['$scope', '$element', function ($scope, $element) {
			$scope.dataFactory = dynamicDataFactory;
			$scope.staticMode = true;
			
			$scope.update = function() {
				var data = {query: {}, update: {}};
				data.query["_id"] = $scope.stats._id;
				data.update[$scope.key] = $scope.dynamicContent;
				$scope.dataFactory.user_update(data)
				.success(function (res) {
					console.log(res);
				});
			}
			
			$scope.injectInput = function () {
				if (this.stats && this.staticMode) {
					this.staticMode = false;
				    var $input = $(event.target).parent().find('input');
					$timeout(function () {
						$input.focus();
					}, 1);
		      $input.blur(function(){
						$scope.staticMode = true;
						$scope.update();
					});
				}
			}
		}]
	}
}]);