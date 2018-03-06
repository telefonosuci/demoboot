
var helloApp = angular.module("helloApp", []);

helloApp.controller("HelloCtrl", function($scope) {

    $scope.name = "Calvin Hobbes";
    $scope.model = {
        nome:"Pippo"
    }
});