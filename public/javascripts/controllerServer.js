angular.module('app', [])
    .controller('Controller', ['$http', function ($http) {

        let controller = this;

        const IP = 'http://192.168.137.1:3000/server';
        const COUNTRY = 'es-CO';
        controller.time = new Date(Date.now()).toLocaleTimeString(COUNTRY);
        controller.clients = [];

        controller.updateClients = function () {
            console.log('asd');
            /*setInterval(function () {
                $http.get(IP+'/update', function () {}).then(function (req) {
                   controller.clients = req.body;
                      console.log(req.body);
                }, function () {
                    console.log('Error');
                });
            },2000);*/
        };
    }]);
