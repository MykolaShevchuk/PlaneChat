(function () {
    'use strict';

    angular
        .module('plane-chat')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['localstorageService', 'socketService'];

    /* @ngInject */
    function ChatController(localstorageService, socketService) {
        var vm = this;
        vm.newMessage = '';
        vm.messages = localstorageService.get('messages');

        vm.addMsg = addMsg;
        vm.clearChat = clearChat;
        vm.textareaOnKeypress = textareaOnKeypress;

        activate();

        ////////////////

        function activate() {
            socketService.on('messages', function (message) {
                addMsg(message);
            });
        }

        function addMsg(message) {
            var isFromSocket = angular.isDefined(message);

            if (isFromSocket) {
                vm.messages.push(message);
            } else if (vm.newMessage.trim()) {
                vm.messages.push(vm.newMessage.trim());
                socketService.emit('messages', vm.newMessage.trim());
                vm.newMessage = '';
            }

            localstorageService.set(vm.messages);
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


