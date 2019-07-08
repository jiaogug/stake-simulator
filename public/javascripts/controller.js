angular.module('app', [])
    .controller('Controller', ['$http', function ($http) {
        let controller = this;

        const COUNTRY = 'es-CO';
        controller.time = new Date(Date.now()).toLocaleTimeString(COUNTRY);
        controller.localtime;

        controller.getLocalTime = function () {
            $http({
                method: 'GET',
                url: myservers[0] + '/localtime'
            }).then(function successCallback(req) {
                controller.localtime = req.data.time;
            }, function errorCallback(Error) {
                console.log(Error);
            });
        }

        controller.clocks = [];
        const myservers = ['http://192.168.137.52:3000', 'http://192.168.137.238:3000'];

        controller.getClocks = function () {
            controller.clocks = [];
            controller.localClock = Date.now();
            let count = 0;
            myservers.forEach(function (element) {
                $http.get(element + '/time', function (res) {
                }).then(function (req) {
                    count++;
                    controller.clocks.push({
                        'ip': req.data.ip,
                        'time': req.data.time,
                        'servertime': new Date(req.data.time).toLocaleTimeString(COUNTRY),
                        'difference': (controller.localClock - req.data.time) / 60000
                    });
                }, function (Error) {
                    console.log(Error);
                });
            });
        };

        controller.average = 0;

        controller.getAverage = function () {
            let sum = 0;
            let count = 0;
            controller.clocks.forEach(function (element) {
                count++;
                console.log(element.difference * 60000);
                sum += element.difference * 60000;
                if (count === controller.clocks.length) {
                    controller.average = (sum / (controller.clocks.length + 1));
                }
            });
        }

        controller.syncClocks = function () {
            myservers.forEach(function (element) {
                $http.post(element + '/synctime',{'desfase': controller.average})
                    .then(function (res) {
                        console.log('success');
                    }, function (error) {
                        console.log(error);
                    });
            })
        }
    }]);

