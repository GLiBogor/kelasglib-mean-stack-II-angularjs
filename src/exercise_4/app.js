var app = angular.module('App', ['ui.router'])
.config(function($stateProvider){
  $stateProvider
  .state('Main', {
    url : '/main',
    templateProvider : function($templateCache) {
      return $templateCache.get('main.html');
    }
  })
  .state('Todo', {
    url : '/todo',
    templateProvider : function($templateCache) {
      return $templateCache.get('todo.html');
    }
  })
})
.controller('MainController', function($rootScope, $scope){
  $scope.title = 'Main Page';
})
.controller('TodoController', function($rootScope, $scope){
  $scope.list = [];
  $scope.title = 'Todo List';
  $scope.add = function(data) {
    $scope.list.push(data);
    $scope.new = '';
  }
  $scope.delete = function(index) {
    $scope.list.splice(index, 1);
  }
})
.run(['$state', function($state){
  $state.go('Main');
}])
