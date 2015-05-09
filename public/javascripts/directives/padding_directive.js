mongo_app.directive('pad', [function () {
	return {
		scope: {
			content: '@'
		},
		restrict: 'AEC',
		template: '<div class="padded-content">{{content}}</div>',
		link: function (scope, element, attr) {

		}
	}
}]);