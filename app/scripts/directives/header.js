"use strict";

app.directive('headerNav', function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'views/header.html'
		}
	});
