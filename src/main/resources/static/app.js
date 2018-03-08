
var helloApp = angular.module("helloApp", []);

helloApp.controller("HelloCtrl", function($scope) {

    $scope.name = "Calvin Hobbes";

    $scope.model = {
        nome:"Pippo"
    };

    $scope.template="templates/main.html";

    $scope.model.eventForm={
        name:"",
        date:"",
        description:""
    };

});

helloApp.controller("MenuCtrl", function($scope) {

    $scope.pages = [
        {
            id:1,
            name:"Home"
        },
        {
            id:2,
            name:"About"
        },
        {
            id:1,
            name:"Contact"
        }
    ];

    $scope.title = "My Blog";

    $scope.template="templates/main.html";

});