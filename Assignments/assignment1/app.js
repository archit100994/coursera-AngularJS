(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.items="";
    $scope.output="";
    $scope.messageType="";
    $scope.bordCol="";
    $scope.check = function () {
        if($scope.items)
        {
            var re=/\s*,\s*/;
            var num= $scope.items.split(re);
            var count=0;

            for (var i = 0; i < num.length; i++) {
                if (num[i]!="") {
                    count=count+1;
                }
            }

            if (count <=3 && count>=1) {
                $scope.output="Enjoy!";
                $scope.messageType="success";
                $scope.bordCol="green";
            }
            else if (count>3) {
                $scope.output="Too much!";
                $scope.messageType="danger";
                $scope.bordCol="red";
            }
            else if (count<=0) {
                $scope.output="Please enter data first";
                $scope.messageType="danger";
                $scope.bordCol="red";
            }
        }
        else {
            $scope.output="Please enter data first";
            $scope.messageType="danger";
            $scope.bordCol="red";
        }
    };
}

})();
