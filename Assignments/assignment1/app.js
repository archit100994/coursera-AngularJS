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
                $('#message-type').removeClass('message-failed');
                $('#message-type').addClass('message-success');
                $('#lunch-menu').removeClass('lunch-failed');
                $('#lunch-menu').addClass('lunch-success');
            }
            else if (count>3) {
                $scope.output="Too much!";
                $('#message-type').removeClass('message-success');
                $('#message-type').addClass('message-failed');
                $('#lunch-menu').removeClass('lunch-success');
                $('#lunch-menu').addClass('lunch-failed');
            }
            else if (count<=0) {
                $scope.output="Please enter data first";
                $('#message-type').removeClass('message-success');
                $('#message-type').addClass('message-failed');
                $('#lunch-menu').removeClass('lunch-success');
                $('#lunch-menu').addClass('lunch-failed');
            }
        }
        else {
            $scope.output="Please enter data first";
            $('#message-type').removeClass('message-success');
            $('#message-type').addClass('message-failed');
            $('#lunch-menu').removeClass('lunch-success');
            $('#lunch-menu').addClass('lunch-failed');
        }
    };
}

})();
