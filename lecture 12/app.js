(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter){
    $scope.name = "Archit Jain";
    $scope.stateOfBeing = "nopipe";
    $scope.package= 6.5;

    $scope.sayMessage = function(){
        var msg= "Archit don't want to go to Mumbai :p";
        var output = $filter('uppercase')(msg);
        return output;
    };

    $scope.showPipes = function () {
        $scope.stateOfBeing = "pipe";
    };
}
})();
