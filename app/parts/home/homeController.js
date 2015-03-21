/**
 * Created by Des63rus on 23.02.2015.
 */
angular.module('evacuatorby.homeController', [])
.controller('HomeController', function ($scope, $state, $rootScope, geoPoints, chatService, parseService) {

    if (!$rootScope.isLoggedIn) {
        $state.go('welcome');
    }

    $scope.getArrMess = parseService.getMessFromParse;

    $scope.query = function () {
        var query = new Parse.Query(chatService.UserTab);
        //query.equalTo("name", "Hello");
        /*  query.notEqualTo("username", "all@admin.com");
         query.notEqualTo("username", $rootScope.user.getUsername());*/
        query.notContainedIn("username", ["all@admin.com", $rootScope.user.getUsername()]);
        query.find({
            success: function (results) {
                console.log("RECEIVED " + results.length + " results");
                $scope.results = results;
                /*  $scope.$digest();
                 // Do something with the returned Parse.Object values
                 for (var i = 0; i < results.length; i++) {
                 var object = results[i];
                 }*/
            },
            error: function (error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }
    $scope.findOnMap = function (fUser) {
        geoPoints.arrUsers.push(fUser);
        $state.go('app.map');

    };
    $scope.openChat = function (chatTo) {
        chatService.chatTo = chatTo;
        $state.go('app.prchat');

    }
});
