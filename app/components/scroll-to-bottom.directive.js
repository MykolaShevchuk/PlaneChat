(function () {
    'use strict';

    angular
        .module('plane-chat')
        .directive('scrollToBottom', scrollToBottom);

    scrollToBottom.$inject = [];

    /* @ngInject */
    function scrollToBottom() {
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            if (scope.$last){
                scrollTo(0, document.body.offsetHeight)
            }
        }
    }

})();



