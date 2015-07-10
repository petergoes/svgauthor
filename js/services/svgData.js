(function() {
	'use strict';
	angular
		.module('app')
		.factory('SVGData', SVGData);
	/* @ngInject */
	function SVGData() {
		return {
			xml: ''
		};
	}
})();