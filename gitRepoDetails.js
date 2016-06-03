angular.module("gitRepo",[]).
 controller ("gitRepoController", function($scope,$http){
  $scope.title = "My Git Repo App";

  $scope.$watch("username",function(){
    $http({
      method: 'GET',
      url:"https://api.github.com/users/"+$scope.username+"/repos"
    }).then (function successCallback(response){
      $scope.repos = response.data;
    }, function errorCallback(response){
      console.log("HTTP Error");
    });

  });

  $scope.getCommits = function (){
    console.log("test");
  }

 });
