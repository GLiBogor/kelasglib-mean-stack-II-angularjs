var app = angular.module('App', ['ui.router'])
.config(function($stateProvider){
  $stateProvider
  .state('Main', {
    url : '/main',
    templateProvider : function($templateCache) {
      return $templateCache.get('main.html');
    }
  })
  .state('New', {
    url : '/new',
    templateProvider : function($templateCache) {
      return $templateCache.get('new.html');
    }
  })
  .state('Detail', {
    url : '/detail',
    templateProvider : function($templateCache) {
      return $templateCache.get('detail.html');
    }
  })
})
.directive('item', function(){
  return function(sco
})
.service('CrudService', function($http){
  this.list = function() {
    return $http.get('http://localhost:3000/folks');
  }
  this.get = function(id) {
    return $http.get('http://localhost:3000/folks/' + id);
  }
  this.create = function(data) {
    return $http.post('http://localhost:3000/folks', data);
  }
  this.delete = function(id) {
    return $http.delete('http://localhost:3000/folks/' + id '/edit');
  }
})
.controller('MainController', function($rootScope, $scope, CrudService){
  $scope.title = 'Main Page';
  CrudService.list()
  .then(function(result){
    $scope.list = result.data;
  })
})
.controller('NewController', function($rootScope, $scope){
  $scope.title = 'New item';
})
.controller('DetailController', function($rootScope, $scope){
  $scope.title = 'Detail';
})
.run(['$state', function($state){
  $state.go('Main');
}])
