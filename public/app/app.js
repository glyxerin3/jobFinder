/**
 * Created by lala on 17.07.2015.
 */
app = angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource, jobs){

    $scope.jobs = $resource('/api/jobs').query();
    //jobs.save({title: 'test title', description: 'test description'});

    $scope.submit = function() {
        var job = {title: $scope.title, description: $scope.description};
        jobs.save(job);
        $scope.jobs.push(job);
    };

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
