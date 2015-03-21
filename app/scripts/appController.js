angular.module('evakuatorby.appController', [])
    .controller('AppController', function ($scope, $state, $rootScope, $ionicHistory, $stateParams) {
        if ($stateParams.clear) {
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
        }

        $scope.logout = function () {
            Parse.User.logOut();
            $rootScope.user = null;
            $rootScope.isLoggedIn = false;
            $state.go('welcome', {
                clear: true
            });
        };
    });

