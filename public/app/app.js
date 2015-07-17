/**
 * Created by lala on 17.07.2015.
 */
angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope){
   $scope.test = "working!";

    $scope.jobs = [
        {   title: "blah1",
            description: "blah blah"
        },
        {   title: "blah2",
            description: "blah2 blah2"
        }
    ];
});
