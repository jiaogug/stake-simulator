angular.module('app', [])
    .controller('Controller', ['$http', function ($http) {

        let controller = this;
        const COUNTRY = 'es-CO';
        const IP = 'https://desolate-retreat-73969.herokuapp.com/server';
        const CLIENTS = [];
        var isOpen = true;
        var isBlacksmith = false;

        controller.coins = Math.floor(Math.random() * (1000 - 100)) + 100;
        controller.startTime = Date.now();
        controller.time = new Date(Date.now()).toLocaleTimeString(COUNTRY);

        controller.bet = function() {
            if (isOpen){
                var coinbet = document.getElementById("coins_bet").value;
                controller.coins = controller.coins- coinbet;
                $http.post(IP+'/bet', {'time': controller.startTime, 'coins': coinbet}).then(function (res) {
                    alert('Bet made correctly!');
                    isOpen = 0;
                }, function () {
                    console.log('Error');
                });
            } else {
                alert('Error, Ya se ha realizado una apuesta, o las pujas ya se han cerrado');
            }
        };

        controller.verifyState = function(){
            var verify = setInterval(function () {
                $http.get(IP+'/state').then(function (res) {
                    isOpen = res.data.isOpen;
                }, function () {
                    console.log('Error');
                });
                if (!isOpen){
                    clearInterval(verify);
                }
            },5000);
        };
    }]);
