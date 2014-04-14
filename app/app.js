/**
 * @module application
 */
angular.module('application', [])
    .controller('MainCtrl', function ($scope) {
        'use strict';

        $scope.heading = 'ng-quick';
        $scope.subheading = 'Playing around with AngularJS';
    });
