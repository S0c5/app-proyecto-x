var app = angular.module('app', ['ui.router', 'home']);

app.config(['$stateProvider','$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
  $stateProvider.state('app', {
    abstract: true,
    url: '',
    template: '<ui-view></ui-view>'
  }).state('app.home', {
    url: '/home',
    controller: 'home-controller as homeCtrl',
    templateUrl: 'views/home.tpl.html'
  })



  $urlRouterProvider.otherwise('/home');
}])
