/**
 * Created by lala on 17.07.2015.
 */
angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource){

    $scope.jobs = $resource('/api/jobs').query();

    //$scope.test = "working!";
    //
    //$scope.jobs = [
    //    {   title: "blah1",
    //        description: "blah blah"
    //    },
    //    {   title: "blah2",
    //        description: "blah2 blah2"
    //    }
    //];
});
