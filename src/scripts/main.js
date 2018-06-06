var app = angular.module('githubViewer', []);
var MainController = function ($scope, $http) {
    var url = "https://api.github.com/";
    var item = "users/";
    var username = "DrGregoryHouse";

    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch user.";
    };

    $http.get(url+item+username).then(onUserComplete, onError);
    
};
app.controller("MainController", ["$scope", "$http", MainController]);