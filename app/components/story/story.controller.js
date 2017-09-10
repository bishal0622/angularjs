(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$state'];

    function StoryController($state) {
        var vm = this;
        vm.haha = haha;

        function haha(){
        console.log("haha");
            $state.go('home');
        }

    }
})();