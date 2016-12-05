(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope){
    $scope.name = "Archit Jain";
    $scope.stateOfBeing = "nopipe";
    $scope.sayMessage = function(){
        return "Archit don't want to go to Mumbai :p";
    };

    $scope.showPipes = function () {
        $scope.stateOfBeing = "pipe";
    };
}
})();
