/**
 * Created by lala on 27.07.2015.
 */
app.factory('jobs', ['$resource', function($resource) {
    return $resource('/api/jobs/');
}]);
