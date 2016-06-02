angular.module("swole",[]).
  controller ("swoleController", function($scope){
    $scope.details = [];
    $scope.add = function () {
      console.log("Add hit");
      $scope.details.push ({
        date : $scope.date,
        muscleGroup : "Test",
        exerciseName : $scope.exerciseName,
        weight : $scope.weight,
        reps : $scope.reps
      })
      console.log($scope.details);
    }
  });
