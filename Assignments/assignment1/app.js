(function () {
'use strict';

angular.module('LaunchCheck', [])

.controller('LaunchCheckController', LaunchCheckController);

LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope) {
    $scope.items="";
    $scope.output="";
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
            }
            else {
                $scope.output="Too much!";
            }
        }
        else {
            $scope.output="Please enter data first";
        }
    };
}

})();
