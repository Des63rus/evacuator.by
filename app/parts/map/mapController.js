/**
 * Created by Des63rus on 25.02.2015.
 */
angular.module('evacuatorby.mapModule',[])
    .controller('MapController', function ($scope, $ionicLoading, mapService) {

    $scope.mapCreated = function (map) {
        $scope.map = map;
        var arrUsers = geoPoints.arrUsers;
        if (arrUsers.length > 0) {
            var mLocation = new google.maps.LatLng(arrUsers[0].get('location')._latitude, arrUsers[0].get('location')._longitude)
            $scope.map.setCenter(mLocation);
            for (currUser in arrUsers) {
                var mLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(arrUsers[currUser].get('location')._latitude, arrUsers[currUser].get('location')._longitude),
                    map: $scope.map,
                    title: arrUsers[currUser].get('username')
                });
            }

        }
    };

    $scope.centerOnMe = function () {
        console.log("Centering")
        if (!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log('Got pos', pos);
            $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: $scope.map,
                title: "My Location"
            });
            $scope.loading.hide();
        }, function (error) {
            alert('Unable to get location: ' + error.message);
        });
    };


})
