/**
 * Created by Des63rus on 25.02.2015.
 */
angular.module('evacuatorby.chatService', [])
    .service('chatService', function chatService() {

        var chatService = this;
        chatService.UserTab = Parse.Object.extend("User");
        chatService.chatTo = "";
        chatService.toAllUser = "";

    });
