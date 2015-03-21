// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in appController.js
angular.module('starter', ['ionic','evakuatorby.appController','evakuatorby.welcome', 'evacuatorby.loginController',
    'evacuatorby.parseService', 'evacuatorby.chatModule', 'evacuatorby.homeModule',  'evacuatorby.mapModule',  'evacuatorby.chatModule'])
    .run(function ($state, $rootScope, $ionicPlatform) {
        Parse.initialize('Bfj14OIaEOk24wtKloARGLo7qJ1OXCDQgWsrkTua', 'jECcTVwgitUjji6rFEnhwBYTDdhNn5rNPfOXbNOw');

        var query = new Parse.Query(Parse.Object.extend("User"));

        query.equalTo("username", "all@admin.com");

        query.find({
            success: function (results) {

                $rootScope.toAllUser = results[0];

            },
            error: function (error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });



        var currentUser = Parse.User.current();
        $rootScope.user = null;
        $rootScope.isLoggedIn = false;

        if (currentUser) {
            $rootScope.user = currentUser;
            $rootScope.isLoggedIn = true;
            $state.go('app.home');
        }
        $ionicPlatform.ready(function() {


            parsePlugin.initialize('Bfj14OIaEOk24wtKloARGLo7qJ1OXCDQgWsrkTua', 'TEpPTwzGz8V6kIBLxNhlRnWOgONobzdn1KPnb6NG', function () {

                parsePlugin.subscribe('TestC1', function () {

                    parsePlugin.getInstallationId(function (id) {


                        /* var install_data = {
                         installation_id: id,
                         channels: ['TestC1']
                         }*/


                    }, function (e) {
                        alert('error');
                    });

                }, function (e) {
                    alert('error');
                });

            }, function (e) {
                alert('error');
            });



        });
    })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('app', {
          url: '/app?clear',
          abstract: true,
          templateUrl: 'shared/menu.html',
          controller: 'AppController'
      })

      .state('welcome', {
          url: '/welcome?clear',
          templateUrl: 'parts/welcome/welcome.html',
          controller: 'WelcomeController'
      })


      .state('app.home', {
          url: '/home',
          views: {
              'menuContent': {
                  templateUrl: 'parts/home/home.html',
                  controller: 'HomeController'
              }
          }
      })

      .state('app.map', {
          url: '/map',
          views: {
              'menuContent': {
                  templateUrl: 'parts/map/map.html',
                  controller: 'MapController'
              }
          }
      })
/*
      .state('app.prchat', {
          url: '/prchat',
          views: {
              'menuContent': {
                  templateUrl: 'parts/prchat/prchat.html',
                  controller: 'PrchatController'
              }
          }
      })
*/

      .state('app.chat', {
          url: '/chat',
          views: {
              'menuContent': {
                  templateUrl: 'parts/chat/chat.html',
                  controller: 'chatController'
              }
          }
      })
      .state('app.login', {
          url: '/login',
          views: {
              'menuContent': {
                  templateUrl: 'parts/login/login.html',
                  controller: 'LoginController'
              }
          }
      })

      .state('app.forgot', {
          url: '/forgot',
          views: {
              'menuContent': {
                  templateUrl: 'parts/forgotPassword/forgotPassword.html',
                  controller: 'ForgotPasswordController'
              }
          }
      })

      .state('app.register', {
          url: '/register',
          views: {
              'menuContent': {
                  templateUrl: 'parts/register/register.html',
                  controller: 'RegisterController'
              }
          }
      });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');
});
