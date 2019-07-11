angular.module('app', [])
    .controller('Controller', ['$http', function ($http) {

        let controller = this;
        const COUNTRY = 'es-CO';
        const IP = 'http://192.168.137.1:3000/server';
        const CLIENTS = [];

        controller.coins = Math.floor(Math.random() * (1000 - 100)) + 100;
        controller.startTime = Date.now();
        controller.time = new Date(Date.now()).toLocaleTimeString(COUNTRY);

        controller.bet = function() {
            $http.post(IP+'/bet', {'time': controller.startTime, 'coins': controller.coins}).then(function (res) {
               alert('Bet made correctly!');
            }, function () {
                console.log('Error');
            });
        };

        controller.addClient = function () {
            //$http.post(IP+'/addClient', );
        }
    }]);
