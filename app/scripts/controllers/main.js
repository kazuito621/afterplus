'use strict';

//Angular App Module and Controller
app.controller('MainCtrl', function ($scope, $http) {
    $scope.tagID = 9099;
    var result = [];
    $http.get('http://dev.arborplus.com/api/v2.0/afterplus/' + $scope.tagID+ '\'').
      success(function(content){
        // $scope.data = content.data;
        // $scope.slides = content.data.images;
      // alert(content.data);
        result = content.data;
      });
    $scope.myInterval = 5000;
    // alert($(#tree_carousel .active).index());
    
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [{
      id: 0,
      image: 'http://lorempixel.com/400/200/food'
    },{
      id: 1,
      image: 'http://lorempixel.com/400/200/sports'
    },{
      id: 2,
      image: 'http://lorempixel.com/400/200/people'
    }];

    $scope.data = [
      {
        treeID: 123456,
        city: 'Toronto',
        desc: 'This is the best city in the world!',
        latitude: 43.7000,
        longitude: -79.4000
      },
      {
        treeID: 12345,
        city: 'New York',
        desc: 'This city is aiiiiite!',
        latitude: 40.6700,
        longitude: -73.9400
      },
      {
        treeID: 1234,
        city: 'Chicago',
        desc: 'This is the second best city in the world!',
        latitude: 41.8819,
        longitude: -87.6278
      },
      {
        treeID: 123,
        city: 'Los Angeles',
        desc: 'This city is live!',
        latitude: 34.0500,
        longitude: -118.2500
      },
      {
        treeID: 12,
        city: 'Las Vegas',
        desc: 'Sin City...\'nuff said!',
        latitude: 36.0800,
        longitude: -115.1522
      }
	];

  $scope.viewTree = function(event){
    alert(this.id);
  }

	// $scope.setPosition = function(index) {
	// 	console.log(index);
	// }

});
