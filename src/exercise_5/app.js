var app = angular.module('App', ['ui.router']);
app.config(function($stateProvider){
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
    url : '/detail/{id}',
    templateProvider : function($templateCache) {
      return $templateCache.get('detail.html');
    }
  })
})
/* .directive('item', function(){ */
/*   return function(sco */
/* }) */
.service('CrudService', function($http){
  this.list = function() {
    return $http.get('http://localhost:3000/folks');
  }
  this.get = function(id) {
    return $http.get('http://localhost:3000/folks/' + id);
  }
  this.create = function(data) {
    return $http.post('http://localhost:3000/folks', JSON.stringify(data));
  }
  this.delete = function(id) {
    return $http.delete('http://localhost:3000/folks/' + id + '/edit');
  }
  this.update = function(data) {
    return $http.put('http://localhost:3000/folks/' + data._id + '/edit', data);
  }
})
.controller('MainController', function($rootScope, $scope, CrudService, $state){
  $scope.title = 'Main Page';
  $scope.list = [];
  $scope.reload = function(){
    CrudService.list()
    .then(function(result){
      $scope.list = result.data;
    })
  }
  $scope.reload();

  $scope.delete = function(id){
    CrudService.delete(id)
    .then(function(result) {
      $scope.reload(); 
    })
  }
  $scope.detail = function(id) {
    $state.go('Detail', { id: id } )
  }
})
.controller('NewController', function($rootScope, $scope, CrudService, $state){
  $scope.title = 'New item';
  $scope.save = function(data) {
    CrudService.create(data)
    .then(function(result){
      $state.go('Main');  
    })
  }
})
.controller('DetailController', function($rootScope, $scope, $stateParams, CrudService){
  $scope.title = 'Detail';
  var id = $stateParams.id;
  CrudService.get(id)
  .then(function(result){
    $scope.data = result.data;
  })
  .catch(function(result){
    // Handle error
    console.log(result.data);
  })
})
.run(['$state', function($state){
  $state.go('Main');
}])
