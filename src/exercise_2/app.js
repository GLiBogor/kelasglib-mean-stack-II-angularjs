var app = angular.module('App', [])
.controller('FirstController', function($rootScope, $scope){
  $scope.greeting = 'Good morning,';
  $rootScope.name = 'Ali';
})
.controller('SecondController', function($rootScope, $scope){
  $scope.greeting = 'Selamat pagi,';
})
