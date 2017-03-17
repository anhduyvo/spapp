﻿(function () {
    'use strict';	
    angular.module('aisha.common', [])
    .factory('appCommon', ['$q', function ($q) {
        var appCommon = function () {            
        };
        
        appCommon.prototype.baseUrl = function(){
            // sharepoint mode
            return '/Style%20Library/apps/aisha/';
            // dev local mode
            //return '';
        };

        appCommon.prototype.listInstance = {
            Feedback: 'Feedback',
            FeedbackTemplate: 'Feedback Templates',
            FeedbackOption: 'Feedback Options',
            FeedbackQuestion: 'Feedback Questions',
        };

        appCommon.prototype.getListIdByTitle = function (listTitle) {
            var guidId = '';
            return guidId;
        };

        appCommon.prototype.getListIdById = function (listId) {
            var guidId = '';
            return guidId;
        };

        return new appCommon();
    }]);
})();

