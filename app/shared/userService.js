/**
 * Created by Des63rus on 25.02.2015.
 */
angular.module('evacuatorby.userService', [])
    .service('userService', function parseService(parseService) {
        var userService = this;
        userService.userParseList='';
        userService.updateUserList = function(){
           userParseList = parseService.getUserListFromParse();

        };
    });