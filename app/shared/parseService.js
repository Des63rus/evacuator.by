/**
 * Created by Des63rus on 25.02.2015.
 */
angular.module('evacuatorby.parseService', [])
    .service('parseService', function parseService(chatService, $rootScope, $q) {
        var parseService = this;
        parseService.loginUser = "";
        parseService.ChatMessages = Parse.Object.extend("ChatMessages");
        parseService.ChatTab = Parse.Object.extend("chat");
        parseService.sendToParse = function (messageChatParse) {

            messageChatParse.save(null, {
                success: function (messageChatParse) {
                    // Execute any logic that should take place after the object is saved.
                    console.log('New object created with objectId: ' + messageChatParse.id);
                    //$scope.id =  messageChatParse.id;

                },
                error: function (messageChatParse, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });

        };
    });
