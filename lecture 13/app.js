(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];
function MsgController($scope, $filter, lovesFilter){
    $scope.name = "Archit Jain";
    $scope.stateOfBeing = "nopipe";
    $scope.package= 6.5;

    $scope.sayMessage = function() {
        var msg = "Archit don't want to go to Mumbai :p";
        var output = $filter('uppercase')(msg);
        return output;
    }

    $scope.sayLovesMessage = function(){
        var msg = "Archit don't want to go to Mumbai :p";
        msg = lovesFilter(msg);
        return msg;
    }

    $scope.showPipes = function () {
        $scope.stateOfBeing = "pipe";
    };
}

function LovesFilter(){
    return function (input){
            input = input || "";
            input = input.replace("don't want", "will not");
            return input;
    }
}

function TruthFilter() {
    return function (input, target, replace) {
        input = input || "";
        input = input.replace(target, replace);
        return input;
    }
}

})();
