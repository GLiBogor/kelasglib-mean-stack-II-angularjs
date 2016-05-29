var app = angular.module('App', ['ui.router'])
.config(function($stateProvider){
  $stateProvider
  .state('Main', {
    url : '/main',
    templateProvider : function($templateCache) {
      return $templateCache.get('main.html');
    }
  })
  .state('About', {
    url : '/about',
    templateProvider : function($templateCache) {
      return $templateCache.get('about.html');
    }
  })
})
.controller('MainController', function($rootScope, $scope){
  $scope.title = 'Main Page';
  $scope.body = 'Velit ut exercitationem quia et laborum ea. Autem ea est et sed. Molestiae vel non modi temporibus quo enim.';
})
.controller('AboutController', function($rootScope, $scope){
  $scope.title = 'About Page';
  $scope.body = 'Tentang kami, ...';
})
.run(['$state', function($state){
  $state.go('Main');
}])
