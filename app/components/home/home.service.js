(function(){
    'use strict';

    angular
        .module('myApp')
        .factory('Home',Home);
    Home.$inject=['$resource'];

    function Home($resource){

        var service=$resource('http://localhost:9000/user/:id',{},{
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

