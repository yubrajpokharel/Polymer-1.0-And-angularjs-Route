var app = angular.module('shaharma',['ngRoute']);

app.config(function($routeProvider){

      $routeProvider
          .when('/',{
                templateUrl: 'elements/my-list/my-list.html'
          })
          .when('/about',{
                templateUrl: 'elements/my-greeting/my-greeting.html'
          
          })
          .when('/contact',{
                templateUrl: 'elements/contact-form/contact-form.html'
          
          });


});