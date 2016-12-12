(function () {
'use strict';

angular.module('counterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
    $scope.counter = 0;

//Method 3
    $scope.upCounter = function() {
        $timeout(function (){
            $scope.counter++;
            console.log("Counter Incremented");
        }, 1000);
    };

//Method 2
    // $scope.upCounter = function() {
    //     setTimeout(function () {
    //         $scope.$apply(function() {
    //             $scope.counter++;
    //             console.log("Counter Incremented");
    //         });
    //     }, 2000);
    // };

//METHOD 1
    // $scope.upCounter = function(){
    //     setTimeout(function () {
    //         $scope.counter++;
    //         console.log("Counter Incremented");
    //         $scope.$digest();
    //     }, 2000);
    // };
}
})();
