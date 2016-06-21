angular.module('mooc.services', [])

.factory('Courses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  $scope.courses = [];
    $http.get('http://informaticaeducativaucc.com/api/cursos')
      .then(function(successResponse){
        $scope.courses = successResponse.data;
        console.log(successResponse.data);
      }, function(errorResponse){
        $scope.error = errorResponse;
    });

  return {
    all: function() {
      return courses;
    },
    remove: function(course) {
      courses.splice(courses.indexOf(course), 1);
    },
    get: function(courseId) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id === parseInt(courseId)) {
          return courses[i];
        }
      }
      return null;
    }
  };
});