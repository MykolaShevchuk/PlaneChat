(function () {
    'use strict';

    angular
        .module('plane-chat')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['$scope', '$log', 'localstorageService'];

    /* @ngInject */
    function ChatController($scope, $log, localstorageService) {
        var vm = this;
        vm.newMessage = '';
        vm.messages = localstorageService.get('messages');

        vm.addMsg = addMsg;
        vm.clearChat = clearChat;
        vm.textareaOnKeypress = textareaOnKeypress;


        activate();

        ////////////////

        function activate() {}

        function addMsg() {
            if (vm.newMessage.trim()) {
                vm.messages.push(vm.newMessage.trim());
                localstorageService.set(vm.messages);
            }
            vm.newMessage = '';
        }

        function textareaOnKeypress(e) {
            if (e.keyCode === 13) {
                vm.addMsg();
            }
        }

        function clearChat() {
            localstorageService.removeItem('messages');
            vm.messages = [];
        }
    }

})();


