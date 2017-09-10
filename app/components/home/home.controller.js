(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Home'];

    function HomeController(Home) {
        var vm = this;
        vm.users = [];
        vm.user = {};
        vm.loadAll = loadAll;
        vm.submit = submit;
        vm.edit = edit;
        vm.update = update;
        vm.remove = remove;
        vm.flag = false;

        function submit() {
            Home.save(vm.user,onSuccess,onError);

            function onSuccess() {
                console.log("success");
                loadAll();
                //clear
                vm.user = {};
            }

            function onError(){
                console.log("error");
            }
        }

        function loadAll()
        {
            Home.query({},onSuccess, onError);

            function onSuccess(data) {
                console.log(JSON.parse(angular.toJson(data)));
                vm.users=JSON.parse(angular.toJson(data));
                console.log("this is vm.users",vm.users);
            }

            function onError(){
                console.log("error");
            }
        }

        function edit(id){
            console.log("edit",id);
            vm.flag=true;
            Home.get({id:id},onSuccess,onError);

            function onSuccess(data){
                vm.user = JSON.parse(angular.toJson(data));
            }

            function onError(){
                console.log("Error");
            }
        }

        function update(){
            console.log("update",vm.user.id);

            Home.update({id:vm.user.id},vm.user,onSuccess,onError);

            function onSuccess(){
                console.log("success");
                loadAll();
                vm.user = {};
                vm.flag = false;
            }

            function onError(){
                console.log("Error");
                loadAll();

            }

        }

        function remove(id){

            Home.delete({id:id},onSuccess,onError);

            function onSuccess(){
                console.log("success");
                loadAll();
            }

            function onError(){
                console.log("Error");
                loadAll();
            }

        }
    }
})();