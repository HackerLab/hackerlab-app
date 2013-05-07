'use strict';

angular.module('hackerlabAppApp')
  .controller('ServiceRequestController', function ($scope, serviceRequestService) {
        $scope.newRequest = {};

        $scope.submitRequest = function(request) {
            console.log("Request is ", request);
            serviceRequestService.createServiceRequest(request, function() {
                console.log("Request created");
                $scope.newRequest = {};
            });
        }
  });
