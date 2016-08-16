var app = angular.module('dwdApp', []);

// Note: prefix with dwd so that it doesn't clobber any other/future "project-item" HTML elements
app.directive('dwdProjectItem', function() {
  console.log('inside directive');
  return {
    // restrict: 'E',
    templateUrl: '/views/projectItem.html'
  };
});

app.service('ProjectService', function($http) {
  var projectService = [];
  projectService.projectItems = [{
    name: 'jQuery, REST, Bootstrap',
    desc: 'Search Wikipedia as-you-type. Results displayed in Responsive Bootstrap table, with error highlighting.',
    codeUrl: 'https://github.com/darrenwdunne/wikisearch',
    runUrl: 'http://54.175.224.58/wikisearch'
  }, {
    name: 'Mobile-First Game Viewer',
    desc: 'Bootstrap and jQuery to view the "featured" list on Twitch.tv via REST api. View in-line previews and direct launch to games in progress.',
    codeUrl: 'https://github.com/darrenwdunne/twitchtv',
    runUrl: 'http://54.175.224.58/twitchtv'
  }, {
    name: 'jQuery, REST api',
    desc: 'Random quote generator automatically pulling quotes from a JSON REST interface.',
    codeUrl: 'https://github.com/darrenwdunne/quotegenerator',
    runUrl: 'http://54.175.224.58/quotegenerator'
  }, {
    name: 'Responsive Web Design with AngularJS',
    desc: 'My website using Bootstrap and AngularJS to demonstrate Responsive web pages with auto-scaling and smooth scrolling on multiple types of devices.',
    codeUrl: 'https://github.com/darrenwdunne/darrenwdunne.github.io.src',
    runUrl: 'http://dwdunne.com'
  }, {
    name: 'HTML5 Canvas Drawing',
    desc: 'Classic "Pong" arcade game demonstrating drawing on HTML5 canvas with collision detection and mouse events.',
    codeUrl: 'https://github.com/darrenwdunne/pong',
    runUrl: 'http://54.175.224.58/pong'
  }, {
    name: 'Geolocation, Google Maps, Weather',
    desc: 'Determine browser location, display on Google Maps, then call the OpenWeatherMap REST api to fetch current weather and display appropriate images.',
    codeUrl: 'https://github.com/darrenwdunne/localweather',
    runUrl: 'http://54.175.224.58/localweather'
  }, {
    name: 'Building with Grunt',
    desc: 'Web site built with Grunt to automatically minify, uglify, concat JavaScript and CSS files to improve performance.',
    codeUrl: 'https://github.com/darrenwdunne/dwdunne-website-build-with-grunt'
  }, {
    name: 'Yeoman, Gulp and Sass',
    desc: 'Web site initialized with Yeoman to get the environment established. Real-time builds are via Gulp to improve runtime performance, and Sass is used to auto-generate the CSS.',
    codeUrl: 'https://github.com/darrenwdunne/dwdunne-website-build-with-gulp'
  }];
  // return $http.get('data/projects.json')
  return projectService;
});

app.controller('ProjectController', function($scope, ProjectService) {
  $scope.projectItems = ProjectService.projectItems;
  console.log($scope.projectItems);
});