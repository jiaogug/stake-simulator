angular.module('app', [])
    .controller('Controller', ['$http', function ($http) {

        let controller = this;

        const IP = 'http://localhost:3000/server';
        const COUNTRY = 'es-CO';
        controller.time = new Date(Date.now()).toLocaleTimeString(COUNTRY);
        controller.clients = [];

        controller.updateClients = function () {
            setInterval(function () {
                $http.get(IP+'/update').then(function (res) {
                    controller.clients = res.data.clients;
                    console.log('Clientes: ' + controller.clients);
                }, function () {
                    console.log('Error');
                });
            },5000);
        };
    }]);
