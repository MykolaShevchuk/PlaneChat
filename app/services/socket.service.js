(function () {
    'use strict';

    angular
        .module('plane-chat')
        .factory('socketService', socketService);

    socketService.$inject = ['$rootScope'];

    /* @ngInject */
    function socketService($rootScope) {
        var socket = io.connect();
        var service = {
            on: on,
            emit: emit
        };
        return service;

        ////////////////

        function on(eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        }

        function emit(eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    }

})();