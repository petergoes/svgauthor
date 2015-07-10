(function() {
	'use strict';
	angular
		.module('app')
		.directive('editor', editor);

	/* @ngInject */
	function editor () {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			controller: EditorCTRL,
			controllerAs: 'editor',
			link: link,
			restrict: 'E',
			scope: {
			},
			templateUrl: 'templates/editor.html'
		};
		return directive;
		function link(scope, element, attrs) {
		}
	}
	/* @ngInject */
	function EditorCTRL ($scope) {
		var editor = this;
		editor.value = "hello world editor";
	}
})();