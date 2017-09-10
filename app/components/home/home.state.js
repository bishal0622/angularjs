(function(){
    'use strict';

    angular
        .module('myApp')
        .config(stateConfig);

    stateConfig.$inject=['$stateProvider'];

    function stateConfig($stateProvider){
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
    }
})()