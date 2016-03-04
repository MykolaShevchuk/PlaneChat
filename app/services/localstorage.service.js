(function () {
    'use strict';

    angular
        .module('plane-chat')
        .factory('localstorageService', localstorageService);

    localstorageService.$inject = [];

    /* @ngInject */
    function localstorageService() {
        var service = {
            set: set,
            get: get,
            removeItem: removeItem
        };
        return service;

        ////////////////

        function set(messages) {
            localStorage.messages = JSON.stringify(messages);
        }

        function get(key) {
            return localStorage[key] ? JSON.parse(localStorage[key]) : [];
        }

        function removeItem(key) {
            localStorage.removeItem(key);
        }
    }

})();

