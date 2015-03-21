/**
 * Created by Des63rus on 25.02.2015.
 */
angular.module('evacuatorby.loginController', [])
    .controller('LoginController', function ($scope, $state, $rootScope, $ionicLoading, $ionicViewService, parseService, chatService) {
    $scope.user = {
        username: null,
        password: null
    };

    $scope.error = {};

    $scope.login = function () {
        $scope.loading = $ionicLoading.show({
            content: 'Logging in',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        var user = $scope.user;
        Parse.User.logIn(('' + user.username).toLowerCase(), user.password, {
            success: function (user) {
                parseService.loginUser = user;
                $ionicLoading.hide();
                $rootScope.user = user;
                $rootScope.isLoggedIn = true;
                $ionicViewService.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });


                var query = new Parse.Query(chatService.UserTab);

                query.equalTo("username", "all@admin.com");

                query.find({
                    success: function (results) {

                        $rootScope.toAllUser = results[0];

                    },
                    error: function (error) {
                        alert("Error: " + error.code + " " + error.message);
                    }
                });


                $state.go('app.home', {
                    clear: true
                });
            },
            error: function (user, err) {
                $ionicLoading.hide();
                // The login failed. Check error to see why.
                if (err.code === 101) {
                    $scope.error.message = 'Invalid login credentials';
                } else {
                    $scope.error.message = 'An unexpected error has ' +
                    'occurred, please try again.';
                }
                $scope.$apply();
            }
        });
    };

    $scope.forgot = function () {
        $state.go('app.forgot');
    };
});