angular.module("todoApp",[]).
  controller ("todoListController", function($scope){
    $scope.todoItems = [
      {taskName:"My laundry", status:false},
      {taskName:"My account opening", status:false},
      {taskName:"Finish reading a book", status:false}
    ];

    $scope.addTodo = function(){
      $scope.todoItems.push({taskName:$scope.todoItem,status:false});
    }

    $scope.remaining = function() {
      var count = 0;

      angular.forEach($scope.todoItems, function(todo){
        count += todo.status ? 0:1;
      })
      return count;
    }

    $scope.archive = function () {
      var oldTodos = $scope.todoItems;
      $scope.todoItems = [];
      angular.forEach(oldTodos, function(todo){
        if(!todo.status)$scope.todoItems.push(todo);
      });
    }

  });
