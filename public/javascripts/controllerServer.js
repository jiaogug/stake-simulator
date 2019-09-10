angular.module('app', [])
    .controller('Controller', ['$http', function ($http) {

        let controller = this;
        
        const IP = 'https://hidden-island-40074.herokuapp.com/server';
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
        
        controller.closeClients = function () {
            $http.get(IP+'/close').then(function (res) {
                alert('apuestas cerradas');
            }, function () {
                console.log('Error');
            });
        }
    }]);
