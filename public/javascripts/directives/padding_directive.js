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
			$scope.injectInput = function () {
				if (this.stats && this.staticMode) {
					this.staticMode = false;
				    var $input = $(event.target).parent().find('input');
					$timeout(function () {
						$input.focus();
					}, 1);
					var that = this;
		      $input.blur(function(){
						that.$apply(function () {
							that.staticMode = true;
						})
						$scope.dataFactory.update({item: 77});
					});
				}
			}
		}]
	}
}]);