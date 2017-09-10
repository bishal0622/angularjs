(function(){
    'use strict';

    angular
        .module('myApp')
        .factory('Story',Story);
    Story.$inject=['$resource'];

    function Story($resource){

        var service=$resource('http://localhost:9000/story/:id',{},{
            'query':{method:'GET', isArray:true},
            'get':{
                method:'GET',
                transformResponse:function(data){
                    data=angular.fromJson(data);
                    return data;
                }
            },
            'save':{method:'POST'},
            'update':{method:'PUT'},
            'delete':{method:'DELETE', isArray: false}
        });
        return service;
    }
})();

