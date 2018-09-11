angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) 
  {
    $scope.listings = Listings;
    $scope.visible_listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.search_value = "";
    $scope.newl = { 
      "code": "", 
      "name": "", 
      "coordinates": {
        "latitude": "", 
        "longitude": ""
      }, 
      "address": ""
    };

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() 
    {
      if ($scope.newl.code == "" ||
          $scope.newl.name == "" ||
          $scope.newl.coordinates.latitude == "" ||
          $scope.newl.coordinates.longitude == "" ||
          $scope.newl.address == "") {
            alert("Fields not filled!");
            return;
      }
      $scope.listings.push($scope.newl);
      $scope.search();
      $scope.newl = { 
        "code": "", 
        "name": "", 
        "coordinates": {
          "latitude": "", 
          "longitude": ""
        }, 
        "address": ""
      };
    };
    $scope.deleteListing = function(index) 
    {
        $scope.listings.splice($scope.detailedInfo.index, 1);
        $scope.detailedInfo = undefined;
        $scope.search();
    };
    $scope.showDetails = function(index) 
    {
      $scope.detailedInfo = $scope.listings[index];
      $scope.detailedInfo.index = index;
    };
    $scope.search = function()
    {
      $scope.visible_listings = [];
      for (var i = 0; i < $scope.listings.length; i++) {
        if ($scope.listings[i].name.toLowerCase().includes($scope.search_value.toLowerCase())
      || $scope.listings[i].code.toLowerCase().includes($scope.search_value.toLowerCase())) {
          $scope.visible_listings.push($scope.listings[i]);
        } 
      }
    };
  }
]);