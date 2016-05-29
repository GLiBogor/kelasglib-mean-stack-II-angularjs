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
  // $scope.list = ['ary', 'dendy']
  $scope.listObj = [
    {
      nama : 'Ary',
      usia : 20
    },
    {
      nama : 'Irwan',
      usia : 21
    },
  ]
  $scope.title = 'Todo List';
  $scope.add = function(data) {
    if (!data) {
      return alert('Mana sih datanya');
    }
    $scope.list.push(data);
    $scope.new = '';
  }
  $scope.delete = function(index) {
    $scope.list.splice(index, 1);
  }
})
.run(['$state', function($state){
  $state.go('Todo');
}])
