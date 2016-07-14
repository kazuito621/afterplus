'use strict';

//Angular App Module and Controller
app.controller('MainCtrl', function ($scope, $http) {
    $scope.tagID = 241658;
    // var result = [];
    $http.get('http://dev.arborplus.com/api/v2.0/afterplus/' + $scope.tagID+ '\'').
      success(function(content){
        $scope.story_content = content.data.story;
        $scope.locations = content.data. imaes;
        $scope.slides = content.data.images;
      });

    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.customIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";

    $scope.viewTree = function(){
        $scope.active = this.id;
    }

    $scope.$on('mapInitialized', function (event, map) {
        $scope.objMapa = map;
    });

    $scope.showInfoWindow = function (event, place) {
        var infowindow = new google.maps.InfoWindow();
        var center = new google.maps.LatLng(place.lat,place.lon);
        infowindow.setContent("<img src=\'" + $scope.slides[this.id].imgLrg +"\'" + "/img>");
        infowindow.setPosition(center);
        infowindow.open($scope.objMapa);
    }
});
