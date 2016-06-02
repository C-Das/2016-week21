angular.module("swole",[]).
  controller ("swoleController", function($scope){
    var details = [];
    $scope.add = function () {
      console.log("Add hit");
      details.push ({
        date : $scope.date,
        muscleGroup : "Test",
        exerciseName : $scope.exerciseName,
        weight : $scope.weight,
        reps : $scope.reps
      })
      console.log(details);
    }
  });
