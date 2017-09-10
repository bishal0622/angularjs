(function(){
    'use strict';

    angular
        .module('myApp')
        .config(stateConfig);

    stateConfig.$inject=['$stateProvider'];

    function stateConfig($stateProvider){
        $stateProvider
            .state('story',{
                url:'/story',
                templateUrl:'components/story/story.html',
                controller: 'StoryController',
                controllerAs: 'vm'
            })
    }
})()