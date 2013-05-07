'use strict';

angular.module('hackerlabAppApp')
  .factory('serviceRequestService', function ($http) {

    // Public API here
    return {
      createServiceRequest: function (serviceRequest, onSuccess) {
        $http.post('/servicerequest', serviceRequest)
            .success(function(data) {
                onSuccess(data);
            });
      }
    };
  });
