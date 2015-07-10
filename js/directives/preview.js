(function() {
	'use strict';
	angular
		.module('app')
		.directive('preview', preview);

	/* @ngInject */
	function preview () {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			controller: PreviewCTRL,
			controllerAs: 'preview',
			link: link,
			restrict: 'E',
			scope: {
			},
			templateUrl: 'templates/preview.html'
		};
		return directive;
		function link(scope, element, attrs) {
		}
	}
	/* @ngInject */
	function PreviewCTRL ($scope) {
		var preview = this;
		preview.value = "hello world preview";
	}
})();