(function () {
    var app = angular.module('githubViewer', []);
    var MainController = function ($scope, $http) {
        var url = "https://api.github.com/users/";
        var username = "angular"; // default username
        
        var onRepos = function (response) {
            $scope.repos = response.data;
        }
        var onError = function (reason) {
            $scope.error = "Could not fetch user.";
        };
        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };
        var getGithubUser = function (user) {
            $http.get(url + user)
            .then(onUserComplete, onError);
        };
        $scope.search = function (username) {
            getGithubUser(username);
        };
        $scope.repoSortOrder = "-stargazers_count"; // default order
        var defaultUser = function () {
            getGithubUser(username)
        }
        defaultUser();
    };
    app.controller("MainController", ["$scope", "$http", MainController]);
}());