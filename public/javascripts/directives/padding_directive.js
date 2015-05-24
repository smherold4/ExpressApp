mongo_app.directive('pad', ['$timeout','dynamicDataFactory', function ($timeout, dynamicDataFactory) {
	return {
		scope: {
			key: '@',
			content: '@',
			model: '=',
			modelType: '@'
		},
		restrict: 'AE',
		template: '<div class="padded-content" ng-click="injectInput();">'
		+ '<span ng-show="staticMode">{{ cellContent }}</span>'
		+ '<input ng-hide="staticMode" type="text" ng-model="cellContent"></input>'
		+ '</div>',
		controller: ['$scope', '$element', function ($scope, $element) {
			$scope.dataFactory = dynamicDataFactory;
			$scope.staticMode = true;
			$scope.cellContent = $scope.content || $scope.model[$scope.key];
			
			$scope.update = function() {
				var data = {query: {}, update: {}};
				data.query["_id"] = $scope.model._id;
				data.update[$scope.key] = $scope.cellContent;
				$scope.dataFactory.update(data, $scope.modelType)
				.success(function (res) { console.log(res); });
			}
			
			$scope.injectInput = function () {
				if (this.key && this.staticMode) {
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