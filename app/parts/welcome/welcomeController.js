angular.module('evakuatorby.welcomeController', [])
    .controller('WelcomeController', function ($scope, $state, $rootScope, $ionicHistory, $stateParams) {
    if ($stateParams.clear) {
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
    }

    $scope.login = function () {
        $state.go('app.login');
    };

    $scope.signUp = function () {
        $state.go('app.register');
    };

    if ($rootScope.isLoggedIn) {
        $state.go('app.home');
    }
})