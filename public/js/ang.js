var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl : '/html/home.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : '/html/about.html',
            controller  : 'mainController'
        })
        .when('/projects', {
            templateUrl : '/html/projects.html',
            controller  : 'mainController'
        })
        .when('/resources', {
            templateUrl : '/html/resources.html',
            controller  : 'mainController'
        })
        .when('/contact', {
            templateUrl : '/html/contact.html',
            controller  : 'mainController'
        })
})
