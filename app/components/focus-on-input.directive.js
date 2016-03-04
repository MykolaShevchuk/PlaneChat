(function () {
    'use strict';

    angular
        .module('plane-chat')
        .directive('focusOnInput', focusOnInput);

    focusOnInput.$inject = [];

    /* @ngInject */
    function focusOnInput() {
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            _focusOnEl(element);

            angular.element(element[0].querySelector('.add-msg')).on('click', function(){
                _focusOnEl(element);
            })
        }

        function _focusOnEl(element) {
            element[0].querySelector('.msg-text').focus();
        }
    }

})();


